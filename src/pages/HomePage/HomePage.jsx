import { Link } from 'react-router-dom'
import { SectionIntro } from '../../components/SectionIntro/SectionIntro.jsx'
import { ProjectGrid } from '../../components/ProjectGrid/ProjectGrid.jsx'
import { ContactForm } from '../../components/ContactForm/ContactForm.jsx'
import { projects } from '../../data/projects.js'
import styles from './HomePage.module.css'

export function HomePage() {
  const featured = projects.slice(0, 2)

  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.name}>
          <span className="text-box">
            <span className="text-in">Enzo Rabossi</span>
          </span>
        </h1>
      </section>

      <SectionIntro label="Approach" meta="Copenhagen, Denmark">
        From running a brewery to writing code — I like solving real problems with simple,
        well-built software.
      </SectionIntro>

      {featured.length > 0 && (
        <section className={styles.work}>
          <div className={styles.workHeader}>
            <h2 className={`${styles.workTitle} text-box`}>
              <span className="text-in">Selected work</span>
            </h2>
            <Link className={`${styles.workLink} link-line`} to="/work">
              See all work
            </Link>
          </div>
          <ProjectGrid projects={featured} />
        </section>
      )}

      <section id="contact" className={styles.contact}>
        <div className={`${styles.contactHeader} scroll-in-group`}>
          <p className="text-box">
            <span className="scroll-in micro-label">[ Contact ]</span>
          </p>
          <h2 className={`${styles.contactTitle} text-box`}>
            <span className="scroll-in">Get in touch</span>
          </h2>
        </div>
        <ContactForm />
      </section>
    </>
  )
}
