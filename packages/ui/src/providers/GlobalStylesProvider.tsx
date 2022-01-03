import { css, Global } from '@emotion/react'
import React from 'react'
import './fonts.css'

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
