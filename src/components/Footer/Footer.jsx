import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`hairline reveal-border ${styles.border}`} />

      <div className="scroll-in-group">
        <p className="text-box">
          <span className="scroll-in">© {year}</span>
        </p>
      </div>

      <div className={styles.right}>
        <div className={`${styles.block} scroll-in-group`}>
          <p className="text-box">
            <span className="scroll-in micro-label">[ Open ]</span>
          </p>
          <p className={styles.text}>
            <span className="text-box">
              <span className="scroll-in text-indent">
                Open to full-time roles and freelance work, based in Copenhagen or remote. Feel
                free to{' '}
                <a className="link-line" href="/#contact">
                  say hello
                </a>
                .
              </span>
            </span>
          </p>
        </div>

        <div className={`${styles.block} scroll-in-group`}>
          <p className="text-box">
            <span className="scroll-in micro-label">[ Contact ]</span>
          </p>
          <p className={styles.text}>
            <span className="text-box">
              <span className="scroll-in">
                Email:{' '}
                <a className="link-line" href="mailto:enzorabossi@gmail.com">
                  enzorabossi@gmail.com
                </a>
              </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
