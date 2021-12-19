import { TerminalCommand, TerminalMessageType } from '../types'

export const echoCommand: TerminalCommand = {
  name: 'echo',
  func: async ({ sendToStdout }, args) => {
    sendToStdout({
      message: args.join(' '),
      type: TerminalMessageType.Message,
    })
  },
}
