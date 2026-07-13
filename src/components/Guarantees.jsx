import { T } from '../i18n.jsx'
import { Reveal } from '../hooks.jsx'
import { guarantees } from '../data.jsx'

export default function Guarantees() {
  return (
    <section style={{ scrollMarginTop: 90 }}>
      <div className="container section-pad">
        <div
          className="guarantee-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: 'clamp(40px,6vw,80px)',
            alignItems: 'center',
          }}
        >
          <Reveal delay={0}>
            <div style={{ marginBottom: 22 }}>
              <T k="lb_why" className="eyebrow" />
            </div>
            <T
              as="h2"
              k="guar_h2"
              className="display"
              style={{
                fontWeight: 700,
                fontSize: 'clamp(34px,4vw,54px)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                margin: '0 0 20px',
                color: '#FFFFFF',
              }}
            />
            <T as="p" k="guar_p" style={{ fontSize: 17.5, lineHeight: 1.6, color: '#B0B0B0', margin: 0 }} />
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {guarantees.map((g) => (
              <Reveal
                key={g.titleKey}
                delay={g.delay}
                className="guarantee-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 18,
                  background: '#262626',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16,
                  padding: '22px 26px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                }}
              >
                <span
                  style={{
                    flex: 'none',
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: 'rgba(0,230,163,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00E6A3',
                    fontWeight: 800,
                    fontSize: 20,
                  }}
                >
                  ✓
                </span>
                <div>
                  <T
                    k={g.titleKey}
                    className="display"
                    style={{ fontWeight: 700, fontSize: 18, color: '#FFFFFF', display: 'block' }}
                  />
                  <T k={g.descKey} style={{ fontSize: 14.5, color: '#A0A0A0', display: 'block' }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
