import { NavLink } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import styles from './Header.module.css'

export function Header() {
  const workLabel = `Work, ${projects.length} ${projects.length === 1 ? 'project' : 'projects'}`

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        ©Enzo Rabossi
      </NavLink>

      <nav className={styles.nav} aria-label="Primary">
        <ul className={styles.navList}>
          <li>
            <NavLink to="/work" className={styles.navLink} aria-label={workLabel}>
              Work
              <span className="count" aria-hidden="true">
                ({projects.length})
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.navLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" className={styles.navLink}>
              Notes
            </NavLink>
          </li>
        </ul>
      </nav>

      <a className={styles.contactButton} href="/#contact">
        Get in touch
      </a>
    </header>
  )
}
