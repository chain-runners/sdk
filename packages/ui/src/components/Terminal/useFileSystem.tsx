import { Box } from '@chakra-ui/react'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { usePrimaryColor } from '../../hooks'
import {
  FileSystemConfig,
  FileSystemData,
  FileSystemDirectory,
  isFileSystemDirectory,
  isTerminalCommand,
  TerminalCommand,
  TerminalCommandContext,
  TerminalCommandFunction,
  TerminalMessageType,
} from './types'
import { getFullDirectoryPath, resolveFilepath } from './utils'

export const DEFAULT_FILE_SYSTEM: Array<TerminalCommand | FileSystemDirectory> = [
  {
    name: 'home',
    items: [],
  },
  {
    name: 'usr',
    items: [],
  },
]

export const ACCESS_DENIED_FUNCTION = async ({
  sendToStdout,
}: TerminalCommandContext): Promise<void> => {
  sendToStdout({ message: 'Access Denied.', type: TerminalMessageType.Error })
}

export const TERMINAL_ROOT_DIR = '/'

function mapParentDirectories(
  dir: FileSystemDirectory,
  parentDir?: FileSystemDirectory,
): FileSystemDirectory {
  const newDir: FileSystemDirectory = {
    ...dir,
    func: dir?.isLocked
      ? ACCESS_DENIED_FUNCTION
      : ({ changeDirectory }) => {
          changeDirectory(dir)
        },
    parent: parentDir,
  }

  newDir.items = newDir.items.map((item) => {
    if (!isFileSystemDirectory(item)) return item
    return mapParentDirectories(item, newDir)
  })

  return newDir
}

export function useFileSystem({
  rootDirItems,
  homeDirPath = TERMINAL_ROOT_DIR,
}: FileSystemConfig): FileSystemData {
  const { primaryColor } = usePrimaryColor()

  const rootDir: FileSystemDirectory = useMemo(() => {
    return mapParentDirectories({
      name: TERMINAL_ROOT_DIR,
      items: rootDirItems ?? DEFAULT_FILE_SYSTEM,
    })
  }, [rootDirItems])
  const homeDir: FileSystemDirectory = useMemo(() => {
    const dir = resolveFilepath(homeDirPath, rootDir, rootDir)
    return isFileSystemDirectory(dir) ? dir : rootDir
  }, [rootDir, homeDirPath])
  const [currentDirectory, setCurrentDirectory] = useState(homeDir)
  const currentDirRef = useRef<FileSystemDirectory>(currentDirectory)
  currentDirRef.current = currentDirectory

  const resolvePath = useCallback(
    (path: string): TerminalCommand | FileSystemDirectory | undefined => {
      return resolveFilepath(path, currentDirRef.current, rootDir)[0]
    },
    [rootDir],
  )

  const handleChangeDirectory: TerminalCommandFunction = useCallback(
    ({ sendToStdout }, args) => {
      if (!args[0]) {
        setCurrentDirectory(homeDir)
        return
      }
      const dir = resolvePath(args[0])
      if (!dir) {
        sendToStdout({
          message: `${args.join()} not found`,
          type: TerminalMessageType.Error,
        })
        return
      }
      if (!isFileSystemDirectory(dir)) {
        sendToStdout({
          message: `${args.join()} is not a directory`,
          type: TerminalMessageType.Error,
        })
        return
      }
      if (dir.isLocked) {
        sendToStdout({
          message: 'Access Denied.',
          type: TerminalMessageType.Error,
        })
        return
      }
      setCurrentDirectory(dir)
    },
    [resolvePath, homeDir],
  )

  const changeDirectoryCommand: TerminalCommand = useMemo(() => {
    return {
      name: 'cd',
      helpText: 'cd - Change terminal directory - cd <path name>',
      func: handleChangeDirectory,
    }
  }, [handleChangeDirectory])

  const handleList: TerminalCommandFunction = useCallback(
    ({ sendToStdout }) => {
      sendToStdout({
        message: (
          <>
            {currentDirRef.current.items.map((item, index) => (
              <Box
                as="span"
                key={index}
                mr={1}
                fontWeight={isFileSystemDirectory(item) ? primaryColor : undefined}
                color={isFileSystemDirectory(item) ? primaryColor : undefined}
              >
                {item.name}
              </Box>
            ))}
          </>
        ),
      })
    },
    [primaryColor],
  )

  const listCommand: TerminalCommand = useMemo(() => {
    return {
      name: 'ls',
      func: handleList,
      helpText: 'ls - List folders and files in the current directory',
    }
  }, [handleList])

  const handleWorkingDir: TerminalCommandFunction = useCallback(({ sendToStdout }) => {
    sendToStdout(getFullDirectoryPath(currentDirRef.current))
  }, [])

  const workingDirCommand: TerminalCommand = useMemo(() => {
    return {
      name: 'pwd',
      func: handleWorkingDir,
    }
  }, [handleWorkingDir])

  const lessCommand: TerminalCommand = useMemo(() => {
    return {
      name: 'less',
      helpText: 'less - Read text files - less <filepath>',
      func: async (context, args) => {
        const { sendToStdout } = context
        const filePath = args[0]
        if (!filePath) {
          sendToStdout({
            message: 'No filepath passed',
            type: TerminalMessageType.Error,
          })
          return
        }

        const file = resolvePath(filePath)
        if (!file) {
          sendToStdout({
            message: `File not found at ${filePath}`,
            type: TerminalMessageType.Error,
          })
          return
        }

        if (isFileSystemDirectory(file)) {
          sendToStdout({
            message: `${filePath} is a directory`,
            type: TerminalMessageType.Error,
          })
          return
        }

        if (!file.name.endsWith('.txt')) {
          sendToStdout({
            message: `${filePath} is not a txt file`,
            type: TerminalMessageType.Error,
          })
          return
        }

        await file.func(context, [])
      },
    }
  }, [resolvePath])

  const commands: Array<TerminalCommand> = useMemo(() => {
    const currentDirectoryCommands = currentDirectory.items.filter(isTerminalCommand)
    return [
      changeDirectoryCommand,
      listCommand,
      workingDirCommand,
      lessCommand,
      ...currentDirectoryCommands,
    ]
  }, [
    lessCommand,
    currentDirectory,
    changeDirectoryCommand,
    listCommand,
    workingDirCommand,
  ])

  return {
    currentDirectory,
    commands,
    resolvePath,
    rootDirectory: rootDir,
    changeDirectory: setCurrentDirectory,
  }
}
