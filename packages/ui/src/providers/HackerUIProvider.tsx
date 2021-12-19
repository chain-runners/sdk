import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import { PrimaryThemeColorProvider } from '../hooks/usePrimaryColor'
import { defaultHackerUITheme, HackerUITheme } from '../theme'
import { GlobalStylesProvider } from './GlobalStylesProvider'

export type HackerUIProviderProps = {
  theme?: HackerUITheme
}

export const HackerUIProvider: React.FC<HackerUIProviderProps> = ({
  theme = defaultHackerUITheme,
  children,
}) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <PrimaryThemeColorProvider>
        <GlobalStylesProvider>{children}</GlobalStylesProvider>
      </PrimaryThemeColorProvider>
    </ChakraProvider>
  )
}
