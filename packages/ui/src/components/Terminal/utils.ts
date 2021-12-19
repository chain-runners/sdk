import { FileSystemDirectory, isFileSystemDirectory, TerminalCommand } from './types'

export function getFullDirectoryPath(directory: FileSystemDirectory): string {
  let workingDirPath = ''
  let workingDir: FileSystemDirectory = directory
  while (workingDir.parent) {
    workingDirPath = `/${workingDir.name}${workingDirPath}`
    workingDir = workingDir.parent
  }
  return workingDirPath
}

export function resolveFilepath(
  path: string,
  currentDir: FileSystemDirectory,
  rootDir: FileSystemDirectory,
  returnCursorOnUndefined = false,
): [TerminalCommand | FileSystemDirectory | undefined, string | null] {
  let dirCursor: FileSystemDirectory | undefined = path.startsWith('/')
    ? rootDir
    : currentDir

  const pathParts = path.split('/').filter(Boolean)

  for (const part of pathParts) {
    if (part === '.') {
      continue
    }
    if (part === '..') {
      dirCursor = dirCursor.parent ?? dirCursor
      continue
    }
    const item: TerminalCommand | FileSystemDirectory | undefined = dirCursor.items.find(
      (i) => i.name === part,
    )
    if (isFileSystemDirectory(item)) {
      dirCursor = item
      continue
    }
    if (item === undefined) {
      return returnCursorOnUndefined ? [dirCursor, part] : [undefined, part]
    }
    return [item, null]
  }

  return [dirCursor, null]
}
