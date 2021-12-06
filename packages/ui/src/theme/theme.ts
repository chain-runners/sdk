import { extendTheme, Theme, ThemeConfig } from '@chakra-ui/react'
import { Styles } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const HACKER_GREEN_COLOR = '#16E951'
export const HACKER_RED_COLOR = '#F81236'
export const HACKER_PINK_COLOR = '#FF009C'
export const HACKER_ORANGE_COLOR = '#F89C12'

const styles: Styles = {
  global: {
    body: {
      bg: '#000000',
      color: HACKER_GREEN_COLOR,
    },
  },
}

const themeExtension = {
  config,
  fonts: {
    heading: 'Source Serif Pro',
    body: 'Roboto Mono',
    pixel: 'Pixelar Regular W01 Regular',
  },
  colors: {
    hackerGreen: HACKER_GREEN_COLOR,
    hackerRed: HACKER_RED_COLOR,
    hackerPink: HACKER_PINK_COLOR,
    hackerOrange: HACKER_ORANGE_COLOR,
  },
  styles,
}

export type HackerUITheme = Theme & typeof themeExtension
export const defaultHackerUITheme = extendTheme(themeExtension)
