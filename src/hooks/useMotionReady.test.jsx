import { render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useMotionReady } from './useMotionReady.js'

function Probe() {
  useMotionReady()
  return null
}

function stubMatchMedia(matches) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn().mockReturnValue({
      matches,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }),
  )
}

afterEach(() => {
  vi.unstubAllGlobals()
  document.documentElement.classList.remove('motion-ready')
})

describe('useMotionReady', () => {
  it('does not add motion-ready when the visitor prefers reduced motion', () => {
    stubMatchMedia(false) // "(prefers-reduced-motion: no-preference)" does not match
    render(<Probe />)

    expect(document.documentElement.classList.contains('motion-ready')).toBe(false)
  })

  it('adds motion-ready when the visitor has no motion preference', () => {
    stubMatchMedia(true)
    render(<Probe />)

    expect(document.documentElement.classList.contains('motion-ready')).toBe(true)
  })
})
