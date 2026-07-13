import { T } from '../i18n.jsx'
import { Reveal } from '../hooks.jsx'
import Icon from '../Icons.jsx'

const steps = [
  { delay: 60, icon: 'pin', num: '01', titleKey: 's1t', descKey: 's1d' },
  { delay: 140, icon: 'chart', num: '02', titleKey: 's2t', descKey: 's2d' },
  { delay: 220, icon: 'refresh', num: '03', titleKey: 's3t', descKey: 's3d' },
]

export default function Method() {
  return (
    <section style={{ background: '#161616', position: 'relative', overflow: 'hidden' }}>
      <div className="container section-pad">
        <Reveal delay={0} style={{ maxWidth: 720, marginBottom: 60 }}>
          <div style={{ marginBottom: 22 }}>
            <T k="lb_method" className="eyebrow" />
          </div>
          <T
            as="h2"
            k="sol_h2"
            className="display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(34px,4vw,54px)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              margin: '0 0 18px',
              color: '#FFFFFF',
            }}
          />
          <T as="p" k="sol_p" style={{ fontSize: 18, lineHeight: 1.6, color: '#A0A0A0', margin: 0 }} />
        </Reveal>

        <div className="grid-3">
          {steps.map((s) => (
            <Reveal
              key={s.num}
              delay={s.delay}
              className="method-card"
              style={{
                background: '#262626',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 24,
                padding: '34px 30px 30px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.07)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
                <span style={{ flex: 'none', display: 'inline-flex', color: '#FFFFFF' }}>
                  <Icon name={s.icon} size={34} />
                </span>
                <span className="display" style={{ fontWeight: 800, fontSize: 44, color: 'rgba(0,230,163,0.35)', lineHeight: 1 }}>
                  {s.num}
                </span>
              </div>
              <T
                k={s.titleKey}
                className="display"
                style={{
                  fontWeight: 700,
                  fontSize: 24,
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                  marginBottom: 8,
                  display: 'block',
                }}
              />
              <T k={s.descKey} style={{ fontSize: 16.5, lineHeight: 1.55, color: '#B0B0B0', display: 'block' }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
