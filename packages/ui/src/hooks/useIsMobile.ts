import { useMemo } from 'react'
import { useWindowSize } from './useWindowSize'

const DEFAULT_CONFIG = {
  threshold: 900,
}

export function setDefaultIsMobileConfig(threshold: number) {
  DEFAULT_CONFIG.threshold = threshold
}

export function useIsMobile(threshold?: number): boolean {
  const { width: pageWidth } = useWindowSize()
  return useMemo(
    () => pageWidth <= (threshold ?? DEFAULT_CONFIG.threshold),
    [pageWidth, threshold],
  )
}
