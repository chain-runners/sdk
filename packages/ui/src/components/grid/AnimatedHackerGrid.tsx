import { GridProps } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import { MotionGrid } from '../../utils/animation'
import { ANIMATED_HACKER_GRID_ANIMATION_VARIANTS } from './constants'

export type AnimatedHackerGridProps = Partial<GridProps> & {
  isSidebarOpen?: boolean
}

export const AnimatedHackerGrid: React.FC<AnimatedHackerGridProps> = ({
  children,
  isSidebarOpen,
  ...props
}) => {
  const templateColumns: Array<string> = useMemo(() => {
    const colAdder = isSidebarOpen ? -1 : 0
    return [
      'repeat(1, 1fr)',
      `repeat(${2 + colAdder}, 1fr)`,
      `repeat(${3 + colAdder}, 1fr)`,
      `repeat(${4 + colAdder}, 1fr)`,
      `repeat(${5 + colAdder}, 1fr)`,
    ]
  }, [isSidebarOpen])
  return (
    <MotionGrid
      variants={ANIMATED_HACKER_GRID_ANIMATION_VARIANTS}
      initial={'hidden'}
      animate={'show'}
      templateColumns={templateColumns}
      gap={4}
      flex={1}
      {...props}
    >
      {children}
    </MotionGrid>
  )
}
