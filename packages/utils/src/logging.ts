export const prettyLog = <T>(value: T, conditional = true): void => {
  conditional && console.log(JSON.stringify(value, null, 2))
}
