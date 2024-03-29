import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import {
  PersistentPrimaryThemeColorProvider,
  PrimaryThemeColorProvider,
} from '../hooks/usePrimaryColor'
import { defaultHackerUITheme, HackerUITheme } from '../theme'
import { GlobalStylesProvider } from './GlobalStylesProvider'

export type HackerUIProviderProps = {
  children?: React.ReactElement
  theme?: HackerUITheme
  withPersistentThemeChanges?: boolean
  defaultPrimaryColor?: string
}

export const HackerUIProvider: React.FC<HackerUIProviderProps> = ({
  theme = defaultHackerUITheme,
  withPersistentThemeChanges = true,
  children,
  defaultPrimaryColor,
}) => {
  const ThemColorProvider = useMemo(() => {
    return withPersistentThemeChanges
      ? PersistentPrimaryThemeColorProvider
      : PrimaryThemeColorProvider
  }, [withPersistentThemeChanges])

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ThemColorProvider color={defaultPrimaryColor}>
        <GlobalStylesProvider>{children}</GlobalStylesProvider>
      </ThemColorProvider>
    </ChakraProvider>
  )
}
