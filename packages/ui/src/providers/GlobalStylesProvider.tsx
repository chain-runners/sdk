import { css, Global } from '@emotion/react'
import React from 'react'

export const GlobalStylesProvider: React.FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          .pixelart {
            image-rendering: pixelated;
          }
        `}
      />
      {children}
    </>
  )
}
