import { Link } from 'react-router-dom'
import { org, impact } from '../data/content.js'
import { posts } from '../data/posts.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useCountUp } from '../utils/useCountUp.js'
import SectionHeading from '../components/SectionHeading.jsx'
import PhotoStrip from '../components/PhotoStrip.jsx'

function ImpactStat({ icon, value, suffix, label }) {
  const n = useCountUp(value)
  return (
    <div className="impact-stat">
      <span className="impact-icon">{icon}</span>
      <span className="impact-value">
        {Math.round(n).toLocaleString('en-IN')}
        {suffix}
      </span>
      <span className="impact-label">{label}</span>
    </div>
  )
}

function TotalBadge({ value, label }) {
  const n = useCountUp(value)
  return (
    <div className="hero-total">
      <span className="hero-total-amount">
        ৳{Math.round(n).toLocaleString('en-IN')}+
      </span>
      <span className="hero-total-label">{label}</span>
    </div>
  )
}

export default function Home() {
  const { t, ct, lang } = useLanguage()

  const featured = posts.slice(0, 3)

  return (
    <div className="page">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src="/images/posts/main-banner.jpg" alt="" />
        </div>
        <div className="hero-content">
          <span className="badge">{t('home.badge')}</span>
          <h1 className="hero-title">
            {t('home.heroTitle1')}{' '}
            <span className="grad-text">{t('home.heroTitle2')}</span>
          </h1>
          <p className="hero-lead">{ct(org.mission)}</p>
          <div className="hero-actions">
            <Link to="/support-us" className="btn btn-primary">
              {t('home.heroCta1')}
            </Link>
            <Link to="/our-work" className="btn btn-ghost">
              {t('home.heroCta2')}
            </Link>
          </div>
          <TotalBadge
            value={org.totalDistributed}
            label={t('home.totalDistributed')}
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <SectionHeading
          eyebrow={t('home.whoWeAre.eyebrow')}
          title={t('home.whoWeAre.title')}
          subtitle={t('home.whoWeAre.subtitle')}
          center
        />
        <div className="about-cards">
          <div className="glass about-card">
            <span className="about-emoji">🌍</span>
            <h3>{t('home.collect.title')}</h3>
            <p>{t('home.collect.desc')}</p>
          </div>
          <div className="glass about-card">
            <span className="about-emoji">🤝</span>
            <h3>{t('home.deliver.title')}</h3>
            <p>{t('home.deliver.desc')}</p>
          </div>
          <div className="glass about-card">
            <span className="about-emoji">📊</span>
            <h3>{t('home.report.title')}</h3>
            <p>{t('home.report.desc')}</p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="section">
        <SectionHeading
          eyebrow={t('home.impact.eyebrow')}
          title={t('home.impact.title')}
          center
        />
        <div className="impact-grid">
          {impact.map((it) => (
            <ImpactStat key={ct(it.label)} {...it} label={ct(it.label)} />
          ))}
        </div>
      </section>

      {/* Featured Stories */}
      <section className="section">
        <SectionHeading
          eyebrow={t('home.stories.eyebrow')}
          title={t('home.stories.title')}
          subtitle={t('home.stories.subtitle')}
        />
        <div className="story-grid">
          {featured.map((s) => {
            const summary = ct(s.caption).split(' ').slice(0, 15).join(' ') + '...';
            return (
              <Link to={`/our-work#post-${s.id}`} key={s.id} className="story-card-link">
                <article className="glass story-card">
                  <div className="story-cover">
                    <img src={s.cover} alt="" loading="lazy" />
                  </div>
                  <div className="story-body">
                    <span className="story-meta">
                      📅 {s.date}
                    </span>
                    <h3>{lang === 'bn' ? 'আমাদের উদ্যোগ' : 'Our Initiative'}</h3>
                    <p>{summary}</p>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
        <div className="center-btn">
          <Link to="/our-work" className="btn btn-ghost">
            {t('home.stories.cta')}
          </Link>
        </div>
      </section>

      {/* Photo Strip */}
      <PhotoStrip />

      {/* CTA Band */}
      <section className="section">
        <div className="cta-band">
          <h2>{t('home.cta.title')}</h2>
          <p>{t('home.cta.desc')}</p>
          <div className="hero-actions">
            <Link to="/support-us" className="btn btn-primary">
              {t('home.cta.btn1')}
            </Link>
            <Link to="/contact" className="btn btn-ghost">
              {t('home.cta.btn2')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
