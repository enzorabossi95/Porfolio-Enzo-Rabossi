import styles from './InfoBlock.module.css'

export function InfoBlock({ title, index, secondary = false, children }) {
  return (
    <div className={styles.block}>
      <h2 className={`${styles.title} text-box`}>
        <span className="scroll-in">{title}</span>
      </h2>
      <p className={`${styles.text} ${secondary ? styles.secondary : ''} text-box`}>
        <span className="scroll-in">
          {index && <span className={`index-number ${styles.index}`}>{index}</span>}
          {children}
        </span>
      </p>
    </div>
  )
}
