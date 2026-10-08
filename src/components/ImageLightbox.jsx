import { useState } from 'react'

/**
 * Full-screen lightbox that displays a single image at a time
 * with left/right navigation through a list of images.
 */
export default function ImageLightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex || 0)

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : images.length - 1))
  const next = () => setIndex((i) => (i < images.length - 1 ? i + 1 : 0))

  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)
  
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEndX(null)
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEndX(e.targetTouches[0].clientX)

  const onTouchEndEvent = () => {
    if (!touchStartX || !touchEndX) return
    const distance = touchStartX - touchEndX
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) next()
    if (isRightSwipe) prev()
  }

  const handleKey = (e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <div
      className="lightbox"
      onClick={onClose}
      onKeyDown={handleKey}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndEvent}
      tabIndex={0}
      ref={(el) => el && el.focus()}
    >
      <button className="lightbox-close" onClick={onClose}>
        ✕
      </button>

      <img 
        src={images[index]} 
        alt="" 
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()} 
      />

      {images.length > 1 && (
        <>
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
          <div 
            className="lightbox-counter"
            onClick={(e) => e.stopPropagation()}
          >
            {index + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}
