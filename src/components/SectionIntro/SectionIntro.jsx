import styles from './SectionIntro.module.css'

export function SectionIntro({ label, index = '01', meta, children }) {
  return (
    <div className={styles.intro}>
      <div className={`hairline ${styles.border}`} />

      <p className="micro-label">[ {label} ]</p>

      <div className={styles.right}>
        <p className={`${styles.paragraph} text-indent`}>
          <span className="index-number">{index}</span> {children}
        </p>
        {meta && <p className={styles.meta}>{meta}</p>}
      </div>
    </div>
  )
}
