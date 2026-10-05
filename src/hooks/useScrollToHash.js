import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Lets /#section links work from any route: scrolls to the matching element on
// navigation, or to the top of the page when there's no hash.
export function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))

      if (element) {
        element.scrollIntoView()
        return
      }
    }

    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])
}
