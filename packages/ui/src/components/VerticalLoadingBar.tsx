import { Box, Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'
import { usePrimaryColor } from '../hooks'

export type VerticalLoadingBarProps = {
  percent: number
  disabled?: boolean
  containerProps?: Partial<FlexProps>
}

export const VerticalLoadingBar: React.FC<VerticalLoadingBarProps> = ({
  disabled,
  percent,
  containerProps,
}) => {
  const { primaryColor } = usePrimaryColor()
  return (
    <Flex
      bgColor="rgba(0, 255, 84, 0.15)"
      flex={1}
      justifyContent="flex-end"
      direction="column"
      _notLast={{ marginRight: '8px' }}
      {...containerProps}
    >
      <Box
        bgColor={primaryColor}
        width="full"
        transition="height 0.5s"
        height={disabled ? 0 : `${percent}%`}
      />
    </Flex>
  )
}
