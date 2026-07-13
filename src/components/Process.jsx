import { T } from '../i18n.jsx'
import { Reveal } from '../hooks.jsx'
import { processSteps } from '../data.jsx'

export default function Process() {
  return (
    <section style={{ background: '#161616' }}>
      <div className="container section-pad">
        <Reveal delay={0} style={{ maxWidth: 640, marginBottom: 60 }}>
          <div style={{ marginBottom: 22 }}>
            <T k="lb_process" className="eyebrow" />
          </div>
          <T
            as="h2"
            k="proc_h2"
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
        </Reveal>

        <div className="grid-4">
          {processSteps.map((s) => (
            <Reveal
              key={s.num}
              delay={s.delay}
              className="process-card"
              style={{ position: 'relative', padding: '24px 22px', borderRadius: 18 }}
            >
              <div className="display" style={{ fontWeight: 800, fontSize: 56, color: '#00E6A3', lineHeight: 1, opacity: 0.9 }}>
                {s.num}
              </div>
              <div style={{ height: 2, background: 'rgba(255,255,255,0.08)', margin: '16px 0 20px' }} />
              <T
                k={s.weekKey}
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#9A9A9A',
                  marginBottom: 8,
                  display: 'block',
                }}
              />
              <T
                k={s.titleKey}
                className="display"
                style={{ fontWeight: 700, fontSize: 21, color: '#FFFFFF', marginBottom: 8, display: 'block' }}
              />
              <T as="p" k={s.descKey} style={{ fontSize: 15, lineHeight: 1.55, color: '#A0A0A0', margin: 0 }} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
