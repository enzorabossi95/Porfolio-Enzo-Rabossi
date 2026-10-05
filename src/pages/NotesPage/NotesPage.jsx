import { SectionIntro } from '../../components/SectionIntro/SectionIntro.jsx'
import { ArchiveTable } from '../../components/ArchiveTable/ArchiveTable.jsx'
import { cheatsheets } from '../../data/cheatsheets.js'
import styles from './NotesPage.module.css'

export function NotesPage() {
  const rows = [
    ...cheatsheets.map((sheet) => ({
      id: sheet.slug,
      to: `/notes/${sheet.slug}`,
      cells: [sheet.title, 'Cheatsheet', sheet.lang.toUpperCase()],
    })),
    {
      id: 'resources',
      to: '/resources',
      cells: ['Resources', 'Links', 'EN'],
    },
  ]

  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>Notes</h1>
      </section>

      <SectionIntro label="Notes" meta={`${rows.length} entries`}>
        Cheatsheets and resources I put together while learning — kept here for quick
        reference.
      </SectionIntro>

      <section className={styles.list}>
        <ArchiveTable columns={['Name', 'Type', 'Language']} rows={rows} />
      </section>
    </>
  )
}
