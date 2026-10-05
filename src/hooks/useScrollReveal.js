import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motionEnabled } from '../utils/motion.js'

const STAGGER_STEP = 0.08

// Scroll-triggered reveals: .scroll-in-group wrappers stagger-reveal their
// .scroll-in children, .reveal-border draws in, .reveal-fade fades in. Plays
// once per element, re-scans on every route change to pick up newly mounted
// content. No-ops entirely under reduced motion — the CSS already renders
// everything visible by default without the "motion-ready" class.
export function useScrollReveal() {
  const location = useLocation()

  useEffect(() => {
    if (!motionEnabled()) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          const target = entry.target

          if (target.classList.contains('scroll-in-group')) {
            target.querySelectorAll('.scroll-in').forEach((element, index) => {
              element.style.setProperty('--stagger-delay', `${index * STAGGER_STEP}s`)
              element.classList.add('is-visible')
            })
          } else {
            target.classList.add('is-visible')
          }

          observer.unobserve(target)
        })
      },
      { threshold: 0 },
    )

    document
      .querySelectorAll('.scroll-in-group, .reveal-border, .reveal-fade')
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [location.pathname])
}
