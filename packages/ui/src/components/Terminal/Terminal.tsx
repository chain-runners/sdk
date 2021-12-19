import { Box, BoxProps, Flex, Input } from '@chakra-ui/react'
import React, { useEffect, useMemo } from 'react'
import { AiOutlineClose, AiOutlineExpandAlt } from 'react-icons/all'
import { usePrimaryColor } from '../../hooks'
import { MotionIconButton } from '../../utils'
import { TerminalData, TerminalMessageType } from './types'

export type TerminalProps = {
  terminalData: TerminalData
  isDisabled?: boolean
  containerProps?: Partial<BoxProps>
  autoFocusTerminal?: boolean
  allowExpand?: boolean
  isExpanded?: boolean
  onExpand?: () => void
}

export const Terminal: React.FC<TerminalProps> = ({
  isDisabled: forceDisabled,
  terminalData,
  containerProps,
  allowExpand,
  onExpand,
  isExpanded,
  autoFocusTerminal = true,
}) => {
  const { primaryColor } = usePrimaryColor()
  const {
    currentDirectory,
    fullscreenApp,
    stdout,
    terminalRoot,
    terminalInput,
    handleInput,
    focusTerminal,
    isEnabled,
    prompt,
  } = terminalData

  const isDisabled = useMemo(
    () => forceDisabled ?? !isEnabled,
    [forceDisabled, isEnabled],
  )

  useEffect(() => {
    if (!isDisabled && autoFocusTerminal) {
      focusTerminal()
    }
  }, [isDisabled, focusTerminal, autoFocusTerminal])

  return (
    <Flex position="relative" direction="column" flex={1} height="full">
      {fullscreenApp ? (
        <Flex direction="column" overflow="auto" flex={1} {...containerProps}>
          {fullscreenApp}
        </Flex>
      ) : (
        <Flex
          ref={terminalRoot}
          direction="column"
          flex={1}
          paddingY={2}
          paddingX={4}
          overflow="auto"
          cursor="text"
          onClick={() => {
            focusTerminal()
          }}
          {...containerProps}
        >
          {stdout.map((message, index) => {
            const isEcho = message.type === TerminalMessageType.Echo
            return (
              <Box key={index} lineHeight="16px">
                {isEcho && (
                  <>
                    <Box
                      as="span"
                      whiteSpace="nowrap"
                      color={primaryColor}
                      fontSize="12px"
                    >
                      {prompt}
                    </Box>
                    {message.workingDirectory && (
                      <Box as="span" ml={1} color={primaryColor} fontSize="12px">
                        {message.workingDirectory.name}
                      </Box>
                    )}
                  </>
                )}
                <Box
                  as="span"
                  paddingLeft={isEcho ? '7px' : 0}
                  wordBreak="break-word"
                  fontFamily="monospace"
                  color={
                    message.type === TerminalMessageType.Error ? 'hackerRed' : 'white'
                  }
                  fontSize="12px"
                  {...message.props}
                >
                  {message.message}
                </Box>
              </Box>
            )
          })}
          <Box display="inline-flex" width="full" alignItems="center">
            <Box
              as="span"
              color={isDisabled ? 'whiteAlpha.300' : primaryColor}
              fontSize="12px"
              whiteSpace="nowrap"
            >
              {prompt}
            </Box>
            {!isDisabled && (
              <Box
                as="span"
                ml={1}
                color={isDisabled ? 'whiteAlpha.300' : primaryColor}
                fontSize="12px"
                whiteSpace="nowrap"
              >
                {currentDirectory.name}
              </Box>
            )}
            <Input
              ref={terminalInput}
              variant="unstyled"
              type="text"
              autoComplete="off"
              fontFamily="monospace"
              color="white"
              fontSize="12px"
              border={0}
              paddingLeft="7px"
              flexGrow={100}
              height="22px"
              bg="transparent"
              outline="none"
              autoCapitalize="none"
              onKeyDown={handleInput}
              isDisabled={isDisabled}
            />
          </Box>
        </Flex>
      )}
      {allowExpand && (
        <MotionIconButton
          aria-label="Expand"
          variant="ghost"
          position="absolute"
          size="sm"
          top={1}
          right={1}
          borderRadius={0}
          onClick={onExpand}
          icon={isExpanded ? <AiOutlineClose /> : <AiOutlineExpandAlt />}
          _hover={{ bgColor: 'initial' }}
          _active={{ bgColor: 'whiteAlpha.200' }}
          _focus={{ outline: 'none' }}
        />
      )}
    </Flex>
  )
}
