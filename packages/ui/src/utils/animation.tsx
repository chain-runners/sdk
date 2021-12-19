import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const MotionGrid = motion(Grid)
export const MotionGridItem = motion(GridItem)
export const MotionBox = motion(Box)
export const MotionFlex = motion(Flex)
export const MotionImage = motion(Image)
export const MotionText = motion(Text)
export const MotionButton = motion(Button)
export const MotionIconButton = motion(IconButton)

export const GRID_ANIMATION_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0,
      ease: 'easeOut',
      duration: 0.7,
    },
  },
}
export const STANDARD_TRANSITION_CONFIG = {
  ease: 'easeInOut',
  duration: 1,
}
