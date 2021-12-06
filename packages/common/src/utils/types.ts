export function isNullOrUndefined<T>(
  value: T | undefined | null,
): value is null | undefined {
  return value === null || value === undefined
}

export function isNotNullOrUndefined<T>(value: T | undefined | null): value is T {
  return !isNullOrUndefined(value)
}

export function getOrThrow<T>(
  value: T | null | undefined,
  errorMessage = "Unexpected missing value",
): T {
  if (isNullOrUndefined(value)) {
    throw new Error(errorMessage)
  }
  return value
}

export type Nullable<T> = {
  [P in keyof T]: T[P] | null
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function assertTrue<T>(value: T, errorMessage = "Assertion failed"): void {
  if (!Boolean(value)) {
    throw new Error(errorMessage)
  }
}
