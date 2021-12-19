import { Box, Flex, FlexProps } from '@chakra-ui/react'
import { range } from 'lodash'
import React, { useMemo } from 'react'
import { usePrimaryColor } from '../hooks'
import { alphaColor } from '../utils/colors'

export type ScanLinesProps = Partial<FlexProps> & {
  numLines?: number
  borderColor?: string
}

export const ScanLines: React.FC<ScanLinesProps> = ({
  numLines,
  borderColor: outsideBorderColor,
  ...props
}) => {
  const { primaryColor } = usePrimaryColor()
  const borderColor = useMemo(
    () => outsideBorderColor ?? alphaColor(primaryColor, 0.3),
    [outsideBorderColor, primaryColor],
  )

  return (
    <Flex
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      borderRadius="4px"
      justifyContent="space-between"
      flexDirection="column"
      {...props}
    >
      {range(numLines ?? 10).map((value, index) => {
        return (
          <Box
            key={index}
            width="full"
            borderTopWidth="1px"
            borderTopStyle="solid"
            borderTopColor={borderColor}
          />
        )
      })}
    </Flex>
  )
}
