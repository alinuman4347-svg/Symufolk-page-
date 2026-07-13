import { T } from '../i18n.jsx'
import { Reveal } from '../hooks.jsx'
import { testimonials } from '../data.jsx'

export default function Testimonials() {
  return (
    <section style={{ background: '#161616', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          bottom: -120,
          right: -80,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(255,255,255,0.12),transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container section-pad" style={{ position: 'relative' }}>
        <Reveal delay={0} style={{ marginBottom: 54 }}>
          <div style={{ marginBottom: 20 }}>
            <T k="lb_testi" className="eyebrow" />
          </div>
          <T
            as="h2"
            k="testi_h2"
            className="display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(34px,4vw,54px)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              margin: 0,
            }}
          />
        </Reveal>
        <div className="grid-2">
          {testimonials.map((t) => (
            <Reveal
              key={t.qKey}
              delay={t.delay}
              className="testimonial-card"
              style={{
                background: 'rgba(255,255,255,0.045)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 22,
                padding: '34px 34px',
              }}
            >
              <div style={{ color: '#00E6A3', fontSize: 15, letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
              <T
                k={t.qKey}
                className="display"
                style={{
                  fontWeight: 700,
                  fontSize: 22,
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  marginBottom: 16,
                  display: 'block',
                }}
              />
              <T
                as="p"
                k={t.pKey}
                style={{ fontSize: 15.5, lineHeight: 1.65, color: 'rgba(255,255,255,0.68)', margin: '0 0 22px' }}
              />
              <T k={t.aKey} style={{ fontSize: 14, fontWeight: 600, color: '#00E6A3', display: 'block' }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
