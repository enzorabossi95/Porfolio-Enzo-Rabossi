import { Tabs } from '../../components/Tabs/Tabs.jsx'
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js'
import { resources } from '../../data/resources.js'
import styles from './ResourcesPage.module.css'

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function ResourcesPage() {
  useDocumentTitle('Resources, Enzo Rabossi')

  const tabs = resources.map((group) => ({
    id: slugify(group.category),
    label: group.category,
    panel: (
      <ul className={styles.list}>
        {group.items.map((item) => (
          <li key={item.title} className={styles.item}>
            <a className="link-line" href={item.url} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p className={styles.note}>{item.note}</p>
          </li>
        ))}
      </ul>
    ),
  }))

  return (
    <article>
      <h1 className={styles.title}>Resources</h1>
      <div className={styles.tabsWrapper}>
        <Tabs label="Resource categories" tabs={tabs} />
      </div>
    </article>
  )
}
