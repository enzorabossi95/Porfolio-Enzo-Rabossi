import { useEffect } from 'react'

// Adds "motion-ready" to <html> only when JS has run AND the visitor hasn't
// asked for reduced motion. Every entrance-animation rule in the stylesheets
// is scoped under html.motion-ready, so without this class (no JS, or
// reduced motion) content renders fully visible with no transform/opacity
// tricks applied.
export function useMotionReady() {
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: no-preference)')

    function sync() {
      document.documentElement.classList.toggle('motion-ready', query.matches)
    }

    sync()
    query.addEventListener('change', sync)

    return () => query.removeEventListener('change', sync)
  }, [])
}
