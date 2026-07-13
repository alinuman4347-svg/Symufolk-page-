import { T } from '../i18n.jsx'
import { Reveal } from '../hooks.jsx'

export default function About() {
  return (
    <section id="about" style={{ scrollMarginTop: 90 }}>
      <div className="container section-pad">
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: 'clamp(40px,6vw,90px)',
            alignItems: 'center',
          }}
        >
          <Reveal delay={0}>
            <div style={{ marginBottom: 22 }}>
              <T k="lb_who" className="eyebrow" />
            </div>
            <div
              className="about-card"
              style={{
                position: 'relative',
                background: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 26,
                padding: '40px 36px',
                color: '#fff',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                }}
              />
              <div className="display" style={{ fontWeight: 800, fontSize: 64, lineHeight: 1, color: '#00E6A3' }}>
                1
              </div>
              <T
                k="ab_team"
                className="display"
                style={{ fontWeight: 700, fontSize: 24, margin: '8px 0 2px', display: 'block' }}
              />
              <T
                k="ab_sub"
                style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, position: 'relative', display: 'block' }}
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <T
              as="h2"
              k="ab_h2"
              className="display"
              style={{
                fontWeight: 700,
                fontSize: 'clamp(32px,3.6vw,50px)',
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
                margin: '0 0 24px',
                color: '#FFFFFF',
              }}
            />
            <T
              as="p"
              k="ab_p"
              style={{ fontSize: 18.5, lineHeight: 1.68, color: '#B0B0B0', margin: 0 }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
