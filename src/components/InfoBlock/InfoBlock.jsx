import styles from './InfoBlock.module.css'

export function InfoBlock({ title, index, secondary = false, children }) {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>{title}</h2>
      <p className={`${styles.text} ${secondary ? styles.secondary : ''}`}>
        {index && <span className={`index-number ${styles.index}`}>{index}</span>}
        {children}
      </p>
    </div>
  )
}
