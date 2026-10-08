import { Link } from 'react-router-dom'
import { org } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function SiteFooter() {
  const { t, ct } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <div className="brand">
            <span className="brand-mark">SH</span>
            <span className="brand-text">{ct(org.name)}</span>
          </div>
          <p className="footer-about">{ct(org.tagline)}</p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.explore')}</h4>
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/about">{t('nav.about')}</Link>
          <Link to="/our-work">{t('nav.ourWork')}</Link>
          <Link to="/gallery">{t('nav.gallery')}</Link>
          <Link to="/support-us">{t('nav.supportUs')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </div>

        <div className="footer-col">
          <h4>{t('footer.contact')}</h4>
          <a href={`mailto:${org.email}`}>{org.email}</a>
          <a href={`tel:${org.phone.replace(/\s/g, '')}`}>{org.phone}</a>
          <span>{ct(org.address)}</span>
        </div>

        <div className="footer-col">
          <h4>{t('footer.follow')}</h4>
          <div className="footer-social">
            <a
              href={org.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              📘
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {org.founded}–{new Date().getFullYear()} {ct(org.name)}. {t('footer.copyright')}
        </span>
      </div>
    </footer>
  )
}
