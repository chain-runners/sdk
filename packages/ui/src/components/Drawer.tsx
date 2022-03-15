import {
  Box,
  BoxProps,
  Flex,
  Text,
  useDisclosure,
  useMediaQuery,
  useTheme,
} from '@chakra-ui/react'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BsArrowBarDown, BsArrowBarUp } from 'react-icons/bs'
import { usePersistedState, usePrimaryColor } from '../hooks'
import { isBreakpointObject } from '../utils'
import { DelayedRender } from './utils/DelayedRender'

export type DrawerProps = {
  header?: string | React.ReactElement
  isOpen?: boolean | null
  onToggle?: () => void
  children: React.ReactElement | string
  initialSize?: number
  maxSize?: number
  minSize?: number
  animationSpeed?: number
  delayRender?: boolean
  onResize?: () => void
  containerProps?: BoxProps
  isCollapsible?: boolean
  fullscreenOnMobile?: boolean
  innerDrawerContent?: () => React.ReactElement
  onCloseInnerDrawer?: () => void
  innerDrawerHeader?: string | React.ReactElement
  showHeader?: boolean
  isResizeable?: boolean
  // Used to persist different drawer height values for different drawers in LocalStorage
  configKey?: string
}

export const PAGE_HEADER_HEIGHT = 73
export const COLLAPSIBLE_DRAWER_HEADER_HEIGHT = 44

function computeDefaultInitialDrawerSize(): number {
  const pageHeight = document.body.offsetHeight

  const pagePaneHeight = pageHeight - PAGE_HEADER_HEIGHT
  const totalDrawerHeight = Math.floor(pagePaneHeight * 0.4)
  return totalDrawerHeight - COLLAPSIBLE_DRAWER_HEADER_HEIGHT
}

function clampPanelSize(size: number, minSize: number, maxSize?: number): number {
  if (size < minSize) return minSize
  if (maxSize && size > maxSize) return maxSize
  return size
}

export const Drawer: React.FC<DrawerProps> = ({
  header,
  isOpen = null,
  onToggle,
  initialSize,
  children,
  animationSpeed = 200,
  delayRender,
  onResize,
  containerProps = {},
  isCollapsible = true,
  fullscreenOnMobile = false,
  configKey = 'Base',
  showHeader = true,
  minSize = 150,
  maxSize,
  isResizeable = true,
}) => {
  const { primaryColor } = usePrimaryColor()
  const { isOpen: internalIsOpen, onToggle: internalOnToggle } = useDisclosure()

  const headerRef = useRef<HTMLDivElement | null>(null)
  const [customDrawerSize, setCustomDrawerSize] = usePersistedState<number | null>(
    null,
    `Drawer-${configKey}`,
  )
  const drawerSize = useMemo(
    () =>
      clampPanelSize(
        customDrawerSize ?? initialSize ?? computeDefaultInitialDrawerSize(),
        minSize,
        maxSize,
      ),
    [customDrawerSize, initialSize, maxSize, minSize],
  )

  const [isResizing, setIsResizing] = useState(false)

  const handleMouseMovement = useCallback(
    (event: MouseEvent) => {
      if (isResizing) {
        const pageSize = document.body.offsetHeight
        const headerHeight = headerRef.current?.clientHeight ?? 0
        const size = pageSize - event.clientY - headerHeight
        const computedMaxSize = pageSize - PAGE_HEADER_HEIGHT
        const constrainedSize =
          size < minSize ? minSize : size > computedMaxSize ? computedMaxSize : size
        setCustomDrawerSize(constrainedSize)
        onResize && onResize()
      }
    },
    [isResizing, minSize, onResize, setCustomDrawerSize],
  )

  const handleToggle = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation()
      ;(onToggle || internalOnToggle)()
    },
    [internalOnToggle, onToggle],
  )

  const handleStopResizing = useCallback(() => {
    setIsResizing(false)
  }, [])

  const handleStartResizing = useCallback((event: React.MouseEvent) => {
    event.preventDefault()
    setIsResizing(true)
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMovement)
    document.addEventListener('mouseup', handleStopResizing)
    return (): void => {
      document.removeEventListener('mousemove', handleMouseMovement)
      document.removeEventListener('mouseup', handleStopResizing)
    }
  })

  const { breakpoints } = useTheme()
  const largeBreakpoint = isBreakpointObject(breakpoints)
    ? breakpoints.lg
    : breakpoints[2]

  const isDesktop = useMediaQuery(`(min-width: ${largeBreakpoint})`)[0]
  const forceOpen = fullscreenOnMobile && !isDesktop

  const headerComponent: React.ReactElement | undefined =
    typeof header !== 'string' ? (
      header
    ) : (
      <Text width="full" padding={5} flexGrow={1}>
        {header}
      </Text>
    )

  const combinedIsOpen = forceOpen ? true : isOpen === null ? internalIsOpen : isOpen
  return (
    <Flex
      position="relative"
      flexDirection="column"
      flexGrow={fullscreenOnMobile ? { base: 1, lg: 0 } : 0}
      backgroundColor="black"
      borderTop="1px solid"
      borderTopColor="border"
      borderLeftColor="border"
      {...containerProps}
    >
      <Box
        position="absolute"
        zIndex={400}
        height="4px"
        left={0}
        right={0}
        onMouseDown={combinedIsOpen ? handleStartResizing : undefined}
        _hover={{ backgroundColor: combinedIsOpen ? 'border' : undefined }}
        cursor={combinedIsOpen ? 'ns-resize' : undefined}
        hidden={!isResizeable}
      />
      <Box
        ref={headerRef}
        borderBottom="1px solid"
        borderBottomColor={combinedIsOpen ? primaryColor : 'transparent'}
        hidden={(!showHeader || !headerComponent) && !combinedIsOpen}
      >
        {showHeader && headerComponent && (
          <Flex alignItems="center" paddingY="6px" alignContent="top">
            {headerComponent}
            <Box
              display={fullscreenOnMobile ? { base: 'none', lg: 'block' } : 'block'}
              position="relative"
              right={2}
              padding={1}
              borderRadius="lg"
              fontSize="1.25rem"
              cursor="pointer"
              onClick={handleToggle}
              _hover={{
                backgroundColor: 'buttonHover',
              }}
            >
              {isCollapsible ? (
                combinedIsOpen ? (
                  <BsArrowBarDown />
                ) : (
                  <BsArrowBarUp />
                )
              ) : null}
            </Box>
          </Flex>
        )}
      </Box>
      <Flex
        direction="column"
        flexGrow={1}
        transition={isResizing ? undefined : `height ${animationSpeed / 1000}s ease`}
        height={combinedIsOpen ? `${drawerSize}px` : 0}
        overflowY="hidden"
        overflowX="hidden"
        position="relative"
      >
        {combinedIsOpen && (
          <DelayedRender delay={delayRender ? animationSpeed : 0}>
            {(): React.ReactElement => <React.Fragment>{children}</React.Fragment>}
          </DelayedRender>
        )}
      </Flex>
    </Flex>
  )
}
