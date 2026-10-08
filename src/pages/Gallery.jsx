import { useState } from 'react'
import { gallery } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function Gallery() {
  const [active, setActive] = useState(null)
  const { t, ct } = useLanguage()

  return (
    <div className="page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-12-16-1.jpg" alt="" loading="eager" />
        </div>
        <div className="page-hero-content">
          <span className="badge">{t('gallery.badge')}</span>
          <h1 className="page-title">
            {t('gallery.heroTitle1')}{' '}
            <span className="grad-text">{t('gallery.heroTitle2')}</span>
          </h1>
          <p className="page-lead">{t('gallery.heroLead')}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section">
        <div className="gallery-grid">
          {gallery.map((g) => (
            <button
              key={g.id}
              className="gallery-item"
              onClick={() => setActive(g)}
            >
              <img src={g.img} alt={ct(g.caption)} loading="lazy" />
              <span className="gallery-caption">{ct(g.caption)}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActive(null)}>
              ×
            </button>
            <img src={active.img} alt={ct(active.caption)} />
            <p className="lightbox-caption">{ct(active.caption)}</p>
          </div>
        </div>
      )}
    </div>
  )
}
