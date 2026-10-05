import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement scrollTo; useScrollToHash calls it on every route render.
window.scrollTo = () => {}

// jsdom doesn't implement matchMedia. Default to "no reduced-motion preference
// detected" (matches: false) so useMotionReady/useScrollReveal no-op by
// default in tests; individual tests can still stub this themselves to
// exercise the motion-enabled path.
window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  }))
