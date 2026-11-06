import { values, timeline } from '../data/content.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import {
  ShieldCheckIcon,
  UsersIcon,
  HeartHandshakeIcon,
  ZapIcon,
  GlobeIcon,
  SparklesIcon,
  ArrowRightIcon,
  CalendarIcon
} from '../components/Icons.jsx'

function getValueIcon(icon) {
  switch (icon) {
    case '🔍': return <ShieldCheckIcon className="value-svg-icon" />
    case '🤝': return <UsersIcon className="value-svg-icon" />
    case '💜': return <HeartHandshakeIcon className="value-svg-icon" />
    case '⚡': return <ZapIcon className="value-svg-icon" />
    default: return <SparklesIcon className="value-svg-icon" />
  }
}

export default function About() {
  const { t, ct } = useLanguage()

  return (
    <div className="page page-about">
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-07-21.png" alt="" loading="eager" />
          <div className="hero-overlay" />
        </div>
        <div className="page-hero-content">
          <Reveal delay={0.1}>
            <span className="badge">
              <UsersIcon size={14} />
              <span>{t('about.badge')}</span>
            </span>
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

      {/* ── Origin Story ── */}
      <section className="section section-origin">
        <Reveal>
          <SectionHeading
            eyebrow={t('about.origin.eyebrow')}
            title={t('about.origin.title')}
            center
          />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="origin-content glass">
            <p className="origin-lead">{t('about.origin.p1')}</p>
            <div className="origin-divider" />
            <p className="origin-body">{t('about.origin.p2')}</p>
          </div>
        </Reveal>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="section section-vm">
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
              <div className="vm-card-header">
                <span className="vm-tag-pill vision">{t('about.vision.label')}</span>
              </div>
              <p>{t('about.vision.text')}</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="glass vm-card">
              <div className="vm-card-header">
                <span className="vm-tag-pill mission">{t('about.mission.label')}</span>
              </div>
              <p>{t('about.mission.text')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section section-values">
        <Reveal>
          <SectionHeading
            eyebrow={t('about.values.eyebrow')}
            title={t('about.values.title')}
            subtitle={ct({
              en: 'Four foundational commitments that guide every decision and relief dispatch.',
              bn: 'আমাদের প্রতিটি পদক্ষেপ ও সিদ্ধান্ত পরিচালনার চারটি মৌলিক অঙ্গীকার।',
            })}
            center
          />
        </Reveal>
        <div className="values-grid">
          {values.map((v, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass value-card">
                <div className="value-icon-wrap">
                  {getValueIcon(v.icon)}
                </div>
                <h3>{ct(v.title)}</h3>
                <p>{ct(v.desc)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="section section-how-it-works">
        <Reveal>
          <SectionHeading
            eyebrow={t('about.howWeWork.eyebrow')}
            title={t('about.howWeWork.title')}
            subtitle={ct({
              en: 'From international collection to direct doorstep delivery with zero intermediaries.',
              bn: 'আন্তর্জাতিক অনুদান সংগ্রহ থেকে মধ্যস্বত্বভোগী ছাড়া সরাসরি প্রাপকের হাতে পৌঁছানো পর্যন্ত।',
            })}
            center
          />
        </Reveal>
        <div className="flow-steps">
          <Reveal delay={0.1}>
            <div className="glass flow-step">
              <div className="flow-step-top">
                <span className="flow-number">01</span>
                <GlobeIcon className="flow-step-svg" />
              </div>
              <h3>{t('home.collect.title')}</h3>
              <p>{t('home.collect.desc')}</p>
              <div className="flow-step-connector">
                <ArrowRightIcon className="flow-arrow-svg" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="glass flow-step">
              <div className="flow-step-top">
                <span className="flow-number">02</span>
                <HeartHandshakeIcon className="flow-step-svg" />
              </div>
              <h3>{t('home.deliver.title')}</h3>
              <p>{t('home.deliver.desc')}</p>
              <div className="flow-step-connector">
                <ArrowRightIcon className="flow-arrow-svg" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="glass flow-step">
              <div className="flow-step-top">
                <span className="flow-number">03</span>
                <ShieldCheckIcon className="flow-step-svg" />
              </div>
              <h3>{t('home.report.title')}</h3>
              <p>{t('home.report.desc')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section section-timeline">
        <Reveal>
          <SectionHeading
            eyebrow={t('about.timeline.eyebrow')}
            title={t('about.timeline.title')}
            subtitle={ct({
              en: 'Our evolutionary path of service in Daganbhuiyan, Feni since 2019.',
              bn: '২০১৯ সাল থেকে দাগনভূঁইয়া, ফেনীতে আমাদের সেবামূলক পথচলার ধারাবাহিক ইতিহাস।',
            })}
            center
          />
        </Reveal>
        <div className="timeline-container">
          <div className="timeline-spine" />
          <div className="timeline-items">
            {timeline.map((item, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className="timeline-item glass">
                  <div className="timeline-node">
                    <span className="timeline-dot-inner" />
                  </div>
                  <div className="timeline-year-badge">
                    <CalendarIcon size={14} />
                    <span>{item.year}</span>
                  </div>
                  <h3>{ct(item.title)}</h3>
                  <p>{ct(item.desc)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
