import { T } from '../i18n.jsx'
import { Reveal, CountUp } from '../hooks.jsx'
import { cases } from '../data.jsx'

function Row({ item, featured }) {
  const border = featured ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.07)'
  const labelColor = featured ? 'rgba(255,255,255,0.6)' : '#9A9A9A'
  const fromColor = featured ? 'rgba(255,255,255,0.55)' : '#8A8A8A'
  const arrowColor = featured ? 'rgba(255,255,255,0.4)' : '#6A6A6A'
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        gap: 12,
        padding: '9px 0',
        borderTop: `1px solid ${border}`,
      }}
    >
      <T k={item.key} style={{ fontSize: 13, color: labelColor }} />
      <span style={{ fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap' }}>
        <span style={{ color: fromColor }}>{item.from}</span>{' '}
        <span style={{ color: arrowColor }}>→</span>{' '}
        <span style={{ color: '#00E6A3', fontWeight: 700 }}>{item.to}</span>
      </span>
    </div>
  )
}

function Card({ c }) {
  const featured = c.featured
  return (
    <Reveal
      delay={c.delay}
      className="card-lift"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: featured ? '#1A1A1A' : '#262626',
        border: featured ? '1px solid rgba(0,230,163,0.28)' : '1px solid rgba(255,255,255,0.07)',
        borderRadius: 24,
        padding: '32px 30px',
        boxShadow: featured ? '0 20px 50px rgba(0,0,0,0.4)' : '0 16px 44px rgba(0,0,0,0.2)',
        color: '#fff',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, marginBottom: 24 }}>
        <T
          k={c.labelKey}
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: featured ? 'rgba(255,255,255,0.55)' : '#8A8A8A',
          }}
        />
        <T
          k={c.timeKey}
          style={
            featured
              ? {
                  flex: 'none',
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#0B1533',
                  background: '#00E6A3',
                  borderRadius: 999,
                  padding: '4px 10px',
                  whiteSpace: 'nowrap',
                }
              : {
                  flex: 'none',
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#00E6A3',
                  border: '1px solid rgba(0,230,163,0.35)',
                  borderRadius: 999,
                  padding: '4px 10px',
                  whiteSpace: 'nowrap',
                }
          }
        />
      </div>
      <CountUp
        to={c.stat.to}
        prefix={c.stat.prefix}
        suffix={c.stat.suffix}
        decimals={c.stat.decimals || 0}
        className="display"
        style={{
          fontWeight: 800,
          fontSize: 'clamp(44px,4.6vw,60px)',
          lineHeight: 1,
          color: '#00E6A3',
          letterSpacing: '-0.02em',
        }}
      />
      <T
        k={c.metricKey}
        className="display"
        style={{ fontWeight: 700, fontSize: 18, color: '#FFFFFF', margin: '6px 0 20px', display: 'block' }}
      />
      <div
        style={{
          padding: '12px 14px',
          background: featured ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.03)',
          borderRadius: 10,
          marginBottom: 18,
        }}
      >
        <T
          k="c_start_lbl"
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: featured ? 'rgba(255,255,255,0.4)' : '#6F6F6F',
            marginBottom: 5,
            display: 'block',
          }}
        />
        <T
          k={c.startKey}
          style={{ fontSize: 13, lineHeight: 1.5, color: featured ? 'rgba(255,255,255,0.72)' : '#A8A8A8', display: 'block' }}
        />
      </div>
      <div style={{ marginTop: 'auto' }}>
        {c.rows.map((r) => (
          <Row key={r.key} item={r} featured={featured} />
        ))}
      </div>
    </Reveal>
  )
}

export default function Cases() {
  return (
    <section id="cases" style={{ scrollMarginTop: 90 }}>
      <div className="container section-pad">
        <Reveal delay={0} style={{ maxWidth: 680, marginBottom: 56 }}>
          <div style={{ marginBottom: 22 }}>
            <T k="lb_proof" className="eyebrow" />
          </div>
          <T
            as="h2"
            k="cases_h2"
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
        <div className="grid-3">
          {cases.map((c) => (
            <Card key={c.labelKey} c={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
