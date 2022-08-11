import React, { useContext } from 'react'
import { HACKER_GREEN_COLOR } from '../theme'
import { usePersistedState } from './usePersistedState'

export type PrimaryThemeColorContextValue = {
  primaryColor: string
  setPrimaryColor: (color: string) => void
}

export const DEFAULT_PRIMARY_THEME_COLOR = HACKER_GREEN_COLOR

const PrimaryThemeColorContext = React.createContext<PrimaryThemeColorContextValue>({
  primaryColor: DEFAULT_PRIMARY_THEME_COLOR,
  setPrimaryColor: () => {
    return
  },
})

export type PrimaryThemeColorProviderProps = {
  children?: React.ReactElement
}

export const PrimaryThemeColorProvider: React.FC<PrimaryThemeColorProviderProps> = ({ children }) => {
  const [color, setColor] = usePersistedState<string>(
    DEFAULT_PRIMARY_THEME_COLOR,
    'PrimaryThemeColor',
  )
  return (
    <PrimaryThemeColorContext.Provider
      value={{
        primaryColor: color,
        setPrimaryColor: setColor,
      }}
    >
      {children}
    </PrimaryThemeColorContext.Provider>
  )
}

export function usePrimaryColor(): PrimaryThemeColorContextValue {
  return useContext(PrimaryThemeColorContext)
}
