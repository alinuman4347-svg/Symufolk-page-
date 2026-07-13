import { useEffect } from 'react'
import { packages, emailHref } from '../data.jsx'

function ListBlock({ title, items, mark = '✓', markColor = '#00E6A3' }) {
  return (
    <div style={{ marginTop: 26 }}>
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#00E6A3',
          marginBottom: 14,
        }}
      >
        {title}
      </div>
      {items.map((it, i) => (
        <div
          key={i}
          style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5, color: '#C4C4C4', marginBottom: 10 }}
        >
          <span style={{ color: markColor, flex: 'none', fontWeight: 700 }}>{mark}</span>
          <span>{it}</span>
        </div>
      ))}
    </div>
  )
}

function InfoBlock({ title, text }) {
  return (
    <div
      style={{
        marginTop: 26,
        padding: '16px 18px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: 14,
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8A8A8A', marginBottom: 7 }}>
        {title}
      </div>
      <div style={{ fontSize: 15, lineHeight: 1.55, color: '#D4D4D4' }}>{text}</div>
    </div>
  )
}

export default function PricingModal({ pkgKey, onClose }) {
  const open = Boolean(pkgKey)
  const p = pkgKey ? packages[pkgKey] : null

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        background: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity .3s ease',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          fontFamily: "'Hanken Grotesk', sans-serif",
          position: 'relative',
          width: '100%',
          maxWidth: 640,
          maxHeight: '88vh',
          overflowY: 'auto',
          background: '#181818',
          border: '1px solid rgba(0,230,163,0.28)',
          borderRadius: 24,
          padding: '40px 38px',
          boxShadow: '0 40px 90px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,230,163,0.12), 0 20px 70px rgba(0,230,163,0.14)',
          transform: open ? 'translateY(0) scale(1)' : 'translateY(26px) scale(0.98)',
          transition: 'transform .32s cubic-bezier(.2,.8,.2,1)',
        }}
      >
        {p && (
          <>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="modal-close"
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                width: 38,
                height: 38,
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff',
                fontSize: 20,
                lineHeight: 1,
                cursor: 'pointer',
                transition: 'background .2s, border-color .2s',
              }}
            >
              ×
            </button>
            {p.popular && (
              <span
                style={{
                  display: 'inline-block',
                  background: '#00E6A3',
                  color: '#0B1533',
                  fontWeight: 800,
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '5px 11px',
                  borderRadius: 999,
                  marginBottom: 14,
                }}
              >
                Most Popular
              </span>
            )}
            <div className="display" style={{ fontWeight: 700, fontSize: 32, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1 }}>
              {p.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, margin: '14px 0 4px' }}>
              <span className="display" style={{ fontWeight: 800, fontSize: 40, color: '#00E6A3', letterSpacing: '-0.02em' }}>
                {p.price}
              </span>
              <span style={{ fontSize: 15, color: '#8A8A8A', fontWeight: 600 }}>{p.per}</span>
            </div>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: '#B0B0B0', margin: '14px 0 0' }}>{p.summary}</p>

            <ListBlock title="What's included" items={p.features} />
            <InfoBlock title="Best for" text={p.best} />
            <ListBlock title="Expected deliverables" items={p.deliverables} mark="→" />
            <InfoBlock title="Support level" text={p.support} />
            <ListBlock title="Good to know" items={p.limits} mark="•" markColor="#8A8A8A" />

            <a
              href={emailHref}
              onClick={() => setTimeout(onClose, 60)}
              className="price-btn-solid"
              style={{
                display: 'block',
                textAlign: 'center',
                marginTop: 30,
                background: '#00E6A3',
                color: '#0B1533',
                fontWeight: 700,
                fontSize: 16,
                padding: 16,
                borderRadius: 12,
                textDecoration: 'none',
                boxShadow: '0 12px 28px rgba(0,230,163,0.35)',
              }}
            >
              {p.cta} →
            </a>
          </>
        )}
      </div>
    </div>
  )
}
