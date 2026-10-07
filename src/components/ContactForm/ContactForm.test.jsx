import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ContactForm } from './ContactForm.jsx'

afterEach(() => {
  vi.unstubAllGlobals()
})

async function fillAndSubmit(user) {
  await user.type(screen.getByLabelText(/name/i), 'Jane')
  await user.type(screen.getByLabelText(/email/i), 'jane@example.com')
  await user.type(screen.getByLabelText(/message/i), 'Hello there')
  await user.click(screen.getByRole('button', { name: /send/i }))
}

describe('ContactForm', () => {
  it('disables the button while the request is in flight', async () => {
    const user = userEvent.setup()
    let resolveFetch
    vi.stubGlobal(
      'fetch',
      vi.fn(
        () =>
          new Promise((resolve) => {
            resolveFetch = resolve
          }),
      ),
    )

    render(<ContactForm />)
    await fillAndSubmit(user)

    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled()

    resolveFetch({ ok: true })
    await screen.findByText(/message sent/i)
  })

  it('shows the success copy when the request succeeds', async () => {
    const user = userEvent.setup()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }))

    render(<ContactForm />)
    await fillAndSubmit(user)

    expect(
      await screen.findByText(/message sent\. i'll reply to the email you gave\./i),
    ).toBeInTheDocument()
  })

  it('shows the error copy when the request fails', async () => {
    const user = userEvent.setup()
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))

    render(<ContactForm />)
    await fillAndSubmit(user)

    expect(await screen.findByText(/your message didn't send/i)).toBeInTheDocument()
  })
})
