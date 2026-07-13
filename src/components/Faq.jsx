import { useState } from 'react'
import { T } from '../i18n.jsx'
import { Reveal } from '../hooks.jsx'
import { faqs } from '../data.jsx'

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <details
      className="faq-item"
      open={open}
      onToggle={(e) => setOpen(e.currentTarget.open)}
      style={{
        background: 'rgba(255,255,255,0.045)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 16,
        padding: '4px 26px',
      }}
    >
      <summary
        className="display"
        style={{
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          padding: '22px 0',
          fontWeight: 700,
          fontSize: 19,
          color: '#fff',
        }}
      >
        <T k={item.qKey} />
        <span className="faq-sign" style={{ flex: 'none', color: '#FFFFFF', fontSize: 24, fontWeight: 400 }}>
          {open ? '−' : '+'}
        </span>
      </summary>
      <T
        as="p"
        k={item.aKey}
        style={{ margin: '0 0 22px', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.68)' }}
      />
    </details>
  )
}

export default function Faq() {
  return (
    <section style={{ background: '#161616', color: '#fff' }}>
      <div className="container section-pad" style={{ maxWidth: 980 }}>
        <Reveal delay={0} style={{ textAlign: 'center', marginBottom: 50 }}>
          <div style={{ marginBottom: 18 }}>
            <T k="lb_faq" className="eyebrow" />
          </div>
          <T
            as="h2"
            k="faq_h2"
            className="display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(32px,3.8vw,50px)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              margin: 0,
            }}
          />
        </Reveal>
        <Reveal delay={60} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f) => (
            <FaqItem key={f.qKey} item={f} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
