import { useState } from 'react'
import { org } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  FacebookIcon,
  CheckIcon,
  HeartHandshakeIcon,
  ArrowRightIcon
} from '../components/Icons.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const { t, ct, lang } = useLanguage()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page page-contact">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-02-28.jpg" alt="" loading="eager" />
          <div className="hero-overlay" />
        </div>
        <div className="page-hero-content">
          <Reveal delay={0.1}>
            <span className="badge">
              <MailIcon size={14} />
              <span>{t('contact.badge')}</span>
            </span>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="page-title">
              {t('contact.heroTitle1')}{' '}
              <span className="grad-text">{t('contact.heroTitle2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="page-lead">{t('contact.heroLead')}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Contact Details & Volunteer Form ── */}
      <section className="section section-contact-wrap">
        <div className="contact-grid">
          {/* Contact Information & Community Details */}
          <Reveal delay={0.1}>
            <div className="contact-info-card glass">
              <div className="contact-info-header">
                <span className="badge badge-warm">
                  <HeartHandshakeIcon size={14} />
                  <span>{ct({ en: 'Community Coordinators', bn: 'মাঠপর্যায়ের সমন্বয়ক' })}</span>
                </span>
                <h3>{t('contact.volunteer.title')}</h3>
                <p>{t('contact.volunteer.desc')}</p>
              </div>

              <div className="contact-channel-list">
                <a href={`mailto:${org.email}`} className="contact-channel-item">
                  <div className="channel-icon-wrap warm">
                    <MailIcon size={20} className="text-amber-400" />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">{lang === 'bn' ? 'ইমেইল' : 'Email Us'}</span>
                    <span className="channel-val channel-email">{org.email}</span>
                  </div>
                </a>

                <a href={`tel:${org.phone.replace(/\s/g, '')}`} className="contact-channel-item">
                  <div className="channel-icon-wrap emerald">
                    <PhoneIcon size={20} className="text-emerald-400" />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">{lang === 'bn' ? 'মোবাইল / হোয়াটসঅ্যাপ' : 'Call / WhatsApp'}</span>
                    <span className="channel-val">{org.phone}</span>
                  </div>
                </a>

                <div className="contact-channel-item address">
                  <div className="channel-icon-wrap blue">
                    <MapPinIcon size={20} className="text-blue-400" />
                  </div>
                  <div className="channel-text">
                    <span className="channel-label">{lang === 'bn' ? 'অফিস / ঠিকানা' : 'Location'}</span>
                    <span className="channel-val">{ct(org.address)}</span>
                  </div>
                </div>
              </div>

              {/* Direct Facebook Link Box */}
              <div className="contact-fb-card">
                <div className="fb-card-top">
                  <div className="fb-avatar-circle">
                    <FacebookIcon size={24} className="text-[#1877F2]" />
                  </div>
                  <div className="fb-card-copy">
                    <h4>{t('contact.facebook.title')}</h4>
                    <p>{t('contact.facebook.desc')}</p>
                  </div>
                </div>
                <a
                  href={org.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fb-action-btn"
                >
                  <span>Service For Humanity BD</span>
                  <ArrowRightIcon size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Volunteer & Inquiry Form */}
          <Reveal delay={0.25}>
            <form className="contact-form-card glass" onSubmit={handleSubmit}>
              {sent ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <CheckIcon size={32} className="text-emerald-400" />
                  </div>
                  <h3>{t('contact.form.success.title')}</h3>
                  <p>{t('contact.form.success.text')}</p>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => setSent(false)}
                  >
                    <span>{ct({ en: 'Send another message', bn: 'আরেকটি বার্তা পাঠান' })}</span>
                  </button>
                </div>
              ) : (
                <>
                  <div className="form-header">
                    <h3>{t('contact.form.title')}</h3>
                    <p className="form-subtext">
                      {ct({
                        en: 'Want to volunteer, donate from abroad, or suggest a family in need? Write to us below.',
                        bn: 'স্বেচ্ছাসেবী হিসেবে যোগ দিতে, বিদেশ থেকে অনুদান পাঠাতে বা সাহায্যপ্রার্থী কোনো পরিবারের খোঁজ দিতে বার্তা পাঠান।',
                      })}
                    </p>
                  </div>

                  <div className="form-fields">
                    <label className="form-field-label">
                      <span>{t('contact.form.name')} *</span>
                      <input
                        type="text"
                        name="name"
                        required
                        className="form-input"
                        placeholder={t('contact.form.namePh')}
                      />
                    </label>

                    <label className="form-field-label">
                      <span>{t('contact.form.email')} *</span>
                      <input
                        type="email"
                        name="email"
                        required
                        className="form-input"
                        placeholder={t('contact.form.emailPh')}
                      />
                    </label>

                    <label className="form-field-label">
                      <span>{t('contact.form.interest')}</span>
                      <div className="select-wrap">
                        <select name="interest" defaultValue="volunteer" className="form-select">
                          <option value="volunteer">{t('contact.form.volunteer')}</option>
                          <option value="donate">{t('contact.form.donate')}</option>
                          <option value="partner">{t('contact.form.partner')}</option>
                          <option value="other">{t('contact.form.other')}</option>
                        </select>
                      </div>
                    </label>

                    <label className="form-field-label">
                      <span>{t('contact.form.message')} *</span>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        className="form-textarea"
                        placeholder={t('contact.form.messagePh')}
                      />
                    </label>

                    <button type="submit" className="btn btn-primary form-submit-btn">
                      <span>{t('contact.form.submit')}</span>
                      <ArrowRightIcon size={16} />
                    </button>
                  </div>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
