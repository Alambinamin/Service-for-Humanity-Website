import { gallery } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function PhotoStrip() {
  const { ct } = useLanguage()
  // Duplicate items so the scroll loop looks seamless
  const items = [...gallery, ...gallery]

  return (
    <div className="photo-strip-section">
      <div className="photo-strip-track">
        {items.map((g, i) => (
          <div key={`${g.id}-${i}`} className="photo-strip-item">
            <img src={g.img} alt={ct(g.caption)} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}
