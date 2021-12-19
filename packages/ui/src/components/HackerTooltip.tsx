import { Tooltip, TooltipProps } from '@chakra-ui/react'
import React from 'react'
import { usePrimaryColor } from '../hooks'

export type HackerTooltipProps = TooltipProps

// eslint-disable-next-line react/display-name
export const HackerTooltip: React.FC<HackerTooltipProps> = React.forwardRef(
  ({ ...props }, ref) => {
    const { primaryColor } = usePrimaryColor()
    return (
      <Tooltip
        ref={ref as any}
        variant="outline"
        colorScheme={primaryColor}
        borderRadius={0}
        fontWeight="thin"
        bgColor="blackAlpha.700"
        color={primaryColor}
        borderColor={primaryColor}
        borderWidth="1px"
        openDelay={300}
        {...props}
      />
    )
  },
)
