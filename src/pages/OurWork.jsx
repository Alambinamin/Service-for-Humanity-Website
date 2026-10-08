import { useState } from 'react'
import { posts, moreWork } from '../data/posts.js'
import { useLanguage } from '../context/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ImageLightbox from '../components/ImageLightbox.jsx'

const categories = [
  { key: 'all', tKey: 'work.filter.all' },
  { key: 'medical', tKey: 'work.filter.medical' },
  { key: 'food', tKey: 'work.filter.food' },
  { key: 'sports', tKey: 'work.filter.sports' },
  { key: 'crisis', tKey: 'work.filter.crisis' },
]

function formatDate(dateStr, lang) {
  const d = new Date(dateStr + 'T00:00:00')
  if (lang === 'bn') {
    const months = [
      'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
      'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর',
    ]
    const bnDigits = '০১২৩৪৫৬৭৮৯'
    const toBn = (n) => String(n).replace(/\d/g, (d) => bnDigits[d])
    return `${toBn(d.getDate())} ${months[d.getMonth()]}, ${toBn(d.getFullYear())}`
  }
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function PostCard({ post, lang, ct, onImageClick }) {
  const [expanded, setExpanded] = useState(false)
  const captionText = ct(post.caption)
  const isLong = captionText.length > 200

  return (
    <article id={`post-${post.id}`} className="glass post-card">
      {/* Date */}
      <div className="post-date">
        <span className="post-date-icon">📅</span>
        {formatDate(post.date, lang)}
      </div>

      {/* Image Grid */}
      <div className={`post-images post-images-${Math.min(post.images.length, 4)}`}>
        {post.images.slice(0, 4).map((img, i) => (
          <div
            key={img}
            className="post-image-item"
            onClick={() => onImageClick(post.images, i)}
          >
            <img src={img} alt="" loading="lazy" />
            {i === 3 && post.images.length > 4 && (
              <div className="post-image-more">
                +{post.images.length - 4}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Caption */}
      <div className="post-caption">
        <p className={!expanded && isLong ? 'post-caption-truncated' : ''}>
          {captionText}
        </p>
        {isLong && (
          <button
            className="post-read-more"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded
              ? lang === 'bn' ? 'সংক্ষেপে দেখুন' : 'Show less'
              : lang === 'bn' ? 'আরও পড়ুন' : 'Read more'}
          </button>
        )}
      </div>
    </article>
  )
}

function MoreWorkItem({ item, onImageClick }) {
  return (
    <div className="more-work-item">
      {item.images.slice(0, 1).map((img) => (
        <div
          key={img}
          className="more-work-image"
          onClick={() => onImageClick(item.images, 0)}
        >
          <img src={img} alt="" loading="lazy" />
          {item.images.length > 1 && (
            <div className="more-work-badge">+{item.images.length - 1}</div>
          )}
        </div>
      ))}
      <span className="more-work-date">
        {formatDate(item.date, 'en')}
      </span>
    </div>
  )
}

export default function OurWork() {
  const [filter, setFilter] = useState('all')
  const { t, ct, lang } = useLanguage()
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (images, index) => setLightbox({ images, index })
  const closeLightbox = () => setLightbox(null)

  const filteredPosts =
    filter === 'all'
      ? posts
      : posts.filter((p) => p.category === filter)

  const filteredMore =
    filter === 'all'
      ? moreWork
      : moreWork.filter((m) => m.category === filter)

  return (
    <div className="page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/images/posts/2026-12-16.jpg" alt="" loading="eager" />
        </div>
        <div className="page-hero-content">
          <span className="badge">{t('work.badge')}</span>
          <h1 className="page-title">
            {t('work.heroTitle1')}{' '}
            <span className="grad-text">{t('work.heroTitle2')}</span>
          </h1>
          <p className="page-lead">{t('work.heroLead')}</p>
        </div>
      </section>

      {/* Post Feed */}
      <section className="section">
        <SectionHeading
          eyebrow={t('work.stories.eyebrow')}
          title={t('work.stories.title')}
        />

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((c) => (
            <button
              key={c.key}
              className={`filter-tab ${filter === c.key ? 'active' : ''}`}
              onClick={() => setFilter(c.key)}
            >
              {t(c.tKey)}
            </button>
          ))}
        </div>

        {/* Post Cards */}
        <div className="post-feed">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              lang={lang}
              ct={ct}
              onImageClick={openLightbox}
            />
          ))}
        </div>

        {/* More Work Grid */}
        {filteredMore.length > 0 && (
          <>
            <div className="more-work-divider">
              <SectionHeading
                eyebrow={lang === 'bn' ? 'আরও কাজ' : 'More Work'}
                title={lang === 'bn' ? 'আরও কিছু কাজের ছবি' : 'More moments from our work'}
              />
            </div>
            <div className="more-work-grid">
              {filteredMore.map((item) => (
                <MoreWorkItem
                  key={item.id}
                  item={item}
                  onImageClick={openLightbox}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Lightbox */}
      {lightbox && (
        <ImageLightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}
    </div>
  )
}
