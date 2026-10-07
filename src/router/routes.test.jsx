import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { routes } from './routes.jsx'

function renderAt(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  return render(<RouterProvider router={router} />)
}

describe('routing', () => {
  it('renders the home page at /', () => {
    renderAt('/')
    expect(screen.getByRole('heading', { level: 1, name: /enzo rabossi/i })).toBeInTheDocument()
  })

  it('renders the work page at /work', () => {
    renderAt('/work')
    expect(screen.getByRole('heading', { level: 1, name: /work/i })).toBeInTheDocument()
  })

  it('renders the not-found page for an unknown route', () => {
    renderAt('/nope')
    expect(screen.getByRole('heading', { level: 1, name: /not found/i })).toBeInTheDocument()
  })
})
