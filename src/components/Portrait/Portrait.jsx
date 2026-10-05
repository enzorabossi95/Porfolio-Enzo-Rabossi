import styles from './Portrait.module.css'

export function Portrait({ src, alt }) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.photo} src={src} alt={alt} />
    </div>
  )
}
