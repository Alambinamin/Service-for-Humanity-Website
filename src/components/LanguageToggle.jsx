import { useLanguage } from '../context/LanguageContext.jsx'
import { GlobeIcon } from './Icons.jsx'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      className="lang-toggle-btn"
      onClick={toggleLang}
      aria-label="Switch language / ভাষা পরিবর্তন করুন"
      title="Switch Language (English / বাংলা)"
    >
      <GlobeIcon size={14} className="lang-globe-icon" />
      <span className={`lang-badge ${lang === 'en' ? 'lang-badge-active' : ''}`}>EN</span>
      <span className="lang-divider">|</span>
      <span className={`lang-badge ${lang === 'bn' ? 'lang-badge-active' : ''}`}>বাং</span>
    </button>
  )
}
