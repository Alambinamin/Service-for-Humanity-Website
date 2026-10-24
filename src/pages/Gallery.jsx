import { useState } from 'react'
import { gallery } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import ImageLightbox from '../components/ImageLightbox.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { t, ct } = useLanguage()

  const allImages = gallery.map((g) => g.img)

  return (
    <div className="page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-12-16-1.jpg" alt="" loading="eager" />
        </div>
        <div className="page-hero-content">
          <Reveal delay={0.1}>
            <span className="badge">{t('gallery.badge')}</span>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="page-title">
              {t('gallery.heroTitle1')}{' '}
              <span className="grad-text">{t('gallery.heroTitle2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="page-lead">{t('gallery.heroLead')}</p>
          </Reveal>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="gallery-grid">
          {gallery.map((g, i) => (
            <Reveal key={g.id} delay={Math.min(i * 0.08, 0.4)}>
              <button
                className="gallery-item"
                onClick={() => setLightboxIndex(i)}
                aria-label={ct(g.caption)}
              >
                <img src={g.img} alt={ct(g.caption)} loading="lazy" />
                <span className="gallery-caption">{ct(g.caption)}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lightbox with Swipe & Keyboard support */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={allImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}
