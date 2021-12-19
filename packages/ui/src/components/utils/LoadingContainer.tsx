import { BoxProps, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import { usePrimaryColor } from '../../hooks'

export type LoadingContainerProps = BoxProps & {
  loading: boolean
  spinnerSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  showSpinner?: boolean
}

export const LoadingContainer: React.FC<LoadingContainerProps> = ({
  loading,
  children,
  spinnerSize = 'xl',
  showSpinner = true,
  ...props
}) => {
  const { primaryColor } = usePrimaryColor()

  return loading ? (
    <Flex
      width="100%"
      height="full"
      textAlign="center"
      margin={'auto'}
      alignItems="center"
      justifyContent="center"
      paddingBottom={2}
      {...props}
    >
      <Spinner
        thickness="3px"
        speed="1s"
        emptyColor="gray.200"
        color={primaryColor}
        size={spinnerSize}
        hidden={!showSpinner}
      />
    </Flex>
  ) : (
    <>{children}</>
  )
}
