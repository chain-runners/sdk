import React from 'react'
import { MotionGridItem } from '../../utils/animation'
import { ANIMATED_HACKER_GRID_ANIMATION_VARIANTS } from './constants'

export type AnimatedHackerGridItemProps = {
  onClick?: () => void
  layoutId?: string
}

export const AnimatedHackerGridItem: React.FC<AnimatedHackerGridItemProps> = ({
  children,
  onClick,
  layoutId,
}) => {
  return (
    <MotionGridItem
      variants={ANIMATED_HACKER_GRID_ANIMATION_VARIANTS}
      layoutId={layoutId}
      cursor={onClick ? 'pointer' : undefined}
      onClick={onClick}
    >
      {children}
    </MotionGridItem>
  )
}
