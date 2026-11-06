import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { org } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import LanguageToggle from './LanguageToggle.jsx'
import { HeartHandshakeIcon, MenuIcon, CloseIcon } from './Icons.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, ct, lang } = useLanguage()
  const location = useLocation()

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/about', label: t('nav.about') },
    { to: '/our-work', label: t('nav.ourWork') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/support-us', label: t('nav.supportUs') },
    { to: '/contact', label: t('nav.contact') },
  ]

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  // Scroll detection for frosted glass navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand */}
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-logo-wrap">
            <img src="/images/logo.jpg" alt="Service for Humanity Logo" className="brand-logo" />
            <span className="brand-status-dot" title="Active Community Initiative" />
          </div>
          <div className="brand-info">
            <span className="brand-text">{ct(org.name)}</span>
            <span className="brand-subtext">{ct({ en: 'Daganbhuiyan, Feni', bn: 'দাগনভূঁইয়া, ফেনী' })}</span>
          </div>
        </Link>

        {/* Mobile Controls */}
        <div className="nav-controls">
          <div className="lang-mobile">
            <LanguageToggle />
          </div>
          <button
            className="nav-toggle"
            aria-label={open ? (lang === 'bn' ? 'মেনু বন্ধ করুন' : 'Close navigation menu') : (lang === 'bn' ? 'মেনু খুলুন' : 'Open navigation menu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="nav-toggle-icon">
              {open ? <CloseIcon size={18} className="nav-toggle-icon-svg" /> : <MenuIcon size={18} className="nav-toggle-icon-svg" />}
            </div>
            <span className="nav-toggle-label">
              {open ? (lang === 'bn' ? 'বন্ধ' : 'Close') : (lang === 'bn' ? 'মেনু' : 'Menu')}
            </span>
          </button>
        </div>

        {/* Backdrop for mobile */}
        {open && <div className="nav-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}

        {/* Navigation Links */}
        <nav className={`nav-links ${open ? 'show' : ''}`}>
          <div className="nav-links-inner">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <span>{l.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="nav-right-actions">
            <div className="lang-desktop">
              <LanguageToggle />
            </div>

            <Link
              to="/support-us"
              className="nav-cta-btn"
              onClick={() => setOpen(false)}
            >
              <HeartHandshakeIcon size={16} className="nav-cta-icon" />
              <span>{t('nav.supportUs')}</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
