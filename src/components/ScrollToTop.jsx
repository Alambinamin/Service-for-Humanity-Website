import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the top of the page whenever the route changes.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  
  useEffect(() => {
    if (hash) {
      // Delay slightly so the new page components can render before searching for the ID
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    }
  }, [pathname, hash])
  
  return null
}
