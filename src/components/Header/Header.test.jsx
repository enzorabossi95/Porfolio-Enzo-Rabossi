import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { Header } from './Header.jsx'
import { projects } from '../../data/projects.js'

describe('Header', () => {
  it('shows a Work count that matches the number of projects', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    const workLink = screen.getByRole('link', {
      name: new RegExp(`work, ${projects.length} `, 'i'),
    })

    expect(workLink).toBeInTheDocument()
    expect(screen.getByText(`(${projects.length})`)).toBeInTheDocument()
  })
})
