import { ProjectCard } from '../ProjectCard/ProjectCard.jsx'
import styles from './ProjectGrid.module.css'

export function ProjectGrid({ projects }) {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index + 1} />
      ))}
    </div>
  )
}
