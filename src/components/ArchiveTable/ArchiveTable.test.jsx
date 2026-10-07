import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ArchiveTable } from './ArchiveTable.jsx'

describe('ArchiveTable', () => {
  it('renders rows from data as a real table', () => {
    render(
      <MemoryRouter>
        <ArchiveTable
          columns={['Role', 'Place', 'Years']}
          rows={[
            { id: '1', cells: ['Developer', 'The Bridge', '2026'] },
            { id: '2', cells: ['Founder', 'Brewery', '2017 — 2024'] },
          ]}
        />
      </MemoryRouter>,
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
    expect(screen.getByText('Founder')).toBeInTheDocument()
    expect(screen.getAllByRole('row')).toHaveLength(3)
  })
})
