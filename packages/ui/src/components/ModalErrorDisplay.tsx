import { Box, Flex, useTheme } from '@chakra-ui/react'
import React from 'react'
import { HackerUITheme } from '../theme'
import { HackerButton } from './HackerButton'

export type ModalErrorDisplayProps = {
  error?: string | null
  onClose?: () => void
}

export const ModalErrorDisplay: React.FC<ModalErrorDisplayProps> = ({
  error,
  onClose,
}) => {
  const {
    colors: { hackerRed },
  } = useTheme<HackerUITheme>()

  if (!error) {
    return <React.Fragment />
  }

  return (
    <Flex
      direction="column"
      h="full"
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box color="hackerRed" fontSize={20} mb={5}>
        {error}
      </Box>
      <Box hidden={!onClose}>
        <HackerButton size="sm" colorHex={hackerRed} onClick={onClose}>
          Close
        </HackerButton>
      </Box>
    </Flex>
  )
}
