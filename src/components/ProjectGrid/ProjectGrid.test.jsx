import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectGrid } from './ProjectGrid.jsx'

const featured = {
  id: 'featured',
  title: 'Featured Project',
  description: 'First project in the list.',
  stack: ['React'],
  repo: null,
  demo: null,
  image: null,
}

const second = {
  id: 'second',
  title: 'Second Project',
  description: 'Second project in the list.',
  stack: ['HTML'],
  repo: 'https://github.com/example/second',
  demo: 'https://example.com',
  image: 'https://example.com/image.jpg',
}

describe('ProjectGrid', () => {
  it('renders the featured project first', () => {
    render(<ProjectGrid projects={[featured, second]} />)
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles[0]).toHaveTextContent('Featured Project')
    expect(titles[1]).toHaveTextContent('Second Project')
  })

  it('renders nothing for null repo/demo links', () => {
    render(<ProjectGrid projects={[featured]} />)
    expect(screen.queryByRole('link', { name: /code/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /live demo/i })).not.toBeInTheDocument()
  })

  it('renders real links when repo/demo are present', () => {
    render(<ProjectGrid projects={[second]} />)
    expect(screen.getByRole('link', { name: /code/i })).toHaveAttribute(
      'href',
      'https://github.com/example/second',
    )
    expect(screen.getByRole('link', { name: /live demo/i })).toHaveAttribute(
      'href',
      'https://example.com',
    )
  })

  it('renders a typographic placeholder when there is no image', () => {
    const { container } = render(<ProjectGrid projects={[featured]} />)
    expect(container.querySelector('img')).not.toBeInTheDocument()
    expect(container.querySelector('[aria-hidden="true"]')).toHaveTextContent(featured.title)
  })

  it('renders the real image when one is provided', () => {
    const { container } = render(<ProjectGrid projects={[second]} />)
    expect(container.querySelector('img')).toHaveAttribute('src', second.image)
  })
})
