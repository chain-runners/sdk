export const ANIMATED_HACKER_GRID_ANIMATION_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: 'easeOut',
      duration: 0.7,
    },
  },
}
