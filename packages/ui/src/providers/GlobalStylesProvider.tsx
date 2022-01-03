import { css, Global } from '@emotion/react'
import React from 'react'

export const GlobalStylesProvider: React.FC = ({ children }) => {
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
