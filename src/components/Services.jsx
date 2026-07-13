import { T } from '../i18n.jsx'
import { Reveal } from '../hooks.jsx'
import { services } from '../data.jsx'

export default function Services() {
  return (
    <section id="services" style={{ scrollMarginTop: 90 }}>
      <div className="container section-pad">
        <Reveal
          delay={0}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 30,
            flexWrap: 'wrap',
            marginBottom: 56,
          }}
        >
          <div style={{ maxWidth: 600 }}>
            <div style={{ marginBottom: 22 }}>
              <T k="lb_offer" className="eyebrow" />
            </div>
            <T
              as="h2"
              k="serv_h2"
              className="display"
              style={{
                fontWeight: 700,
                fontSize: 'clamp(34px,4vw,54px)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                margin: 0,
                color: '#FFFFFF',
              }}
            />
          </div>
          <T
            as="p"
            k="serv_p"
            style={{ fontSize: 16.5, lineHeight: 1.55, color: '#8A8A8A', maxWidth: 300, margin: '0 0 8px' }}
          />
        </Reveal>

        <Reveal
          delay={60}
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 1,
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: 24,
            overflow: 'hidden',
          }}
        >
          {services.map((s) => (
            <div
              key={s.key}
              className="service-tile"
              style={{ position: 'relative', background: '#262626', padding: '30px 28px' }}
            >
              <div style={{ marginBottom: 14, height: 33 }}>
                <img src={s.img} alt={s.alt} style={{ maxWidth: '100%', display: 'block', objectFit: 'cover', height: 33 }} />
              </div>
              <T
                k={`${s.key}t`}
                className="display"
                style={{ fontWeight: 700, fontSize: 19, color: '#00E6A3', marginBottom: 7, display: 'block' }}
              />
              <T k={`${s.key}d`} style={{ fontSize: 14.5, lineHeight: 1.55, color: '#A0A0A0', display: 'block' }} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
