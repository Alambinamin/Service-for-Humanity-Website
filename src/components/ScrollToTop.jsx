import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to the top of the page (or hash target) whenever the route changes.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          if (window.__lenis) {
            window.__lenis.scrollTo(element, { offset: -80 })
          } else {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }, 120)
    } else {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
      }
    }
  }, [pathname, hash])

  return null
}
