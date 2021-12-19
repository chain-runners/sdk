import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { usePersistedState } from '../../hooks'
import { echoCommand } from './commands/echo'
import {
  isFileSystemDirectory,
  isTerminalCommand,
  SendToStdoutFunc,
  TerminalCommand,
  TerminalCommandContext,
  TerminalConfig,
  TerminalData,
  TerminalHistoryScrollDirection,
  TerminalMessage,
  TerminalMessageType,
} from './types'
import { useFileSystem } from './useFileSystem'
import { resolveFilepath } from './utils'

async function defaultBootSequence({
  setIsEnabled,
}: TerminalCommandContext): Promise<void> {
  setIsEnabled(true)
}

export function useTerminal(config?: TerminalConfig): TerminalData {
  const {
    commands: fileSystemCommands,
    currentDirectory,
    resolvePath,
    changeDirectory,
    rootDirectory,
  } = useFileSystem({ rootDirItems: config?.fileSystem })

  const [isEnabled, setIsEnabled] = useState(true)
  const [fullscreenApp, setFullscreenApp] = useState<React.ReactNode | null>(null)
  const terminalRoot = useRef<HTMLDivElement | null>(null)
  const terminalInput = useRef<HTMLInputElement | null>(null)
  const [sideloadedCommands, setSideloadedCommands] = useState<Array<TerminalCommand>>([])
  const [commands, setCommands] = useState<Array<TerminalCommand>>([])
  const [commandHistory, setCommandHistory] = usePersistedState<Array<string>>(
    [],
    'terminalCommandHistory',
  )
  const [stdout, setStdout] = useState<Array<TerminalMessage>>(
    config?.initialMessages ?? [],
  )

  const focusTerminal = useCallback((ignoreSelection = false) => {
    const isTextSelected = window.getSelection()?.type === 'Range'

    if (ignoreSelection || !isTextSelected) {
      terminalInput.current?.focus()
    }
  }, [])

  const scrollToBottom = useCallback((delay = 1) => {
    const terminal = terminalRoot.current
    if (!terminal) return
    setTimeout(() => {
      terminal.scrollTop = terminal.scrollHeight
    }, delay)
  }, [])

  const allCommands = useRef<Array<TerminalCommand>>([])
  allCommands.current = commands

  const currentDirRef = useRef(currentDirectory)
  currentDirRef.current = currentDirectory

  const rootDirRef = useRef(rootDirectory)
  const commandDirRef = useRef(currentDirectory)
  const sendToStdout: SendToStdoutFunc = useCallback(
    (message: TerminalMessage | string, replaceLastMessage?: boolean) => {
      setStdout((stdout) => {
        const oldMessages =
          replaceLastMessage && stdout.length
            ? stdout.filter((m, i) => i !== stdout.length - 1)
            : stdout
        const terminalMessage: TerminalMessage =
          typeof message === 'string'
            ? {
                message,
                type: TerminalMessageType.Message,
              }
            : message
        terminalMessage.workingDirectory = commandDirRef.current
        return [...oldMessages, terminalMessage]
      })
      scrollToBottom()
    },
    [scrollToBottom],
  )

  const clearStdout = useCallback(() => {
    setStdout([])
  }, [])

  const runFullscreenApp = useCallback((app: React.ReactNode) => {
    setFullscreenApp(app)
  }, [])

  const closeFullscreenApp = useCallback(() => {
    setFullscreenApp(null)
    setTimeout(() => {
      terminalInput.current?.focus()
    }, 1)
  }, [])

  const addCommandToHistory = useCallback(
    (command: string) => {
      setCommandHistory((commands) => {
        if (commands[0] === command) {
          return commands
        }
        return [command, ...commands].slice(0, 100)
      })
    },
    [setCommandHistory],
  )

  const executeCommand = useCallback(
    async (inputStr: string, forceDisableEcho?: boolean): Promise<void> => {
      addCommandToHistory(inputStr)
      const input = inputStr.split(' ')
      const rawCommand = input.splice(0, 1)[0]
      const args = input

      const fileSystemCommand = resolvePath(rawCommand)
      if (isFileSystemDirectory(fileSystemCommand)) {
        sendToStdout({ message: inputStr, type: TerminalMessageType.Echo })
        if (fileSystemCommand.isLocked) {
          sendToStdout({ message: 'Access Denied.', type: TerminalMessageType.Error })
          return
        }
        changeDirectory(fileSystemCommand)
        return
      }

      const command = isTerminalCommand(fileSystemCommand)
        ? fileSystemCommand
        : commands.find(
            (command) => command.name.toLowerCase() === rawCommand.toLowerCase(),
          )
      if (!(forceDisableEcho || command?.disableEcho)) {
        sendToStdout({ message: inputStr, type: TerminalMessageType.Echo })
      }

      if (command) {
        commandDirRef.current = currentDirRef.current
        await command.func(
          {
            sendToStdout,
            clearStdout,
            executeCommand: (inputString) => executeCommand(inputString, true),
            commands,
            runFullscreenApp,
            closeFullscreenApp,
            changeDirectory,
            setIsEnabled,
          },
          args,
        )
      } else {
        sendToStdout({
          message: `Command not found: ${rawCommand}`,
          type: TerminalMessageType.Error,
        })
      }
    },
    [
      changeDirectory,
      resolvePath,
      sendToStdout,
      clearStdout,
      commands,
      runFullscreenApp,
      closeFullscreenApp,
      addCommandToHistory,
    ],
  )

  const customBootSequence = config?.bootSequence
  const bootSequence = useMemo(
    () => customBootSequence ?? defaultBootSequence,
    [customBootSequence],
  )
  const initializeTerminal = useCallback(async () => {
    clearStdout()
    setIsEnabled(false)

    const context: TerminalCommandContext = {
      sendToStdout,
      clearStdout,
      executeCommand: (inputString: string) => executeCommand(inputString, true),
      commands,
      runFullscreenApp,
      closeFullscreenApp,
      changeDirectory,
      setIsEnabled,
    }

    await bootSequence(context)
  }, [
    bootSequence,
    changeDirectory,
    clearStdout,
    closeFullscreenApp,
    commands,
    executeCommand,
    runFullscreenApp,
    sendToStdout,
  ])

  const { customCommands } = config ?? {}
  useEffect(() => {
    const allCommands: Array<TerminalCommand> = [
      {
        name: 'clear',
        func: clearStdout,
      },
      {
        name: 'clearHistory',
        func: () => {
          setCommandHistory([])
        },
      },
      echoCommand,
      ...fileSystemCommands,
      ...(customCommands ?? []),
      ...sideloadedCommands,
    ]

    const helpCommand: TerminalCommand = {
      name: 'help',
      func: ({ commands, sendToStdout }) => {
        for (const c of commands) {
          if (!c.helpText) continue
          sendToStdout({ message: c.helpText })
        }
      },
    }

    setCommands([helpCommand, ...allCommands])
  }, [
    sideloadedCommands,
    clearStdout,
    fileSystemCommands,
    customCommands,
    setCommandHistory,
  ])

  const scrollHistoryCursor = useRef(0)
  const historyOriginalCommand = useRef('')
  const resetHistoryState = useCallback(() => {
    scrollHistoryCursor.current = 0
    historyOriginalCommand.current = ''
  }, [])

  const processCommand = useCallback(() => {
    const input = terminalInput.current
    if (!input) return
    const message = input.value
    if (!message) return
    resetHistoryState()
    executeCommand(message)
    input.value = ''
  }, [executeCommand, resetHistoryState])

  const scrollThroughHistory = useCallback(
    (direction: TerminalHistoryScrollDirection) => {
      const input = terminalInput.current
      if (!input) return

      const currentValue = input.value
      if (scrollHistoryCursor.current === 0) {
        historyOriginalCommand.current = currentValue
      }

      const applicableCommands = commandHistory.filter((c) =>
        c.startsWith(historyOriginalCommand.current),
      )

      const directionMovement = direction === TerminalHistoryScrollDirection.Up ? 1 : -1
      scrollHistoryCursor.current = Math.min(
        Math.max(0, scrollHistoryCursor.current + directionMovement),
        applicableCommands.length,
      )

      const newCommand = applicableCommands[scrollHistoryCursor.current - 1]
      input.value = newCommand ?? historyOriginalCommand.current
      input.selectionStart = input.value.length
      input.selectionEnd = input.value.length
      setTimeout(() => {
        input.selectionStart = input.value.length
        input.selectionEnd = input.value.length
      }, 1)
    },
    [commandHistory],
  )

  const handleInput = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      switch (event.key) {
        case 'Enter': {
          processCommand()
          break
        }
        case 'ArrowUp': {
          scrollThroughHistory(TerminalHistoryScrollDirection.Up)
          break
        }
        case 'ArrowDown': {
          scrollThroughHistory(TerminalHistoryScrollDirection.Down)
          break
        }
        case 'Tab': {
          event.preventDefault()
          const input = terminalInput.current
          if (!input) return
          const commandSegments = input.value.split(' ')
          const isCommandWithAutocomplete =
            commandSegments[0] === 'cd' || commandSegments[0] === 'less'
          const path =
            (isCommandWithAutocomplete ? commandSegments[1] : commandSegments[0]) ?? ''

          const [resolved, remainingPath] = resolveFilepath(
            path,
            currentDirRef.current,
            rootDirRef.current,
            true,
          )

          if (remainingPath === null) {
            return
          }

          const searchItems =
            remainingPath && isFileSystemDirectory(resolved)
              ? resolved.items
              : isCommandWithAutocomplete
              ? []
              : allCommands.current

          const searchString = remainingPath

          const applicableCommands = searchItems
            .map((i) => i.name)
            .filter((c) => c.startsWith(searchString))
          if (applicableCommands.length === 1) {
            input.value = `${
              isCommandWithAutocomplete ? `${commandSegments[0]} ` : ''
            }${path.substr(0, path.length - searchString.length)}${applicableCommands[0]}`
          }
          break
        }
        default: {
          resetHistoryState()
        }
      }
    },
    [processCommand, scrollThroughHistory, resetHistoryState],
  )

  const configPrompt = config?.prompt
  const prompt = useMemo(() => configPrompt ?? '$', [configPrompt])

  return {
    isEnabled,
    stdout,
    terminalRoot,
    terminalInput,
    handleInput,
    sendToStdout,
    clearStdout,
    focusTerminal,
    executeCommand,
    fullscreenApp,
    currentDirectory,
    commandHistory,
    initializeTerminal,
    setSideloadedCommands,
    prompt,
  }
}
