// Accessible inline SVG icon library for Service for Humanity
// Engineered with explicit intrinsic width, height, and inline CSS styles to guarantee consistent sizing

const createIconStyle = (size, style) => ({
  width: `${size}px`,
  height: `${size}px`,
  minWidth: `${size}px`,
  minHeight: `${size}px`,
  maxWidth: `${size}px`,
  maxHeight: `${size}px`,
  flexShrink: 0,
  display: 'inline-block',
  verticalAlign: 'middle',
  ...style,
})

export function HeartHandshakeIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

export function StethoscopeIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14v1a4 4 0 01-4 4H9a4 4 0 01-4-4v-1M5 5v5a3 3 0 006 0V5m4 0v5a3 3 0 006 0V5m-5 14v2m0 0a2 2 0 104 0 2 2 0 00-4 0z" />
    </svg>
  )
}

export function ShoppingBagIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  )
}

export function RingIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="14" r="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l3-3 3 3-3 2-3-2z" />
    </svg>
  )
}

export function DropIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
  )
}

export function FootballIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 7l3 2.5v3.5L12 15.5 9 13V9.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 7V3M15 9.5l3.5-1.5M15 13l3.5 2M12 15.5V21M9 13l-3.5 2M9 9.5L5.5 8" />
    </svg>
  )
}

export function GlobeIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 000 18M12 3a14 14 0 010 18" />
    </svg>
  )
}

export function ShieldCheckIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

export function PhoneIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

export function MailIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

export function MapPinIcon({ size = 18, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export function FacebookIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

export function CopyIcon({ size = 16, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  )
}

export function CheckIcon({ size = 16, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function CalendarIcon({ size = 16, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  )
}

export function ArrowRightIcon({ size = 16, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  )
}

export function BuildingBankIcon({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
    </svg>
  )
}

export function UsersIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

export function SparklesIcon({ size = 18, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

export function SearchIcon({ size = 18, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

export function ZapIcon({ size = 20, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

export function ChevronLeftIcon({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  )
}

export function ChevronRightIcon({ size = 22, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function MenuIcon({ size = 24, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function CloseIcon({ size = 24, className = '', style, ...props }) {
  return (
    <svg width={size} height={size} style={createIconStyle(size, style)} className={`icon-svg ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
