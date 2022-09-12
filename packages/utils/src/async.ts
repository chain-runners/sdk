export function sleep(milliseconds: number): Promise<void> {
  return new Promise<void>((callback) => {
    setTimeout(() => {
      callback()
    }, milliseconds)
  })
}
