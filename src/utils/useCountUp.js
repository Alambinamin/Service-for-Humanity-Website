import { useEffect, useRef, useState } from 'react'

// Smoothly animates a number from 0 up to `target` using an ease-out curve.
// Returns the current animated value.
export function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const start = performance.now()
    const from = 0
    const to = Number(target) || 0

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setValue(from + (to - from) * easeOutCubic(progress))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration])

  return value
}
