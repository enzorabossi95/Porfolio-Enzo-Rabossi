import { NavLink } from 'react-router-dom'
import { projects } from '../../data/projects.js'
import styles from './Header.module.css'

export function Header() {
  const workLabel = `Work, ${projects.length} ${projects.length === 1 ? 'project' : 'projects'}`

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        <span className="text-box">
          <span className="text-in" style={{ '--stagger-delay': '0s' }}>
            ©Enzo Rabossi
          </span>
        </span>
      </NavLink>

      <nav className={styles.nav} aria-label="Primary">
        <ul className={styles.navList}>
          <li>
            <NavLink to="/work" className={`${styles.navLink} link-line`} aria-label={workLabel}>
              <span className="text-box">
                <span className="text-in" style={{ '--stagger-delay': '0.05s' }}>
                  Work
                </span>
              </span>
              <span className="count" aria-hidden="true">
                ({projects.length})
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={`${styles.navLink} link-line`}>
              <span className="text-box">
                <span className="text-in" style={{ '--stagger-delay': '0.1s' }}>
                  About
                </span>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/notes" className={`${styles.navLink} link-line`}>
              <span className="text-box">
                <span className="text-in" style={{ '--stagger-delay': '0.15s' }}>
                  Notes
                </span>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <a className={`${styles.contactButton} link-line`} href="/#contact">
        <span className="text-box">
          <span className="text-in" style={{ '--stagger-delay': '0.2s' }}>
            Get in touch
          </span>
        </span>
      </a>
    </header>
  )
}
