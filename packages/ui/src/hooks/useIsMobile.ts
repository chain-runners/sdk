import { useMemo } from 'react'
import { useWindowSize } from './useWindowSize'

export function useIsMobile(): boolean {
  const { width: pageWidth } = useWindowSize()
  return useMemo(() => pageWidth <= 530, [pageWidth])
}
