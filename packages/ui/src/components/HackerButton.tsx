import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'
import { usePrimaryColor } from '../hooks'
import { alphaColor } from '../utils/colors'

export type HackerButtonProps = ButtonProps & {
  filled?: boolean
  colorHex?: string
}

// eslint-disable-next-line react/display-name
export const HackerButton: React.FC<HackerButtonProps> = React.forwardRef(
  ({ filled, colorHex, ...props }, ref) => {
    const { primaryColor } = usePrimaryColor()
    const color = colorHex ?? primaryColor
    return (
      <Button
        ref={ref as any}
        variant="outline"
        colorScheme={color}
        borderRadius={0}
        fontWeight="thin"
        borderColor={color}
        bgColor={filled ? color : undefined}
        color={filled ? 'black' : color}
        _focus={{ outline: 0 }}
        _hover={{
          bgColor: filled ? alphaColor(color, 0.7) : alphaColor(color, 0.1),
        }}
        _active={{
          bgColor: filled ? alphaColor(color, 0.9) : alphaColor(color, 0.2),
        }}
        {...props}
      />
    )
  },
)
