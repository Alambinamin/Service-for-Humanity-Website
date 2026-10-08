import { useState } from 'react'
import { org, fundAreas } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useCountUp } from '../utils/useCountUp.js'
import SectionHeading from '../components/SectionHeading.jsx'

function TotalCounter({ value, label }) {
  const n = useCountUp(value)
  return (
    <div className="total-counter">
      <span className="total-amount">৳{Math.round(n).toLocaleString('en-IN')}+</span>
      <span className="total-label">{label}</span>
    </div>
  )
}

export default function SupportUs() {
  const { t, ct } = useLanguage()
  const [copiedField, setCopiedField] = useState(null)

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    })
  }

  return (
    <div className="page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-03-01.jpg" alt="" loading="eager" />
        </div>
        <div className="page-hero-content">
          <span className="badge">{t('support.badge')}</span>
          <h1 className="page-title">
            {t('support.heroTitle1')}{' '}
            <span className="grad-text">{t('support.heroTitle2')}</span>
          </h1>
          <p className="page-lead">{t('support.heroLead')}</p>
        </div>
      </section>

      {/* Total Distributed */}
      <div className="support-total-section">
        <TotalCounter
          value={org.totalDistributed}
          label={t('support.total.label')}
        />
      </div>

      {/* Payment Methods */}
      <section className="section">
        <SectionHeading
          eyebrow={t('support.how.eyebrow')}
          title={t('support.how.title')}
          center
        />
        <div className="payment-grid">
          {/* bKash */}
          <div className="glass payment-card">
            <span className="payment-icon">📱</span>
            <h3>{t('support.bkash.title')}</h3>
            <p className="payment-desc">{t('support.bkash.desc')}</p>
            <div className="payment-number">{org.payments.bkash.number}</div>
            <div className="payment-type">{ct(org.payments.bkash.type)}</div>
            <button
              className={`copy-btn ${copiedField === 'bkash' ? 'copied' : ''}`}
              onClick={() => copyToClipboard(org.payments.bkash.number, 'bkash')}
            >
              {copiedField === 'bkash' ? t('support.copied') : t('support.copy')}
            </button>
          </div>

          {/* Nagad */}
          <div className="glass payment-card">
            <span className="payment-icon">💳</span>
            <h3>{t('support.nagad.title')}</h3>
            <p className="payment-desc">{t('support.nagad.desc')}</p>
            <div className="payment-number">{org.payments.nagad.number}</div>
            <div className="payment-type">{ct(org.payments.nagad.type)}</div>
            <button
              className={`copy-btn ${copiedField === 'nagad' ? 'copied' : ''}`}
              onClick={() => copyToClipboard(org.payments.nagad.number, 'nagad')}
            >
              {copiedField === 'nagad' ? t('support.copied') : t('support.copy')}
            </button>
          </div>

          {/* Bank Transfer */}
          <div className="glass payment-card">
            <span className="payment-icon">🏦</span>
            <h3>{t('support.bank.title')}</h3>
            <p className="payment-desc">{t('support.bank.desc')}</p>
            <dl className="bank-details">
              <dt>Account Name</dt>
              <dd>{ct(org.payments.bank.name)}</dd>
              <dt>Bank</dt>
              <dd>{ct(org.payments.bank.bankName)}</dd>
              <dt>Account No.</dt>
              <dd>{org.payments.bank.accountNo}</dd>
              <dt>Branch</dt>
              <dd>{ct(org.payments.bank.branch)}</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <section className="section">
        <SectionHeading
          eyebrow={t('support.where.eyebrow')}
          title={t('support.where.title')}
          center
        />
        <div className="fund-areas">
          {fundAreas.map((area, i) => (
            <div key={i} className="fund-area">
              <span className="fund-area-icon">{area.icon}</span>
              <span className="fund-area-label">{ct(area.label)}</span>
              <div className="fund-area-bar">
                <div
                  className="fund-area-fill"
                  style={{ width: `${area.pct}%` }}
                />
              </div>
              <span className="fund-area-pct">{area.pct}%</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Promise */}
      <section className="section">
        <div className="trust-section">
          <span className="trust-icon">🤝</span>
          <h3>{t('support.trust.title')}</h3>
          <p>{t('support.trust.text')}</p>
        </div>
      </section>
    </div>
  )
}
