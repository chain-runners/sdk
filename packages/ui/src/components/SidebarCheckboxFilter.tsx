import { Flex } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { BiCheckbox, BiCheckboxSquare } from 'react-icons/bi'
import { usePrimaryColor } from '../hooks'
import { alphaColor } from '../utils/colors'
import { HackerTooltip } from './HackerTooltip'

export type SidebarCheckboxFilterProps = {
  isChecked?: boolean
  onChange?: (value?: boolean) => void
  label: string
  tooltip?: string
}

export const SidebarCheckboxFilter: React.FC<SidebarCheckboxFilterProps> = ({
  isChecked,
  onChange,
  label,
  tooltip,
}) => {
  const { primaryColor } = usePrimaryColor()

  const handleClick = useCallback(() => {
    return onChange?.(!isChecked)
  }, [isChecked, onChange])

  return (
    <HackerTooltip label={tooltip} isDisabled={!tooltip} openDelay={500} bgColor="black">
      <Flex
        alignItems="center"
        fontSize="12px"
        cursor="pointer"
        userSelect="none"
        w="full"
        fontWeight="semibold"
        py={4}
        px={2}
        borderColor={primaryColor}
        borderTopWidth="1px"
        _hover={{
          bgColor: alphaColor(primaryColor, 0.1),
        }}
        _active={{
          bgColor: alphaColor(primaryColor, 0.15),
        }}
        onClick={handleClick}
      >
        <Flex
          flex={1}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
          mr={2}
        >
          {label}
        </Flex>
        <Flex fontSize="16px" mr={2}>
          {isChecked ? <BiCheckboxSquare /> : <BiCheckbox />}
        </Flex>
      </Flex>
    </HackerTooltip>
  )
}
