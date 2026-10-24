import { values, timeline } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  const { t, ct } = useLanguage()

  return (
    <div className="page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-07-21.png" alt="" loading="eager" />
        </div>
        <div className="page-hero-content">
          <Reveal delay={0.1}>
            <span className="badge">{t('about.badge')}</span>
          </Reveal>
          <Reveal delay={0.25}>
            <h1 className="page-title">
              {t('about.heroTitle1')}{' '}
              <span className="grad-text">{t('about.heroTitle2')}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="page-lead">{t('about.heroLead')}</p>
          </Reveal>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={t('about.origin.eyebrow')}
            title={t('about.origin.title')}
            center
          />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="origin-content">
            <p>{t('about.origin.p1')}</p>
            <p>{t('about.origin.p2')}</p>
          </div>
        </Reveal>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={t('about.vision.eyebrow')}
            title={t('about.vision.title')}
            center
          />
        </Reveal>
        <div className="vm-grid">
          <Reveal delay={0.15}>
            <div className="glass vm-card">
              <span className="vm-label">{t('about.vision.label')}</span>
              <p>{t('about.vision.text')}</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="glass vm-card">
              <span className="vm-label">{t('about.mission.label')}</span>
              <p>{t('about.mission.text')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={t('about.values.eyebrow')}
            title={t('about.values.title')}
            center
          />
        </Reveal>
        <div className="values-grid">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{ct(v.title)}</h3>
                <p>{ct(v.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={t('about.howWeWork.eyebrow')}
            title={t('about.howWeWork.title')}
            center
          />
        </Reveal>
        <div className="flow-steps">
          <Reveal delay={0.1}>
            <div className="glass flow-step">
              <span className="flow-number">1</span>
              <h3>{t('home.collect.title')}</h3>
              <p>{t('home.collect.desc')}</p>
              <span className="flow-arrow">→</span>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="glass flow-step">
              <span className="flow-number">2</span>
              <h3>{t('home.deliver.title')}</h3>
              <p>{t('home.deliver.desc')}</p>
              <span className="flow-arrow">→</span>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="glass flow-step">
              <span className="flow-number">3</span>
              <h3>{t('home.report.title')}</h3>
              <p>{t('home.report.desc')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={t('about.timeline.eyebrow')}
            title={t('about.timeline.title')}
            center
          />
        </Reveal>
        <div className="timeline">
          {timeline.map((item, i) => (
            <Reveal key={i} delay={i * 0.15}>
              <div className="timeline-item">
                <span className="timeline-dot" />
                <span className="timeline-year">{item.year}</span>
                <h3>{ct(item.title)}</h3>
                <p>{ct(item.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
