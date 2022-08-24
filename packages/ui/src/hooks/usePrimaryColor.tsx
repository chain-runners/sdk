import React, { useContext, useState } from 'react'
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
  color?: string
  children?: React.ReactElement
}

export const PersistentPrimaryThemeColorProvider: React.FC<
  PrimaryThemeColorProviderProps
> = ({ children, color: defaultColor }) => {
  const [color, setColor] = usePersistedState<string>(
    defaultColor ?? DEFAULT_PRIMARY_THEME_COLOR,
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

export const PrimaryThemeColorProvider: React.FC<PrimaryThemeColorProviderProps> = ({
  children,
  color: defaultColor,
}) => {
  const [color, setColor] = useState<string>(defaultColor ?? DEFAULT_PRIMARY_THEME_COLOR)
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
