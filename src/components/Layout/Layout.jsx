import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header.jsx'
import { Footer } from '../Footer/Footer.jsx'
import { useScrollToHash } from '../../hooks/useScrollToHash.js'
import { useMotionReady } from '../../hooks/useMotionReady.js'
import { useScrollReveal } from '../../hooks/useScrollReveal.js'
import styles from './Layout.module.css'

export function Layout() {
  useScrollToHash()
  useMotionReady()
  useScrollReveal()

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
