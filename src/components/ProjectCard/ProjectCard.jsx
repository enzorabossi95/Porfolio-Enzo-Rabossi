import styles from './ProjectCard.module.css'

export function ProjectCard({ project, index }) {
  const number = String(index).padStart(2, '0')
  const hasLinks = Boolean(project.repo || project.demo)

  return (
    <article className={`${styles.card} reveal-fade`}>
      <div className={styles.imageBox}>
        {project.image ? (
          <img className={styles.image} src={project.image} alt="" />
        ) : (
          <div className={styles.placeholder} aria-hidden="true">
            <span className={styles.placeholderNumber}>{number}</span>
            <span className={styles.placeholderTitle}>{project.title}</span>
          </div>
        )}
      </div>

      <div className={styles.titleRow}>
        <span className="index-number">{number}</span>
        <h3 className={styles.title}>{project.title}</h3>
      </div>

      <p className={styles.description}>{project.description}</p>

      {project.stack?.length > 0 && (
        <ul className={styles.stack}>
          {project.stack.map((tech) => (
            <li key={tech} className="micro-label">
              {tech}
            </li>
          ))}
        </ul>
      )}

      {hasLinks && (
        <p className={styles.links}>
          {project.repo && (
            <a className="link-line" href={project.repo} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          )}
          {project.demo && (
            <a className="link-line" href={project.demo} target="_blank" rel="noopener noreferrer">
              Live demo
            </a>
          )}
        </p>
      )}
    </article>
  )
}
