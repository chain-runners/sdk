import React, { Dispatch, SetStateAction, useEffect } from 'react'

export type TransformStateFunction<T> = (value: any) => T

export function usePersistedState<T>(
  defaultValue: T,
  key: string,
  transformFunction: TransformStateFunction<T> = (value: any): T => value,
  preferPersisted = true,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = React.useState(() => {
    if (!preferPersisted) return defaultValue
    const persistedValue = window.localStorage.getItem(key)
    return persistedValue === null || persistedValue === 'undefined'
      ? defaultValue
      : transformFunction(JSON.parse(persistedValue))
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}
