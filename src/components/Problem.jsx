import { T } from '../i18n.jsx'
import { Reveal } from '../hooks.jsx'
import Icon from '../Icons.jsx'

const problems = [
  { delay: 60, icon: 'noTime', titleKey: 'p1t', descKey: 'p1d' },
  { delay: 140, icon: 'flame', titleKey: 'p2t', descKey: 'p2d' },
  { delay: 220, icon: 'bank', titleKey: 'p3t', descKey: 'p3d' },
]

export default function Problem() {
  return (
    <section style={{ background: '#161616', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          top: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 300,
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.12), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div className="container section-pad" style={{ position: 'relative' }}>
        <div
          className="problem-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px,6vw,90px)',
            alignItems: 'start',
          }}
        >
          <Reveal delay={0}>
            <div style={{ marginBottom: 22 }}>
              <T k="lb_problem" className="eyebrow" />
            </div>
            <T
              as="h2"
              k="prob_h2"
              className="display"
              style={{
                fontWeight: 700,
                fontSize: 'clamp(34px,4vw,54px)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                margin: '0 0 22px',
              }}
            />
            <T
              as="p"
              k="prob_p"
              style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.7)', maxWidth: 440, margin: '0 0 30px' }}
            />
            <div style={{ borderLeft: '3px solid #FFFFFF', padding: '6px 0 6px 22px' }}>
              <T as="p" k="prob_quote" style={{ fontSize: 19, lineHeight: 1.5, fontWeight: 600, margin: 0, color: '#fff' }} />
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {problems.map((p) => (
              <Reveal
                key={p.titleKey}
                delay={p.delay}
                className="problem-card"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 20,
                  padding: '26px 28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ flex: 'none', display: 'inline-flex', color: '#FFFFFF' }}>
                    <Icon name={p.icon} size={26} />
                  </span>
                  <div>
                    <T
                      k={p.titleKey}
                      className="display"
                      style={{ fontWeight: 700, fontSize: 21, marginBottom: 4, display: 'block' }}
                    />
                    <T
                      k={p.descKey}
                      style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15.5, lineHeight: 1.5, display: 'block' }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
