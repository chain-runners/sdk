import React, { useEffect, useState } from 'react'
import { LoadingContainer } from './LoadingContainer'

export type DelayedRenderProps = {
  delay: number
  hidden?: boolean
  children: () => React.ReactElement
}

export const DelayedRender: React.FC<DelayedRenderProps> = ({
  delay,
  hidden,
  children,
}) => {
  const [shouldRender, setShouldRender] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setShouldRender(true), delay)
    return (): void => {
      clearTimeout(timeout)
    }
  })

  if (!hidden && shouldRender) {
    return children()
  }
  return <LoadingContainer loading={true} />
}
