import { useState } from 'react'
import { org } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { t, ct } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-02-28.jpg" alt="" loading="eager" />
        </div>
        <div className="page-hero-content">
          <span className="badge">{t('contact.badge')}</span>
          <h1 className="page-title">
            {t('contact.heroTitle1')}{' '}
            <span className="grad-text">{t('contact.heroTitle2')}</span>
          </h1>
          <p className="page-lead">{t('contact.heroLead')}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="contact-wrap">
          <div className="contact-info glass">
            <h3>{t('contact.volunteer.title')}</h3>
            <p>{t('contact.volunteer.desc')}</p>
            <ul className="contact-list">
              <li>
                <span>✉️</span>
                <a href={`mailto:${org.email}`}>{org.email}</a>
              </li>
              <li>
                <span>📞</span>
                <a href={`tel:${org.phone.replace(/\s/g, '')}`}>{org.phone}</a>
              </li>
              <li>
                <span>📍</span>
                <span>{ct(org.address)}</span>
              </li>
            </ul>
          </div>

          <form className="contact-form glass" onSubmit={handleSubmit}>
            {sent ? (
              <div className="form-success">
                <span className="success-emoji">🎉</span>
                <h3>{t('contact.form.success.title')}</h3>
                <p>{t('contact.form.success.text')}</p>
              </div>
            ) : (
              <>
                <h3>{t('contact.form.title')}</h3>
                <label>
                  {t('contact.form.name')}
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t('contact.form.namePh')}
                  />
                </label>
                <label>
                  {t('contact.form.email')}
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t('contact.form.emailPh')}
                  />
                </label>
                <label>
                  {t('contact.form.interest')}
                  <select name="interest" defaultValue="volunteer">
                    <option value="volunteer">{t('contact.form.volunteer')}</option>
                    <option value="donate">{t('contact.form.donate')}</option>
                    <option value="partner">{t('contact.form.partner')}</option>
                    <option value="other">{t('contact.form.other')}</option>
                  </select>
                </label>
                <label>
                  {t('contact.form.message')}
                  <textarea
                    name="message"
                    rows="4"
                    placeholder={t('contact.form.messagePh')}
                  />
                </label>
                <button type="submit" className="btn btn-primary">
                  {t('contact.form.submit')}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Facebook Section */}
      <section className="section">
        <div className="facebook-section">
          <h3>{t('contact.facebook.title')}</h3>
          <p>{t('contact.facebook.desc')}</p>
          <a
            href={org.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="fb-link"
          >
            <span className="fb-icon">📘</span>
            Service For Humanity BD
          </a>
        </div>
      </section>
    </div>
  )
}
