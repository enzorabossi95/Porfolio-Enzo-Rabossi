import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { CheatsheetPage } from './CheatsheetPage.jsx'

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/notes/:slug" element={<CheatsheetPage />} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('CheatsheetPage', () => {
  it('renders the matching cheatsheet', () => {
    renderAt('/notes/html')
    expect(
      screen.getByRole('heading', { level: 1, name: /cheatsheet html5/i }),
    ).toBeInTheDocument()
  })

  it('renders NotFoundPage for an unknown slug', () => {
    renderAt('/notes/not-a-real-slug')
    expect(screen.getByRole('heading', { level: 1, name: /not found/i })).toBeInTheDocument()
  })
})
