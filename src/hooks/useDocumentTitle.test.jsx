import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useDocumentTitle } from './useDocumentTitle.js'

function Probe({ title }) {
  useDocumentTitle(title)
  return null
}

describe('useDocumentTitle', () => {
  it('sets document.title', () => {
    render(<Probe title="Work, Enzo Rabossi" />)
    expect(document.title).toBe('Work, Enzo Rabossi')
  })

  it('updates document.title when it changes', () => {
    const { rerender } = render(<Probe title="Work, Enzo Rabossi" />)
    rerender(<Probe title="About, Enzo Rabossi" />)
    expect(document.title).toBe('About, Enzo Rabossi')
  })

  it('does nothing for a falsy title, so it never overwrites a child route\'s own title', () => {
    render(<Probe title="Work, Enzo Rabossi" />)
    render(<Probe title={null} />)
    expect(document.title).toBe('Work, Enzo Rabossi')
  })
})
