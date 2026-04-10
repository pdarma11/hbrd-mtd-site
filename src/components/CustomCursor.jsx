import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const dotRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const pos = useRef({ x: -100, y: -100 })
  const dotPos = useRef({ x: -100, y: -100 })
  const raf = useRef(null)

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const onDown = () => setIsClicking(true)
    const onUp = () => setIsClicking(false)

    const onEnter = (e) => {
      if (
        e.target.closest('a, button, [data-cursor-hover], input, textarea, select, label')
      ) {
        setIsHovering(true)
      }
    }
    const onLeave = (e) => {
      if (
        e.target.closest('a, button, [data-cursor-hover], input, textarea, select, label')
      ) {
        setIsHovering(false)
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    const lerp = (a, b, n) => a + (b - a) * n

    const animate = () => {
      dotPos.current.x = lerp(dotPos.current.x, pos.current.x, 0.12)
      dotPos.current.y = lerp(dotPos.current.y, pos.current.y, 0.12)

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x - 20}px, ${dotPos.current.y - 20}px)`
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  if ('ontouchstart' in window) return null

  return (
    <>
      {/* Small dot — follows cursor exactly */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--accent)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.15s, height 0.15s, opacity 0.15s',
          willChange: 'transform',
          opacity: isClicking ? 0.5 : 1,
        }}
      />
      {/* Large ring — follows with lag */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'var(--accent)' : 'rgba(255,255,255,0.25)'}`,
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform',
          transition: 'border-color 0.2s, transform 0.0s',
          transform: isHovering ? 'scale(1.4)' : 'scale(1)',
          background: isHovering ? 'rgba(245,197,24,0.06)' : 'transparent',
        }}
      />
    </>
  )
}
