import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { org } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import LanguageToggle from './LanguageToggle.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t, ct } = useLanguage()

  const links = [
    { to: '/', label: t('nav.home'), end: true },
    { to: '/about', label: t('nav.about') },
    { to: '/our-work', label: t('nav.ourWork') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/support-us', label: t('nav.supportUs') },
    { to: '/contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">SH</span>
          <span className="brand-text">{ct(org.name)}</span>
        </Link>

        <div className="nav-controls" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="lang-mobile">
            <LanguageToggle />
          </div>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`bar ${open ? 'open' : ''}`} />
          </button>
        </div>

        <nav className={`nav-links ${open ? 'show' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="lang-desktop">
            <LanguageToggle />
          </div>
          <Link
            to="/support-us"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            {t('nav.supportUs')}
          </Link>
        </nav>
      </div>
    </header>
  )
}
