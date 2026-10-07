import { useId, useState } from 'react'
import styles from './ContactForm.module.css'

const ENDPOINT = 'https://formsubmit.co/ajax/enzorabossi@gmail.com'

const initialFields = { name: '', email: '', message: '', _honey: '' }

export function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  function handleChange(event) {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          message: fields.message,
          _honey: fields._honey,
          _subject: 'New message from the portfolio contact form',
          _template: 'table',
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('sent')
      setFields(initialFields)
    } catch {
      setStatus('error')
    }
  }

  const isSending = status === 'sending'

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="_honey"
        value={fields._honey}
        onChange={handleChange}
        className={styles.honey}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={styles.field}>
        <label className={styles.label} htmlFor={nameId}>
          Name
        </label>
        <input
          className={styles.input}
          type="text"
          id={nameId}
          name="name"
          value={fields.name}
          onChange={handleChange}
          autoComplete="name"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={emailId}>
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          id={emailId}
          name="email"
          value={fields.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={messageId}>
          Message
        </label>
        <textarea
          className={styles.textarea}
          id={messageId}
          name="message"
          value={fields.message}
          onChange={handleChange}
          rows="6"
          required
        />
      </div>

      <button className={styles.submit} type="submit" disabled={isSending}>
        {isSending ? 'Sending…' : 'Send message'}
      </button>

      <p className={styles.status} role="status">
        {status === 'sent' && "Message sent. I'll reply to the email you gave."}
        {status === 'error' &&
          "Your message didn't send. Check your connection and try again, or email me directly at enzorabossi@gmail.com."}
      </p>
    </form>
  )
}
