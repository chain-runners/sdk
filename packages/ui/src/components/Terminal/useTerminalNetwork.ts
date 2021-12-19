import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  NetworkedTerminal,
  TerminalCommand,
  TerminalData,
  TerminalMessageType,
} from './types'

export type UseTerminalNetworkProps = {
  localTerminal: TerminalData
  connectedNetworks: Array<NetworkedTerminal>
}

export type UseTerminalNetworkValue = {
  availableNetworks: Array<NetworkedTerminal>
  activeNetwork: NetworkedTerminal
  setActiveNetwork: (networkName: string, skipInitialization?: boolean) => Promise<void>
}

export const HOME_NETWORK_NAME = 'home'

export type SetActiveNetworkFunction = (
  networkName: string,
  skipInitialization?: boolean,
) => Promise<void>

function buildSSHCommand(
  connectedNetworks: Array<NetworkedTerminal>,
  setActiveNetwork: SetActiveNetworkFunction,
): TerminalCommand {
  return {
    name: 'ssh',
    helpText: 'ssh - Connect to available network - ssh <network name>',
    func: async ({ sendToStdout }, args) => {
      const network = connectedNetworks.find((net) => net.name === args[0])
      if (!network) {
        sendToStdout({
          message: `ssh: connect to host ${args[0]} port 22: Connection refused`,
          type: TerminalMessageType.Error,
        })
        return
      }
      await setActiveNetwork(network.name)
    },
  }
}

type GetNetworkByNameFunc = (networkName: string) => NetworkedTerminal

export function useTerminalNetwork({
  localTerminal,
  connectedNetworks,
}: UseTerminalNetworkProps): UseTerminalNetworkValue {
  const homeNetwork: NetworkedTerminal = {
    name: HOME_NETWORK_NAME,
    terminalData: localTerminal,
  }

  const homeNetworkRef = useRef<NetworkedTerminal>(homeNetwork)
  homeNetworkRef.current = homeNetwork

  const connectedNetworksRef = useRef<Array<NetworkedTerminal>>(connectedNetworks)
  const [activeNetworkName, setActiveNetworkName] = useState<string>(HOME_NETWORK_NAME)

  const getNetworkByName = (networkName: string): NetworkedTerminal => {
    return connectedNetworks.find((n) => n.name === networkName) ?? homeNetwork
  }
  const getNetworkByNameRef = useRef<GetNetworkByNameFunc>(getNetworkByName)
  getNetworkByNameRef.current = getNetworkByName

  const activeNetwork = useRef<NetworkedTerminal>(homeNetwork)
  activeNetwork.current = getNetworkByName(activeNetworkName)

  const setActiveNetwork: SetActiveNetworkFunction = useCallback(
    async (networkName: string, skipInitialization = false): Promise<void> => {
      setActiveNetworkName(networkName)
      const newNetwork = getNetworkByNameRef.current(networkName)
      if (!skipInitialization) {
        await newNetwork.terminalData.initializeTerminal()
      }
    },
    [],
  )

  const logoutCommand = useMemo((): TerminalCommand => {
    return {
      name: 'logout',
      helpText: 'logout - End terminal session',
      func: async () => {
        const networkName = activeNetwork.current.name
        await setActiveNetwork(HOME_NETWORK_NAME, true)
        homeNetworkRef.current.terminalData.sendToStdout(
          `Connection to ${networkName} closed.`,
        )
      },
    }
  }, [setActiveNetwork])

  const initializeNetworkLinks = useCallback(() => {
    homeNetworkRef.current.terminalData.setSideloadedCommands(() => {
      return [buildSSHCommand(connectedNetworksRef.current, setActiveNetwork)]
    })

    connectedNetworksRef.current.forEach((network) => {
      network.terminalData.setSideloadedCommands([logoutCommand])
    })
  }, [setActiveNetwork, logoutCommand])

  const initialized = useRef(0)
  useEffect(() => {
    if (initialized.current !== connectedNetworks.length) {
      initialized.current = connectedNetworks.length
      initializeNetworkLinks()
    }
  }, [initializeNetworkLinks, connectedNetworks])

  return {
    activeNetwork: activeNetwork.current,
    setActiveNetwork,
    availableNetworks: connectedNetworks,
  }
}
