export type BreakpointsObj = { sm: string; md: string; lg: string; xl: string }
export type Breakpoints = Array<string> | BreakpointsObj

export function isBreakpointObject(
  breakpoints: Breakpoints,
): breakpoints is BreakpointsObj {
  return Object.keys(breakpoints).includes('sm')
}
