import React from 'react'
import { IoCloseSharp } from 'react-icons/all'
import { HackerIconButton } from './HackerIconButton'

export type ModalCloseButtonProps = {
  onClose: () => void
}

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({ onClose }) => {
  return (
    <HackerIconButton
      icon={<IoCloseSharp size={18} />}
      position="absolute"
      top="0"
      right="0"
      zIndex={3}
      onClick={onClose}
      variant="unstyled"
      justifyContent="center"
      alignItems="center"
      padding="7px"
      h="32px"
      w="32px"
      minW="32px"
      maxW="32px"
    />
  )
}
