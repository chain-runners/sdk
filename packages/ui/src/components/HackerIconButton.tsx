import { IconButton, IconButtonProps } from '@chakra-ui/react'
import React from 'react'
import { usePrimaryColor } from '../hooks'
import { alphaColor } from '../utils/colors'

export type HackerIconButtonProps = Omit<IconButtonProps, 'aria-label'> & {
  filled?: boolean
}

// eslint-disable-next-line react/display-name
export const HackerIconButton: React.FC<HackerIconButtonProps> = React.forwardRef(
  ({ filled, ...props }, ref) => {
    const { primaryColor } = usePrimaryColor()
    return (
      <IconButton
        aria-label=""
        ref={ref as any}
        variant="outline"
        colorScheme={primaryColor}
        borderRadius={0}
        textTransform="uppercase"
        fontWeight="thin"
        bgColor={filled ? primaryColor : undefined}
        color={filled ? 'black' : undefined}
        _focus={{ outline: 0 }}
        _hover={{
          bgColor: filled ? alphaColor(primaryColor, 0.7) : alphaColor(primaryColor, 0.1),
        }}
        _active={{
          bgColor: filled ? alphaColor(primaryColor, 0.9) : alphaColor(primaryColor, 0.2),
        }}
        {...props}
      />
    )
  },
)
