import { AspectRatio, Box, Flex, FlexProps } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React, { Dispatch, SetStateAction, useCallback, useMemo, useState } from 'react'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import { useIsMobile, usePrimaryColor } from '../hooks'
import { MotionBox, MotionFlex } from '../utils/animation'
import { alphaColor } from '../utils/colors'
import { ModalCloseButton } from './ModalCloseButton'

export enum SidebarSide {
  Left = 'Left',
  Right = 'Right',
}

export type SidebarTab = {
  icon: React.FC
  content: React.ReactElement
  containerProps?: Partial<FlexProps>
}

export type SidebarProps = {
  title?: string | React.ReactElement
  isOpen?: boolean
  setIsOpen?: Dispatch<SetStateAction<boolean>>
  side?: SidebarSide
  width?: number | string
  tabs?: Array<SidebarTab>
  tabButtonProps?: Partial<FlexProps>
  tabContainerProps?: Partial<FlexProps>
  containerProps?: Partial<FlexProps>
  children?: React.ReactElement
}

export const COLLAPSIBLE_SIDEBAR_CLOSED_WIDTH = '40px'

const TRANSITION = {
  ease: 'easeOut',
  duration: 0.2,
}

const LEFT_INITIAL_STATE = {
  opacity: 0.5,
  translateX: -100,
  transition: TRANSITION,
}

const RIGHT_INITIAL_STATE = {
  opacity: 0.5,
  translateX: 100,
  transition: TRANSITION,
}

const BASE_STATE = {
  opacity: 1,
  translateX: 0,
  transition: TRANSITION,
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen: externalIsOpen,
  setIsOpen: externalSetIsOpen,
  title,
  children,
  side = SidebarSide.Left,
  width = '300px',
  tabs,
  tabButtonProps,
  tabContainerProps,
  containerProps,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const isLeft = useMemo(() => side === SidebarSide.Left, [side])
  const isMobile = useIsMobile()
  const { primaryColor } = usePrimaryColor()
  const [internalIsOpen, internalSetIsOpen] = useState(true)
  const [isOpen, setIsOpen] = useMemo(() => {
    return [externalIsOpen ?? internalIsOpen, externalSetIsOpen ?? internalSetIsOpen]
  }, [externalIsOpen, externalSetIsOpen, internalIsOpen])

  const handleToggle = useCallback(() => {
    setIsOpen((o) => !o)
  }, [setIsOpen])

  const initialTransitionState = useMemo(
    () => (isLeft ? LEFT_INITIAL_STATE : RIGHT_INITIAL_STATE),
    [isLeft],
  )

  return (
    <Flex
      position={isMobile ? 'absolute' : 'initial'}
      zIndex={4}
      bgColor="black"
      top={0}
      bottom={0}
      right={0}
      left={!isLeft && !isOpen ? 'calc(100vw - 40px)' : 0}
      w={isOpen ? (isMobile ? '100%' : width) : COLLAPSIBLE_SIDEBAR_CLOSED_WIDTH}
      transition="left 0.2s, width 0.2s"
      borderColor={primaryColor}
      borderRightWidth={!isLeft || (isOpen && isMobile) ? 0 : '1px'}
      borderLeftWidth={isLeft || (isOpen && isMobile) ? 0 : '1px'}
      direction="column"
      {...containerProps}
    >
      {tabs ? (
        <Flex h="full">
          <Box
            width={COLLAPSIBLE_SIDEBAR_CLOSED_WIDTH}
            h="full"
            borderColor={primaryColor}
            borderLeftWidth={isLeft && isOpen ? '1px' : 0}
            borderRightWidth={!isLeft && isOpen ? '1px' : 0}
            {...tabContainerProps}
          >
            {tabs.map((tab, index) => {
              const isActiveTab = index === activeTabIndex
              const isFilled = isActiveTab && isOpen
              return (
                <AspectRatio key={index} ratio={1}>
                  <Flex
                    borderBottomColor={primaryColor}
                    borderBottomWidth="1px"
                    bgColor={isFilled ? primaryColor : 'black'}
                    color={isFilled ? 'black' : primaryColor}
                    cursor="pointer"
                    _hover={{
                      bgColor: isFilled
                        ? alphaColor(primaryColor, 0.7)
                        : alphaColor(primaryColor, 0.1),
                    }}
                    _active={{
                      bgColor: isFilled
                        ? alphaColor(primaryColor, 0.9)
                        : alphaColor(primaryColor, 0.2),
                    }}
                    onClick={() => {
                      if (isActiveTab) {
                        handleToggle()
                      } else {
                        setActiveTabIndex(index)
                      }
                    }}
                    {...tabButtonProps}
                    {...tab.containerProps}
                  >
                    {React.createElement(tab.icon)}
                  </Flex>
                </AspectRatio>
              )
            })}
          </Box>
          <AnimatePresence>
            {isOpen && (
              <MotionBox
                initial={initialTransitionState}
                animate={BASE_STATE}
                exit={initialTransitionState}
                flex={1}
                position="relative"
                overflowY="auto"
              >
                <ModalCloseButton onClose={handleToggle} />
                {tabs[activeTabIndex]?.content}
              </MotionBox>
            )}
          </AnimatePresence>
        </Flex>
      ) : (
        <>
          <Flex
            px={2}
            py={2}
            borderColor={primaryColor}
            borderBottomWidth="1px"
            onClick={handleToggle}
            cursor="pointer"
            alignItems="center"
            justifyContent={isLeft ? 'flex-end' : 'flex-start'}
            minH="41px"
          >
            <AnimatePresence>
              {isLeft && isOpen && title && (
                <MotionFlex
                  initial={initialTransitionState}
                  animate={BASE_STATE}
                  exit={initialTransitionState}
                  color="white"
                  flex={1}
                  justifyContent="flex-start"
                >
                  {title}
                </MotionFlex>
              )}
            </AnimatePresence>
            <Box fontSize="1.25rem">
              {(isLeft && isOpen) || (!isLeft && !isOpen) ? (
                <BsArrowBarLeft />
              ) : (
                <BsArrowBarRight />
              )}
            </Box>
            <AnimatePresence>
              {!isLeft && isOpen && title && (
                <MotionFlex
                  initial={initialTransitionState}
                  animate={BASE_STATE}
                  exit={initialTransitionState}
                  color="white"
                  flex={1}
                  justifyContent="flex-end"
                >
                  {title}
                </MotionFlex>
              )}
            </AnimatePresence>
          </Flex>
          <AnimatePresence>
            {isOpen && (
              <MotionBox
                initial={initialTransitionState}
                animate={BASE_STATE}
                exit={initialTransitionState}
                flex={1}
                overflowY="auto"
              >
                {children}
              </MotionBox>
            )}
          </AnimatePresence>
        </>
      )}
    </Flex>
  )
}
