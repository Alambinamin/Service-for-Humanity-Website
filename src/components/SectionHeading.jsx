export default function SectionHeading({ eyebrow, title, subtitle, center }) {
  return (
    <div className={`section-heading ${center ? 'center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  )
}
