import { Box, FlexProps } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { MotionFlex } from '../utils/animation'
import { HackerBox } from './HackerBox'
import { ModalCloseButton } from './ModalCloseButton'

export type HackerModalProps = {
  children?: React.ReactElement
  onClose: () => void
  onExitComplete?: () => void
  layoutId?: string
  show?: boolean
  hideCloseButton?: boolean
  isFullscreen?: boolean
  containerProps?: Partial<FlexProps>
}

const INITIAL_ANIMATION_STATE = {
  scale: 0.1,
  opacity: 0.5,
  transition: {
    ease: 'easeIn',
    duration: 0.2,
  },
}

const EXIT_ANIMATION_STATE = {
  scale: 0.1,
  opacity: 0.5,
  transition: {
    ease: 'easeOut',
    duration: 0.2,
  },
}

const BASE_ANIMATION_STATE = {
  scale: 1,
  opacity: 1,
  transition: {
    ease: 'easeIn',
    duration: 0.2,
  },
}

export const HackerModal: React.FC<HackerModalProps> = ({
  onExitComplete,
  children,
  layoutId,
  show,
  onClose,
  hideCloseButton,
  isFullscreen,
  containerProps,
}) => {
  return (
    <>
      <AnimatePresence onExitComplete={onExitComplete}>
        {show && (
          <MotionFlex
            initial={INITIAL_ANIMATION_STATE}
            exit={EXIT_ANIMATION_STATE}
            animate={BASE_ANIMATION_STATE}
            direction="column"
            position="absolute"
            top={[0, '20px']}
            bottom={[0, '20px']}
            left={[0, '32px']}
            right={[0, '32px']}
            zIndex={10}
            marginX="auto"
            layoutId={layoutId}
            {...containerProps}
          >
            {!hideCloseButton && <ModalCloseButton onClose={onClose} />}
            <HackerBox
              height={isFullscreen ? '100%' : undefined}
              maxH="full"
              minH={['full', 'initial']}
              innerContainerProps={{
                paddingTop: [1, 3],
                paddingX: [1, 3],
                paddingBottom: 0,
                bgColor: 'black',
                display: 'flex',
                overflowY: 'auto',
                borderStyle: ['none', 'solid'],
                transition: 'height 0.2s',
              }}
            >
              {children}
            </HackerBox>
            <Box flex={1} onClick={onClose} />
          </MotionFlex>
        )}
      </AnimatePresence>
      <Box
        position="absolute"
        top={0}
        bottom={0}
        height={show ? undefined : 0}
        left={0}
        right={0}
        bgColor={show ? 'blackAlpha.700' : 'transparent'}
        zIndex={5}
        onClick={onClose}
      />
    </>
  )
}
