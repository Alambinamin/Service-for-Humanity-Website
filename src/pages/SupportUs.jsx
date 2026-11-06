import { useState } from 'react'
import { org, fundAreas } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useCountUp } from '../utils/useCountUp.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  HeartHandshakeIcon,
  CopyIcon,
  CheckIcon,
  ShieldCheckIcon,
  BuildingBankIcon,
  StethoscopeIcon,
  ShoppingBagIcon,
  RingIcon,
  FootballIcon,
  DropIcon,
  ZapIcon
} from '../components/Icons.jsx'

function getFundIcon(icon) {
  switch (icon) {
    case '🩺': return <StethoscopeIcon className="fund-svg-icon" />
    case '🛒': return <ShoppingBagIcon className="fund-svg-icon" />
    case '💍': return <RingIcon className="fund-svg-icon" />
    case '⚽': return <FootballIcon className="fund-svg-icon" />
    case '🩸': return <DropIcon className="fund-svg-icon" />
    default: return <ZapIcon className="fund-svg-icon" />
  }
}

function TotalCounter({ value, label }) {
  const n = useCountUp(value)
  return (
    <div className="total-counter-card glass">
      <div className="total-counter-pill">
        <span className="live-status-dot" />
        <span>100% Direct Impact</span>
      </div>
      <span className="total-amount">৳{Math.round(n).toLocaleString('en-IN')}+</span>
      <span className="total-label">{label}</span>
    </div>
  )
}

export default function SupportUs() {
  const { t, ct, lang } = useLanguage()
  const [copiedField, setCopiedField] = useState(null)
  const [selectedTier, setSelectedTier] = useState(1200)

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2500)
    })
  }

  const tiers = [
    {
      amount: 500,
      label: '৳500',
      impact: {
        en: 'Covers essential emergency prescription medicines for 1 patient.',
        bn: '১ জন রোগীর জরুরি প্রেসক্রিপশনের প্রয়োজনীয় ওষুধের খরচ নির্বাহ করে।',
      },
    },
    {
      amount: 1200,
      label: '৳1,200',
      impact: {
        en: 'Funds 1 full Ramadan/Eid grocery pack for a destitute family.',
        bn: '১টি দরিদ্র পরিবারের জন্য ১ মাসের পূর্ণাঙ্গ রমজান/ঈদ খাদ্য সামগ্রী নিশ্চিত করে।',
      },
      recommended: true,
    },
    {
      amount: 3500,
      label: '৳3,500',
      impact: {
        en: 'Supports critical diagnostic tests & emergency hospital relief.',
        bn: 'গুরুতর রোগীর জরুরি টেস্ট ও হাসপাতালে চিকিৎসার ব্যবস্থা করতে সাহায্য করে।',
      },
    },
    {
      amount: 10000,
      label: '৳10,000+',
      impact: {
        en: 'Major contribution towards marriage aid or crisis recovery grants.',
        bn: 'অসহায় বোনের বিবাহ অনুদান বা বড় দুর্যোগ-সংকটে সরাসরি আর্থিক অনুদান।',
      },
    },
  ]

  return (
    <div className="page page-support">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-03-01.jpg" alt="" loading="eager" />
          <div className="hero-overlay" />
        </div>
        <div className="page-hero-content">
          <Reveal delay={0.1}>
            <span className="badge badge-warm">
              <HeartHandshakeIcon className="w-3.5 h-3.5" />
              <span>{t('support.badge')}</span>
            </span>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="page-title">
              {t('support.heroTitle1')}{' '}
              <span className="grad-text">{t('support.heroTitle2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="page-lead">{t('support.heroLead')}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Total Distributed Counter ── */}
      <div className="support-total-section">
        <Reveal>
          <TotalCounter
            value={org.totalDistributed}
            label={t('support.total.label')}
          />
        </Reveal>
      </div>

      {/* ── Interactive Giving Impact Tiers ── */}
      <section className="section section-giving-tiers">
        <Reveal>
          <SectionHeading
            eyebrow={ct({ en: 'Direct Impact Calculator', bn: 'সহায়তার পরিমাণ ও প্রভাব' })}
            title={ct({ en: 'See How Every Taka Helps', bn: 'আপনার সামান্য অনুদানে কী সম্ভব?' })}
            subtitle={ct({
              en: 'Select an amount below to see the tangible change your contribution creates.',
              bn: 'নিচের যেকোনো একটি অনুদানের পরিমাণ নির্বাচন করে এর সুনির্দিষ্ট প্রভাব দেখুন।',
            })}
            center
          />
        </Reveal>

        <div className="giving-tiers-container glass">
          <div className="giving-tiers-grid">
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                className={`giving-tier-btn ${selectedTier === tier.amount ? 'active' : ''}`}
                onClick={() => setSelectedTier(tier.amount)}
              >
                {tier.recommended && (
                  <span className="tier-recommended-badge">
                    {lang === 'bn' ? 'জনপ্রিয়' : 'Most Popular'}
                  </span>
                )}
                <span className="tier-amount">{tier.label}</span>
              </button>
            ))}
          </div>

          <div className="giving-tier-result">
            <div className="tier-result-icon">
              <HeartHandshakeIcon size={24} className="text-amber-400" />
            </div>
            <div className="tier-result-text">
              <h4>{ct({ en: 'Your Impact:', bn: 'আপনার অনুদানের দৃশ্যমান প্রভাব:' })}</h4>
              <p>{ct(tiers.find((t) => t.amount === selectedTier)?.impact)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Payment Methods ── */}
      <section className="section section-payment-methods">
        <Reveal>
          <SectionHeading
            eyebrow={t('support.how.eyebrow')}
            title={t('support.how.title')}
            subtitle={ct({
              en: 'Official personal accounts managed directly by Service for Humanity coordinators in Daganbhuiyan, Feni.',
              bn: 'সার্ভিস ফর হিউম্যানিটি-এর দায়িত্বশীল প্রতিনিধিদের সরাসরি পরিচালিত পার্সোনাল একাউন্ট।',
            })}
            center
          />
        </Reveal>

        <div className="payment-grid">
          {/* bKash Card */}
          <Reveal delay={0.1}>
            <div className="glass payment-card bkash-card">
              <div className="payment-card-header">
                <div className="payment-brand-badge bkash">
                  <span className="brand-char">b</span>
                  <div className="brand-titles">
                    <h3>{t('support.bkash.title')}</h3>
                    <span className="payment-badge-type">{ct(org.payments.bkash.type)}</span>
                  </div>
                </div>
                <span className="payment-status-pill active">{ct({ en: 'Verified Active', bn: 'সক্রিয়' })}</span>
              </div>

              <p className="payment-desc">{t('support.bkash.desc')}</p>

              <div className="payment-box">
                <span className="payment-number">{org.payments.bkash.number}</span>
                <button
                  className={`copy-btn ${copiedField === 'bkash' ? 'copied' : ''}`}
                  onClick={() => copyToClipboard(org.payments.bkash.number, 'bkash')}
                  aria-label="Copy bKash Number"
                >
                  {copiedField === 'bkash' ? (
                    <>
                      <CheckIcon size={14} />
                      <span>{t('support.copied')}</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={14} />
                      <span>{t('support.copy')}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="payment-instruction">
                <span className="instruction-step">1</span>
                <span>{ct({ en: 'Use "Send Money" option in your bKash app', bn: 'বিকাশ অ্যাপে "Send Money" অপশন ব্যবহার করুন' })}</span>
              </div>
            </div>
          </Reveal>

          {/* Nagad Card */}
          <Reveal delay={0.25}>
            <div className="glass payment-card nagad-card">
              <div className="payment-card-header">
                <div className="payment-brand-badge nagad">
                  <span className="brand-char">ন</span>
                  <div className="brand-titles">
                    <h3>{t('support.nagad.title')}</h3>
                    <span className="payment-badge-type">{ct(org.payments.nagad.type)}</span>
                  </div>
                </div>
                <span className="payment-status-pill active">{ct({ en: 'Verified Active', bn: 'সক্রিয়' })}</span>
              </div>

              <p className="payment-desc">{t('support.nagad.desc')}</p>

              <div className="payment-box">
                <span className="payment-number">{org.payments.nagad.number}</span>
                <button
                  className={`copy-btn ${copiedField === 'nagad' ? 'copied' : ''}`}
                  onClick={() => copyToClipboard(org.payments.nagad.number, 'nagad')}
                  aria-label="Copy Nagad Number"
                >
                  {copiedField === 'nagad' ? (
                    <>
                      <CheckIcon size={14} />
                      <span>{t('support.copied')}</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={14} />
                      <span>{t('support.copy')}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="payment-instruction">
                <span className="instruction-step">1</span>
                <span>{ct({ en: 'Use "Send Money" option in your Nagad app', bn: 'নগদ অ্যাপে "Send Money" অপশন ব্যবহার করুন' })}</span>
              </div>
            </div>
          </Reveal>

          {/* Bank Transfer Card */}
          <Reveal delay={0.4}>
            <div className="glass payment-card bank-card">
              <div className="payment-card-header">
                <div className="payment-brand-badge bank">
                  <BuildingBankIcon size={24} />
                  <div className="brand-titles">
                    <h3>{t('support.bank.title')}</h3>
                    <span className="payment-badge-type">{ct({ en: 'Direct Wire', bn: 'ব্যাংক ট্রান্সফার' })}</span>
                  </div>
                </div>
              </div>

              <p className="payment-desc">{t('support.bank.desc')}</p>

              <div className="bank-details-grid">
                <div className="bank-row">
                  <span className="bank-label">Account Name:</span>
                  <span className="bank-val">{ct(org.payments.bank.name)}</span>
                </div>
                <div className="bank-row">
                  <span className="bank-label">Bank Name:</span>
                  <span className="bank-val">{ct(org.payments.bank.bankName)}</span>
                </div>
                <div className="bank-row highlight">
                  <span className="bank-label">Account No:</span>
                  <span className="bank-val font-mono">{org.payments.bank.accountNo}</span>
                </div>
                <div className="bank-row">
                  <span className="bank-label">Branch:</span>
                  <span className="bank-val">{ct(org.payments.bank.branch)}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Where Your Money Goes (Allocation) ── */}
      <section className="section section-fund-areas">
        <Reveal>
          <SectionHeading
            eyebrow={t('support.where.eyebrow')}
            title={t('support.where.title')}
            subtitle={ct({
              en: 'Transparent breakdown of fund utilization across all humanitarian campaigns.',
              bn: 'আমাদের সকল সেবামূলক কার্যক্রমে তহবিলের শতকরা বণ্টন চিত্র।',
            })}
            center
          />
        </Reveal>

        <div className="fund-areas-grid">
          {fundAreas.map((area, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="fund-area-card glass">
                <div className="fund-area-header">
                  <div className="fund-icon-wrap">
                    {getFundIcon(area.icon)}
                  </div>
                  <span className="fund-area-label">{ct(area.label)}</span>
                  <span className="fund-area-pct">{area.pct}%</span>
                </div>
                <div className="fund-area-bar">
                  <div
                    className="fund-area-fill"
                    style={{ width: `${area.pct}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Trust & Accountability Badges ── */}
      <section className="section section-trust">
        <Reveal>
          <div className="trust-card glass">
            <div className="trust-card-icon-wrap">
              <ShieldCheckIcon size={40} className="trust-big-icon" />
            </div>
            <div className="trust-card-body">
              <h3>{t('support.trust.title')}</h3>
              <p>{t('support.trust.text')}</p>
              <div className="trust-badges-row">
                <span className="trust-badge-pill">
                  <CheckIcon size={14} className="text-emerald-400" />
                  <span>100% Volunteer Driven</span>
                </span>
                <span className="trust-badge-pill">
                  <CheckIcon size={14} className="text-emerald-400" />
                  <span>0% Overhead Deductions</span>
                </span>
                <span className="trust-badge-pill">
                  <CheckIcon size={14} className="text-emerald-400" />
                  <span>In-Person Aid Delivery</span>
                </span>
                <span className="trust-badge-pill">
                  <CheckIcon size={14} className="text-emerald-400" />
                  <span>Public Photo Proof</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
