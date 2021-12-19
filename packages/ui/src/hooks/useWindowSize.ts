import { useEffect, useState } from 'react'

export type UseWindowSizeValue = {
  height: number
  width: number
}

export function useWindowSize(): UseWindowSizeValue {
  const [size, setSize] = useState<UseWindowSizeValue>({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  useEffect(() => {
    const handleResize = (): void => {
      setSize({ height: window.innerHeight, width: window.innerWidth })
    }
    window.addEventListener('resize', handleResize)
    return (): void => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return size
}
