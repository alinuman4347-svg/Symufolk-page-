import { T, TReveal } from '../i18n.jsx'
import Icon from '../Icons.jsx'
import { niches } from '../data.jsx'

function Chip({ item }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid #00E6A3',
        borderRadius: 16,
        padding: '18px 26px',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ flex: 'none', display: 'inline-flex', color: '#FFFFFF' }}>
        <Icon name={item.icon} size={24} />
      </span>
      <T k={item.key} style={{ fontWeight: 600, fontSize: 16.5 }} />
    </div>
  )
}

export default function Niches() {
  // Duplicate the list so the marquee loops seamlessly at translateX(-50%).
  const loop = [...niches, ...niches]

  return (
    <section style={{ background: '#161616', color: '#fff', overflow: 'hidden' }}>
      <div className="container" style={{ padding: 'clamp(70px,8vw,110px) 32px 0', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 20, justifyContent: 'center' }}>
          <T k="lb_workwith" className="eyebrow" />
        </div>
        <TReveal
          as="p"
          k="work_p"
          delay={80}
          style={{ fontSize: 17.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto' }}
        />
      </div>

      <div style={{ marginTop: 44, paddingBottom: 'clamp(70px,8vw,110px)', maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: 16, width: 'max-content' }}>
          {loop.map((item, i) => (
            <Chip key={`${item.key}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
