import { Link } from 'react-router-dom'
import { org, impact } from '../data/content.js'
import { posts } from '../data/posts.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useCountUp } from '../utils/useCountUp.js'
import SectionHeading from '../components/SectionHeading.jsx'
import PhotoStrip from '../components/PhotoStrip.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  HeartHandshakeIcon,
  StethoscopeIcon,
  ShoppingBagIcon,
  RingIcon,
  DropIcon,
  FootballIcon,
  GlobeIcon,
  ShieldCheckIcon,
  CalendarIcon,
  ArrowRightIcon,
  SparklesIcon,
  MapPinIcon
} from '../components/Icons.jsx'

// Map impact icons to crisp SVGs
function getImpactIcon(icon) {
  switch (icon) {
    case '🩺': return <StethoscopeIcon className="impact-svg-icon" />
    case '🛒': return <ShoppingBagIcon className="impact-svg-icon" />
    case '💍': return <RingIcon className="impact-svg-icon" />
    case '🩸': return <DropIcon className="impact-svg-icon" />
    case '⚽': return <FootballIcon className="impact-svg-icon" />
    case '🌍': return <GlobeIcon className="impact-svg-icon" />
    default: return <SparklesIcon className="impact-svg-icon" />
  }
}

function ImpactStat({ icon, value, suffix, label }) {
  const n = useCountUp(value)
  return (
    <div className="impact-stat glass">
      <div className="impact-icon-wrap">
        {getImpactIcon(icon)}
      </div>
      <div className="impact-stat-content">
        <span className="impact-value">
          {Math.round(n).toLocaleString('en-IN')}
          {suffix}
        </span>
        <span className="impact-label">{label}</span>
      </div>
    </div>
  )
}

function TotalBadge({ value, label, subtitle }) {
  const n = useCountUp(value)
  return (
    <div className="hero-total-card glass">
      <div className="hero-total-header">
        <span className="live-status-pill">
          <span className="live-status-dot" />
          <span>{subtitle}</span>
        </span>
      </div>
      <div className="hero-total-body">
        <span className="hero-total-amount">
          ৳{Math.round(n).toLocaleString('en-IN')}+
        </span>
        <span className="hero-total-label">{label}</span>
      </div>
    </div>
  )
}

export default function Home() {
  const { t, ct, lang } = useLanguage()
  const featured = posts.slice(0, 3)

  return (
    <div className="page page-home">
      {/* ── HERO SECTION ── */}
      <section className="hero">
        <div className="hero-bg">
          <img
            src="/images/posts/main-banner.jpg"
            alt="Service for Humanity Relief Distribution"
            loading="eager"
            fetchPriority="high"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content">
          <Reveal delay={0.1}>
            <div className="hero-badge-wrap">
              <span className="badge badge-warm">
                <MapPinIcon size={14} />
                <span>{ct({ en: 'Daganbhuiyan, Feni · Grassroots Initiative', bn: 'দাগনভূঁইয়া, ফেনী · সরাসরি জনকল্যাণমূলক উদ্যোগ' })}</span>
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="hero-title">
              {t('home.heroTitle1')}{' '}
              <span className="grad-text">{t('home.heroTitle2')}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="hero-lead">{ct(org.mission)}</p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="hero-actions">
              <Link to="/support-us" className="btn btn-primary">
                <HeartHandshakeIcon size={18} />
                <span>{t('home.heroCta1')}</span>
              </Link>
              <Link to="/our-work" className="btn btn-ghost">
                <span>{t('home.heroCta2')}</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.65}>
            <div className="hero-stats-band">
              <TotalBadge
                value={org.totalDistributed}
                label={t('home.totalDistributed')}
                subtitle={ct({ en: 'Direct Aid Delivered', bn: 'সরাসরি বিতরণকৃত সাহায্য' })}
              />

              <div className="hero-quick-trust glass">
                <div className="trust-item">
                  <ShieldCheckIcon className="trust-icon" />
                  <div>
                    <strong>100%</strong>
                    <span>{ct({ en: 'Volunteer-Run', bn: 'স্বেচ্ছাসেবী পরিচালিত' })}</span>
                  </div>
                </div>
                <div className="trust-divider" />
                <div className="trust-item">
                  <GlobeIcon className="trust-icon" />
                  <div>
                    <strong>8+</strong>
                    <span>{ct({ en: 'Donor Countries', bn: 'প্রবাসী দাতা দেশ' })}</span>
                  </div>
                </div>
                <div className="trust-divider" />
                <div className="trust-item">
                  <HeartHandshakeIcon className="trust-icon" />
                  <div>
                    <strong>0%</strong>
                    <span>{ct({ en: 'Admin Deduction', bn: 'প্রশাসনিক খরচ শূন্য' })}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WHO WE ARE / PILLARS ── */}
      <section className="section section-who-we-are">
        <Reveal>
          <SectionHeading
            eyebrow={t('home.whoWeAre.eyebrow')}
            title={t('home.whoWeAre.title')}
            subtitle={t('home.whoWeAre.subtitle')}
            center
          />
        </Reveal>

        <div className="about-cards">
          <Reveal delay={0.1}>
            <div className="glass about-card">
              <div className="about-card-icon-wrap emerald">
                <GlobeIcon className="about-svg-icon" />
                <span className="card-step-num">01</span>
              </div>
              <h3>{t('home.collect.title')}</h3>
              <p>{t('home.collect.desc')}</p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="glass about-card">
              <div className="about-card-icon-wrap warm">
                <HeartHandshakeIcon className="about-svg-icon" />
                <span className="card-step-num">02</span>
              </div>
              <h3>{t('home.deliver.title')}</h3>
              <p>{t('home.deliver.desc')}</p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="glass about-card">
              <div className="about-card-icon-wrap blue">
                <ShieldCheckIcon className="about-svg-icon" />
                <span className="card-step-num">03</span>
              </div>
              <h3>{t('home.report.title')}</h3>
              <p>{t('home.report.desc')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── IMPACT NUMBERS ── */}
      <section className="section section-impact">
        <Reveal>
          <SectionHeading
            eyebrow={t('home.impact.eyebrow')}
            title={t('home.impact.title')}
            subtitle={ct({
              en: 'Every single taka collected is accounted for and delivered with full transparency.',
              bn: 'সংগৃহীত প্রতিটি টাকার পূর্ণাঙ্গ স্বচ্ছতা ও সরাসরি প্রাপকের কাছে হস্তান্তরের প্রমাণ রয়েছে।',
            })}
            center
          />
        </Reveal>

        <div className="impact-grid">
          {impact.map((it, i) => (
            <Reveal key={ct(it.label)} delay={i * 0.08}>
              <ImpactStat {...it} label={ct(it.label)} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FEATURED STORIES / FIELD DISPATCHES ── */}
      <section className="section section-stories">
        <Reveal>
          <div className="section-header-row">
            <SectionHeading
              eyebrow={t('home.stories.eyebrow')}
              title={t('home.stories.title')}
              subtitle={t('home.stories.subtitle')}
            />
            <Link to="/our-work" className="section-header-link">
              <span>{t('home.stories.cta')}</span>
              <ArrowRightIcon size={14} />
            </Link>
          </div>
        </Reveal>

        <div className="story-grid">
          {featured.map((s, idx) => {
            const summary = ct(s.caption).split(' ').slice(0, 18).join(' ') + '...'
            return (
              <Reveal key={s.id} delay={idx * 0.12}>
                <Link to={`/our-work#post-${s.id}`} className="story-card-link">
                  <article className="glass story-card">
                    <div className="story-cover">
                      <img src={s.cover} alt={ct(s.caption).slice(0, 40)} loading="lazy" />
                      <div className="story-badge-category">
                        {s.category ? s.category.toUpperCase() : 'COMMUNITY'}
                      </div>
                    </div>
                    <div className="story-body">
                      <div className="story-meta">
                        <CalendarIcon size={14} className="text-amber-400" />
                        <span>{s.date}</span>
                      </div>
                      <h3>{lang === 'bn' ? 'আমাদের উদ্যোগ' : 'Field Initiative'}</h3>
                      <p>{summary}</p>
                      <div className="story-read-link">
                        <span>{lang === 'bn' ? 'বিস্তারিত পড়ুন' : 'Read details'}</span>
                        <ArrowRightIcon size={14} />
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="center-btn">
            <Link to="/our-work" className="btn btn-ghost">
              <span>{t('home.stories.cta')}</span>
              <ArrowRightIcon size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── PHOTO STRIP MOSAIC ── */}
      <section className="section-photo-strip-wrap">
        <div className="photo-strip-header">
          <span className="badge">
            <SparklesIcon size={14} />
            <span>{ct({ en: 'Moments from the Ground', bn: 'মাঠপর্যায়ের কিছু মুহূর্ত' })}</span>
          </span>
          <Link to="/gallery" className="photo-strip-link">
            <span>{ct({ en: 'Explore Complete Gallery', bn: 'সম্পূর্ণ গ্যালারি দেখুন' })}</span>
            <ArrowRightIcon size={14} />
          </Link>
        </div>
        <PhotoStrip />
      </section>

      {/* ── CTA BAND ── */}
      <section className="section section-cta">
        <Reveal>
          <div className="cta-band glass">
            <div className="cta-band-content">
              <span className="badge badge-warm">
                <HeartHandshakeIcon size={14} />
                <span>{ct({ en: 'Join Our Mission', bn: 'আমাদের সাথে যুক্ত হোন' })}</span>
              </span>
              <h2>{t('home.cta.title')}</h2>
              <p>{t('home.cta.desc')}</p>
              <div className="hero-actions">
                <Link to="/support-us" className="btn btn-primary">
                  <HeartHandshakeIcon size={18} />
                  <span>{t('home.cta.btn1')}</span>
                </Link>
                <Link to="/contact" className="btn btn-ghost">
                  <span>{t('home.cta.btn2')}</span>
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
