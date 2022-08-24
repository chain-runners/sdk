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
    try {
      const persistedValue = window.localStorage.getItem(key)
      return persistedValue === null || persistedValue === 'undefined'
        ? defaultValue
        : transformFunction(JSON.parse(persistedValue))
    } catch (e) {
      console.error(e)
      return defaultValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error(e)
    }
  }, [key, value])
  return [value, setValue]
}
