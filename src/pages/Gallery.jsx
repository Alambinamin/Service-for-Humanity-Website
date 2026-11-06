import { useState } from 'react'
import { gallery } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import ImageLightbox from '../components/ImageLightbox.jsx'
import Reveal from '../components/Reveal.jsx'
import { SparklesIcon, SearchIcon, MapPinIcon } from '../components/Icons.jsx'

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { t, ct } = useLanguage()

  const allImages = gallery.map((g) => g.img)

  return (
    <div className="page page-gallery">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-12-16-1.jpg" alt="" loading="eager" />
          <div className="hero-overlay" />
        </div>
        <div className="page-hero-content">
          <Reveal delay={0.1}>
            <span className="badge">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>{t('gallery.badge')}</span>
            </span>
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

      {/* Gallery Section */}
      <section className="section section-gallery-grid">
        <div className="gallery-header-info">
          <div className="gallery-count-badge">
            <span className="gallery-count-num">{gallery.length}</span>
            <span>{ct({ en: 'Documented Outreach Moments', bn: 'মাঠপর্যায়ের সংগৃহীত আলোকচিত্র' })}</span>
          </div>
          <div className="gallery-location-pill">
            <MapPinIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>{ct({ en: 'Daganbhuiyan, Feni', bn: 'দাগনভূঁইয়া, ফেনী' })}</span>
          </div>
        </div>

        <div className="gallery-masonry-grid">
          {gallery.map((g, i) => (
            <Reveal key={g.id} delay={Math.min(i * 0.05, 0.3)}>
              <button
                className="gallery-card-item"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View photo: ${ct(g.caption)}`}
              >
                <div className="gallery-img-wrap">
                  <img src={g.img} alt={ct(g.caption)} loading="lazy" />
                  <div className="gallery-hover-overlay">
                    <div className="gallery-zoom-icon">
                      <SearchIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="gallery-caption-overlay">{ct(g.caption)}</span>
                  </div>
                </div>
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
