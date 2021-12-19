import { Box, BoxProps, FlexProps } from '@chakra-ui/react'
import { MotionProps } from 'framer-motion'
import React, { useMemo } from 'react'
import { usePrimaryColor } from '../hooks'
import { MotionFlex } from '../utils/animation'
import { NotchedCorner, NotchedCornerPosition } from './NotchedCorner'

export type HackerBoxProps = Partial<FlexProps & MotionProps> & {
  headerBar?: boolean
  innerContainerProps?: Partial<BoxProps>
  themeColor?: string
  notchedCorner?: NotchedCornerPosition
  notchedCornerSize?: number
}

export const HackerBox: React.FC<HackerBoxProps> = ({
  children,
  headerBar,
  innerContainerProps,
  themeColor,
  notchedCorner,
  notchedCornerSize = 16,
  ...props
}) => {
  const { primaryColor: defaultColor } = usePrimaryColor()
  const color = useMemo(() => themeColor ?? defaultColor, [themeColor, defaultColor])

  return (
    <MotionFlex bgColor="black" direction="column" position="relative" {...props}>
      {headerBar && <Box height="18px" width="full" backgroundColor={color} />}
      <Box
        borderWidth="1px"
        borderColor={color}
        borderStyle="1px"
        padding={3}
        width="full"
        maxHeight="full"
        flex={1}
        {...innerContainerProps}
      >
        {notchedCorner && (
          <NotchedCorner position={notchedCorner} size={notchedCornerSize} />
        )}
        {children}
      </Box>
    </MotionFlex>
  )
}
