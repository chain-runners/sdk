import { BoxProps } from '@chakra-ui/react'
import { get } from 'lodash-es'
import React, { Dispatch, KeyboardEvent, MutableRefObject, SetStateAction } from 'react'

export enum TerminalMessageType {
  Message,
  Error,
  Echo,
}

export type FileSystemDirectory = {
  name: string
  isLocked?: boolean
  func?: TerminalCommandFunction
  items: Array<FileSystemDirectory | TerminalCommand>
  parent?: FileSystemDirectory
}

export type TerminalMessage = {
  message: React.ReactNode | string
  props?: Partial<BoxProps>
  type?: TerminalMessageType
  workingDirectory?: FileSystemDirectory
}

export type SendToStdoutFunc = (
  message: TerminalMessage | string,
  replaceLastMessage?: boolean,
) => void

export type TerminalData = {
  stdout: Array<TerminalMessage>
  terminalRoot: MutableRefObject<HTMLDivElement | null>
  terminalInput: MutableRefObject<HTMLInputElement | null>
  handleInput: (event: KeyboardEvent<HTMLInputElement>) => void
  executeCommand: (inputStr: string) => Promise<void>
  sendToStdout: SendToStdoutFunc
  clearStdout: () => void
  focusTerminal: (ignoreSelection?: boolean) => void
  fullscreenApp?: React.ReactNode | null
  currentDirectory: FileSystemDirectory
  commandHistory: Array<string>
  isEnabled: boolean
  initializeTerminal: () => Promise<void>
  setSideloadedCommands: Dispatch<SetStateAction<Array<TerminalCommand>>>
  prompt: string | React.ReactElement
}

export type TerminalAppContext = {
  runFullscreenApp: (app: React.ReactNode) => void
  closeFullscreenApp: () => void
}

export type TerminalCommandContext = TerminalAppContext & {
  sendToStdout: SendToStdoutFunc
  clearStdout: () => void
  executeCommand: (inputString: string) => void
  commands: Array<TerminalCommand>
  changeDirectory: (dir: FileSystemDirectory) => void
  setIsEnabled: (isEnabled: boolean) => void
}

export type TerminalCommandFunction = (
  context: TerminalCommandContext,
  args: Array<string>,
) => void | Promise<void>

export type TerminalCommandHelpText = React.ReactNode | string

export type TerminalCommand = {
  name: string
  func: TerminalCommandFunction
  disableEcho?: boolean
  helpText?: TerminalCommandHelpText
}

export function isFileSystemDirectory(value: unknown): value is FileSystemDirectory {
  return Boolean(get(value, 'items'))
}

export function isTerminalCommand(value: unknown): value is TerminalCommand {
  return Boolean(get(value, 'func'))
}

export type FileSystemData = {
  currentDirectory: FileSystemDirectory
  rootDirectory: FileSystemDirectory
  commands: Array<TerminalCommand>
  resolvePath: (path: string) => TerminalCommand | FileSystemDirectory | undefined
  changeDirectory: (dir: FileSystemDirectory) => void
}

export type FileSystemConfig = {
  rootDirItems?: Array<FileSystemDirectory | TerminalCommand>
  homeDirPath?: string
}

export type TerminalBootSequenceFunction = (
  context: TerminalCommandContext,
) => Promise<void>

export type TerminalConfig = {
  customCommands?: Array<TerminalCommand>
  initialMessages?: Array<TerminalMessage>
  bootSequence?: TerminalBootSequenceFunction
  fileSystem?: Array<FileSystemDirectory | TerminalCommand>
  prompt?: string | React.ReactElement
}

export enum TerminalHistoryScrollDirection {
  Up,
  Down,
}

export type NetworkedTerminal = {
  name: string
  terminalData: TerminalData
}
