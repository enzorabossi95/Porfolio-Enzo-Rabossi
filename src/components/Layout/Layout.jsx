import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { useScrollToHash } from '../../hooks/useScrollToHash.js'
import styles from './Layout.module.css'

export function Layout() {
  useScrollToHash()

  return (
    <>
      <a className={styles.skipLink} href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
