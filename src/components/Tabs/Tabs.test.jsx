import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tabs } from './Tabs.jsx'

const tabs = [
  { id: 'a', label: 'Tab A', panel: 'Panel A content' },
  { id: 'b', label: 'Tab B', panel: 'Panel B content' },
  { id: 'c', label: 'Tab C', panel: 'Panel C content' },
]

describe('Tabs', () => {
  it('only shows the active panel', () => {
    render(<Tabs label="Example" tabs={tabs} />)

    expect(screen.getByText('Panel A content')).toBeVisible()
    expect(screen.getByText('Panel B content')).not.toBeVisible()
    expect(screen.getByText('Panel C content')).not.toBeVisible()
  })

  it('switches panels on click', async () => {
    const user = userEvent.setup()
    render(<Tabs label="Example" tabs={tabs} />)

    await user.click(screen.getByRole('tab', { name: 'Tab B' }))

    expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Panel B content')).toBeVisible()
    expect(screen.getByText('Panel A content')).not.toBeVisible()
  })

  it('moves focus and selection with ArrowRight/ArrowLeft, wrapping at the ends', async () => {
    const user = userEvent.setup()
    render(<Tabs label="Example" tabs={tabs} />)

    const [tabA, tabB, tabC] = screen.getAllByRole('tab')

    tabA.focus()
    await user.keyboard('{ArrowRight}')
    expect(tabB).toHaveFocus()
    expect(tabB).toHaveAttribute('aria-selected', 'true')

    await user.keyboard('{ArrowRight}')
    expect(tabC).toHaveFocus()
    expect(tabC).toHaveAttribute('aria-selected', 'true')

    // Wraps past the last tab back to the first.
    await user.keyboard('{ArrowRight}')
    expect(tabA).toHaveFocus()
    expect(tabA).toHaveAttribute('aria-selected', 'true')

    // Wraps past the first tab back to the last.
    await user.keyboard('{ArrowLeft}')
    expect(tabC).toHaveFocus()
    expect(tabC).toHaveAttribute('aria-selected', 'true')
  })

  it('uses a roving tabIndex — only the active tab is tab-focusable', () => {
    render(<Tabs label="Example" tabs={tabs} />)

    const [tabA, tabB, tabC] = screen.getAllByRole('tab')
    expect(tabA).toHaveAttribute('tabIndex', '0')
    expect(tabB).toHaveAttribute('tabIndex', '-1')
    expect(tabC).toHaveAttribute('tabIndex', '-1')
  })
})
