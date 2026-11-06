import { Link } from 'react-router-dom'
import { org } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { MailIcon, PhoneIcon, MapPinIcon, FacebookIcon, HeartHandshakeIcon, ShieldCheckIcon } from './Icons.jsx'

export default function SiteFooter() {
  const { t, ct } = useLanguage()

  return (
    <footer className="site-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Org Profile Column */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="brand">
              <div className="brand-logo-wrap">
                <img src="/images/logo.jpg" alt="Service for Humanity Logo" className="brand-logo" />
              </div>
              <div className="brand-info">
                <span className="brand-text">{ct(org.name)}</span>
                <span className="brand-subtext">{ct({ en: 'Daganbhuiyan, Feni', bn: 'দাগনভূঁইয়া, ফেনী' })}</span>
              </div>
            </Link>
            <p className="footer-about">{ct(org.tagline)}</p>
            <div className="footer-trust-tag">
              <ShieldCheckIcon size={14} className="trust-icon" />
              <span>{ct({ en: '100% Volunteer Initiative · 0% Overhead', bn: '১০০% স্বেচ্ছাসেবী উদ্যোগ · কোনো প্রশাসনিক খরচ নেই' })}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-title">{t('footer.explore')}</h4>
            <div className="footer-links">
              <Link to="/">{t('nav.home')}</Link>
              <Link to="/about">{t('nav.about')}</Link>
              <Link to="/our-work">{t('nav.ourWork')}</Link>
              <Link to="/gallery">{t('nav.gallery')}</Link>
              <Link to="/support-us">{t('nav.supportUs')}</Link>
              <Link to="/contact">{t('nav.contact')}</Link>
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col">
            <h4 className="footer-title">{t('footer.contact')}</h4>
            <div className="footer-contact-items">
              <a href={`mailto:${org.email}`} className="footer-contact-link">
                <MailIcon size={15} className="footer-contact-icon" />
                <span>{org.email}</span>
              </a>
              <a href={`tel:${org.phone.replace(/\s/g, '')}`} className="footer-contact-link">
                <PhoneIcon size={15} className="footer-contact-icon" />
                <span>{org.phone}</span>
              </a>
              <div className="footer-contact-text">
                <MapPinIcon size={15} className="footer-contact-icon" />
                <span>{ct(org.address)}</span>
              </div>
            </div>
          </div>

          {/* Direct Support & Social */}
          <div className="footer-col">
            <h4 className="footer-title">{t('footer.follow')}</h4>
            <div className="footer-social-row">
              <a
                href={org.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn facebook"
                aria-label="Facebook Page"
                title="Facebook: Service for Humanity"
              >
                <FacebookIcon size={18} />
              </a>
            </div>

            <div className="footer-donate-box">
              <p className="footer-donate-lead">
                {ct({
                  en: 'Your contribution directly supports medical cases & food distribution.',
                  bn: 'আপনার সামান্য অনুদান সরাসরি চিকিৎসা ও খাদ্য সহায়তা পৌঁছে দেয়।',
                })}
              </p>
              <Link to="/support-us" className="footer-donate-btn">
                <HeartHandshakeIcon size={16} />
                <span>{ct({ en: 'Send Support Now', bn: 'অনুদান পাঠান' })}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {org.founded}–{new Date().getFullYear()} {ct(org.name)}. {t('footer.copyright')}
          </div>
          <div className="footer-meta-pill">
            <span>Developed by </span>
            <a
              href="https://www.facebook.com/alam.binamin/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-credit-link"
            >
              Alam Bin Amin
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
