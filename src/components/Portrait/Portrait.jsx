import { useEffect, useRef } from 'react'
import { motionEnabled } from '../../utils/motion.js'
import styles from './Portrait.module.css'

// Scroll-linked zoom-out, matching the reference's About-page photo treatment.
// A direct scroll->scale mapping, no easing — skipped entirely under reduced
// motion, where the photo just renders at its natural size.
function usePhotoScrollScale() {
  const imageRef = useRef(null)

  useEffect(() => {
    if (!motionEnabled()) return undefined

    const image = imageRef.current
    if (!image) return undefined

    function update() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0
      image.style.transform = `scale(${1.3 - progress * 0.3})`
    }

    window.addEventListener('scroll', update, { passive: true })
    update()

    return () => window.removeEventListener('scroll', update)
  }, [])

  return imageRef
}

export function Portrait({ src, alt }) {
  const imageRef = usePhotoScrollScale()

  return (
    <div className={`${styles.wrapper} reveal-rise`}>
      <img ref={imageRef} className={styles.photo} src={src} alt={alt} />
    </div>
  )
}
