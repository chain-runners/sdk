import { Box, Button, Flex, FlexProps } from '@chakra-ui/react'
import React, { useCallback, useEffect } from 'react'
import { TerminalAppContext } from '../types'

export type TextReaderAppProps = TerminalAppContext & {
  children?: React.ReactElement
  containerProps?: Partial<FlexProps>
}

export const TextReaderApp: React.FC<TextReaderAppProps> = ({
  closeFullscreenApp,
  children,
  containerProps,
}) => {
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      console.log(event.code)
      switch (event.code) {
        case 'Escape':
        case 'KeyQ':
          closeFullscreenApp()
          break
      }
    },
    [closeFullscreenApp],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])
  return (
    <Flex flex={1} maxH="100%" direction="column" position="relative" {...containerProps}>
      <Box flex={1} p={3} fontSize="14px" overflowY="scroll">
        {children}
      </Box>
      <Flex alignItems="center" bgColor="whiteAlpha.300">
        <Button
          borderRadius={0}
          variant="ghost"
          size="xs"
          _hover={{ outline: 'none', bgColor: 'blackAlpha.300' }}
          _active={{ outline: 'none', bgColor: 'blackAlpha.500' }}
          _focus={{ outline: 'none' }}
          onClick={closeFullscreenApp}
          height="26px"
          paddingLeft={3}
          paddingRight={2}
        >
          <Box px="3px" py="1px" bgColor="whiteAlpha.700" color="blackAlpha.800" mr={1}>
            ESC
          </Box>
          <Box>Exit</Box>
        </Button>
      </Flex>
    </Flex>
  )
}
