export type Maybe<T> = T | null | undefined

export type Nullable<T> = {
  [P in keyof T]: T[P] | null
}
