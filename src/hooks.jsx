import { useEffect, useRef, useState } from 'react'

/* Adds `is-visible` once the element scrolls into view, honouring a
   per-element delay (ms) exactly like the original data-reveal design. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* Counts up to `to` when scrolled into view. */
export function CountUp({ to, prefix = '', suffix = '', decimals = 0, duration = 1500, style, className }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const step = (t) => {
        const p = Math.min((t - start) / duration, 1)
        setValue(to * p)
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    if (typeof IntersectionObserver === 'undefined') {
      run()
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run()
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <div ref={ref} className={className} style={style}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </div>
  )
}

/* Translates an element vertically as the page scrolls (parallax). */
export function useParallax(factor = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false
    const apply = () => {
      const y = window.scrollY
      el.style.transform = `translate3d(0, ${(y * factor).toFixed(1)}px, 0)`
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(apply)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    apply()
    return () => window.removeEventListener('scroll', onScroll)
  }, [factor])
  return ref
}

/* Copies the support email to the clipboard and shows a brief toast,
   so the CTA still gives visible feedback if no mail app is registered. */
let toastTimer
export function showEmailToast(message, email) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(email).catch(() => {})
  }
  let toast = document.getElementById('email-toast')
  if (!toast) {
    toast = document.createElement('div')
    toast.id = 'email-toast'
    toast.className = 'email-toast'
    document.body.appendChild(toast)
  }
  toast.textContent = message
  toast.classList.add('is-visible')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 3500)
}

/* Adds a shadow to the sticky header once the page is scrolled. */
export function useScrolled(threshold = 10) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}
