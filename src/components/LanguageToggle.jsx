import { useLanguage } from '../context/LanguageContext.jsx'

export default function LanguageToggle() {
  const { lang, toggleLang, t } = useLanguage()

  return (
    <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
      <span className="flag">{lang === 'en' ? '🇧🇩' : '🇬🇧'}</span>
      <span>{t('lang.switch')}</span>
    </button>
  )
}
