import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`hairline ${styles.border}`} />

      <p className={styles.year}>© {year}</p>

      <div className={styles.right}>
        <div className={styles.block}>
          <p className="micro-label">[ Open ]</p>
          <p className={`${styles.text} text-indent`}>
            Open to full-time roles and freelance work, based in Copenhagen or remote. Feel free
            to{' '}
            <a className={styles.link} href="/#contact">
              say hello
            </a>
            .
          </p>
        </div>

        <div className={styles.block}>
          <p className="micro-label">[ Contact ]</p>
          <p className={styles.text}>
            Email:{' '}
            <a className={styles.link} href="mailto:enzorabossi@gmail.com">
              enzorabossi@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
