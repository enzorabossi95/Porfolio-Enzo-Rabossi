import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js'

export function NotFoundPage() {
  useDocumentTitle('Page not found, Enzo Rabossi')

  return (
    <>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Back home</Link>
      </p>
    </>
  )
}
