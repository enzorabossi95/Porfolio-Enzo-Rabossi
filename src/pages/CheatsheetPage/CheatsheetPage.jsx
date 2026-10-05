import { useParams } from 'react-router-dom'
import { cheatsheets } from '../../data/cheatsheets.js'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage.jsx'
import styles from './CheatsheetPage.module.css'

export function CheatsheetPage() {
  const { slug } = useParams()
  const sheet = cheatsheets.find((item) => item.slug === slug)

  if (!sheet) {
    return <NotFoundPage />
  }

  return (
    <article lang={sheet.lang}>
      <h1 className={styles.title}>{sheet.title}</h1>

      {sheet.sections.map((section) => (
        <section key={section.id} id={section.id} className={styles.section}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <pre className={styles.code}>
            <code>{section.code}</code>
          </pre>
        </section>
      ))}
    </article>
  )
}
