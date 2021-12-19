import { Box, BoxProps } from '@chakra-ui/react'
import React, { SVGProps } from 'react'
import { usePrimaryColor } from '../hooks'

export enum NotchedCornerPosition {
  TopLeft = 'TopLeft',
  TopRight = 'TopRight',
  BottomLeft = 'BottomLeft',
  BottomRight = 'BottomRight',
}

function getNotchedPolygonPoints(size: number, position: NotchedCornerPosition): string {
  switch (position) {
    case NotchedCornerPosition.TopLeft: {
      return `0 0 0 ${size} ${size} 0`
    }
    case NotchedCornerPosition.TopRight: {
      return `0 0 ${size} ${size} ${size} 0`
    }
    case NotchedCornerPosition.BottomLeft: {
      return `0 0 ${size} ${size} 0 ${size}`
    }
    case NotchedCornerPosition.BottomRight: {
      return `0 ${size} ${size} 0 ${size} ${size}`
    }
  }
}

function getNotchedCornerPositionProps(
  position: NotchedCornerPosition,
): Partial<BoxProps> {
  switch (position) {
    case NotchedCornerPosition.TopLeft: {
      return {
        top: -0.2032,
        left: 0,
      }
    }
    case NotchedCornerPosition.TopRight: {
      return {
        top: 0,
        right: 0,
      }
    }
    case NotchedCornerPosition.BottomLeft: {
      return {
        bottom: 0,
        left: 0,
      }
    }
    case NotchedCornerPosition.BottomRight: {
      return {
        bottom: 0,
        right: 0,
      }
    }
  }
}

function getNotchedLineProps(
  size: number,
  position: NotchedCornerPosition,
): Partial<SVGProps<any>> {
  switch (position) {
    case NotchedCornerPosition.TopLeft: {
      return {
        x1: 0,
        y1: size,
        x2: size,
        y2: 0,
      }
    }
    case NotchedCornerPosition.TopRight: {
      return {
        x1: 0,
        y1: 0,
        x2: size,
        y2: size,
      }
    }
    case NotchedCornerPosition.BottomLeft: {
      return {
        x1: 0,
        y1: 0,
        x2: size,
        y2: size,
      }
    }
    case NotchedCornerPosition.BottomRight: {
      return {
        x1: 0,
        y1: size,
        x2: size,
        y2: 0,
      }
    }
  }
}

export type NotchedCornerProps = {
  size: number
  position: NotchedCornerPosition
}

export const NotchedCorner: React.FC<NotchedCornerProps> = ({ size, position }) => {
  const { primaryColor } = usePrimaryColor()

  const positionProps = getNotchedCornerPositionProps(position)
  const polygonPoints = getNotchedPolygonPoints(size, position)
  const lineProps = getNotchedLineProps(size, position)
  return (
    <Box position="absolute" height={`${size}px`} width={`${size}px`} {...positionProps}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline points={polygonPoints} fill="black" />
        <line stroke={primaryColor} strokeLinecap="square" {...lineProps} />
      </svg>
    </Box>
  )
}
