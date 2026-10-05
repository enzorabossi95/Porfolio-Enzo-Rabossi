import styles from './SectionIntro.module.css'

export function SectionIntro({ label, index = '01', meta, children }) {
  return (
    <div className={styles.intro}>
      <div className={`hairline reveal-border ${styles.border}`} />

      <div className="scroll-in-group">
        <p className="text-box">
          <span className="scroll-in micro-label">[ {label} ]</span>
        </p>

        <div className={styles.right}>
          <p className={styles.paragraph}>
            <span className="text-box">
              <span className="scroll-in text-indent">
                <span className="index-number">{index}</span> {children}
              </span>
            </span>
          </p>
          {meta && (
            <p className={styles.meta}>
              <span className="text-box">
                <span className="scroll-in">{meta}</span>
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
