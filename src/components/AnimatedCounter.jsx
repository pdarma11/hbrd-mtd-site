import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, prefix = '', suffix = '', duration = 2000 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  // Parse the numeric part from value like "+250", "98%", "5 ans"
  const numericMatch = String(value).match(/[\d.]+/)
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0
  const isFloat = String(numericValue).includes('.')

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = eased * numericValue
      setDisplay(isFloat ? current.toFixed(1) : Math.floor(current))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(isFloat ? numericValue.toFixed(1) : numericValue)
    }
    requestAnimationFrame(tick)
  }, [isInView, numericValue, duration, isFloat])

  // Reconstruct the value string with animation
  const formatted = String(value).replace(
    numericMatch ? numericMatch[0] : '',
    String(display)
  )

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
