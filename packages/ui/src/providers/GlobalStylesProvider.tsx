import { css, Global } from '@emotion/react'
import React from 'react'

export type GlobalStylesProviderProps = {
  children?: React.ReactElement
}

export const GlobalStylesProvider: React.FC<GlobalStylesProviderProps> = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

          .pixelart {
            image-rendering: pixelated;
          }
        `}
      />
      {children}
    </>
  )
}
