export function motionEnabled() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}
