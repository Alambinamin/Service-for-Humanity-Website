import { useState, useEffect } from 'react'
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons.jsx'

/**
 * Full-screen lightbox with smooth gestures, keyboard navigation,
 * and high-resolution rendering.
 */
export default function ImageLightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex || 0)
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : images.length - 1))
  const next = () => setIndex((i) => (i < images.length - 1 ? i + 1 : 0))

  const minSwipeDistance = 45

  const onTouchStart = (e) => {
    setTouchEndX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEndX(e.targetTouches[0].clientX)

  const onTouchEndEvent = () => {
    if (!touchStartX || !touchEndX) return
    const distance = touchStartX - touchEndX
    if (distance > minSwipeDistance) next()
    if (distance < -minSwipeDistance) prev()
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [images.length])

  // Prevent background scrolling while open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndEvent}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery preview"
    >
      <div className="lightbox-chrome">
        <div className="lightbox-counter">
          <span>{index + 1}</span>
          <span className="lightbox-counter-sep">/</span>
          <span>{images.length}</span>
        </div>

        <button
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close preview"
          title="Close (Esc)"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="lightbox-content-wrap" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt="Service for Humanity event gallery"
          className="lightbox-main-img"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            className="lightbox-arrow-btn prev"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label="Previous image"
            title="Previous (Left arrow)"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            className="lightbox-arrow-btn next"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label="Next image"
            title="Next (Right arrow)"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </>
      )}
    </div>
  )
}
