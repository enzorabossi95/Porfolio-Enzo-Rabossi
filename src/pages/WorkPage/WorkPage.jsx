import { SectionIntro } from '../../components/SectionIntro/SectionIntro.jsx'
import { ProjectGrid } from '../../components/ProjectGrid/ProjectGrid.jsx'
import { projects } from '../../data/projects.js'
import styles from './WorkPage.module.css'

export function WorkPage() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={`${styles.title} text-box`}>
          <span className="text-in">Work</span>
        </h1>
      </section>

      <SectionIntro label="Work" meta={`${projects.length} projects`}>
        A selection of projects exploring different ideas, challenges, and ways of making
        things work.
      </SectionIntro>

      <section className={styles.grid}>
        <ProjectGrid projects={projects} />
      </section>
    </>
  )
}
