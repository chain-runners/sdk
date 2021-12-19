import { Box, Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'
import { usePrimaryColor } from '../hooks'

export type HackerModalSectionProps = {
  title?: string | React.ReactElement
  extraTitleContent?: React.ReactElement
  containerProps?: Partial<FlexProps>
}

export const HackerModalSection: React.FC<HackerModalSectionProps> = ({
  title,
  extraTitleContent,
  children,
  containerProps,
}) => {
  const { primaryColor } = usePrimaryColor()

  return (
    <Flex direction="column" p={5} pb={0} {...containerProps}>
      <Flex
        borderBottomColor={primaryColor}
        borderBottomWidth="1px"
        fontSize="14px"
        fontWeight="semibold"
      >
        <Box flex={1}>{title}</Box>
        {extraTitleContent}
      </Flex>
      <Box flex={1} py={5} overflowY={['initial', null, null, 'auto']}>
        {children}
      </Box>
    </Flex>
  )
}
