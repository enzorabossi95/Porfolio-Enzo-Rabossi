import { resources } from '../../data/resources.js'
import styles from './ResourcesPage.module.css'

// Plain list for now — becomes an accessible Tabs widget in a later sprint.
export function ResourcesPage() {
  return (
    <article>
      <h1 className={styles.title}>Resources</h1>

      {resources.map((group) => (
        <section key={group.category} className={styles.group}>
          <h2 className={styles.heading}>{group.category}</h2>
          <ul className={styles.list}>
            {group.items.map((item) => (
              <li key={item.title} className={styles.item}>
                <a
                  className={styles.link}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
                <p className={styles.note}>{item.note}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  )
}
