import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Reveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.8,
  className = '',
  style = {},
}) {
  const [ref, isVisible] = useScrollReveal()

  const transforms = {
    up: 'translateY(40px)',
    down: 'translateY(-40px)',
    left: 'translateX(-40px)',
    right: 'translateX(40px)',
    none: 'none',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : transforms[direction] || transforms.up,
        transition: `opacity ${duration}s var(--ease) ${delay}s, transform ${duration}s var(--ease) ${delay}s`,
        willChange: 'opacity, transform',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
