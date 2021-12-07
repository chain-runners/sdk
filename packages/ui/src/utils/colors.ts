export function alphaColor(color: string, alpha: number): string {
  const _opacity = Math.round(Math.min(Math.max(alpha || 1, 0), 1) * 255)
  return color + _opacity.toString(16).toUpperCase()
}
