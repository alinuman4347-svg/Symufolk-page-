import { useState } from 'react'
import { T, useLang } from '../i18n.jsx'
import { Reveal } from '../hooks.jsx'
import { pricingPlans } from '../data.jsx'
import PricingModal from './PricingModal.jsx'

function Feature({ text, muted }) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        alignItems: 'flex-start',
        fontSize: 14.5,
        color: muted ? '#8A8A8A' : '#C4C4C4',
      }}
    >
      <span style={{ color: '#00E6A3', flex: 'none', opacity: muted ? 0.6 : 1 }}>{muted ? '+' : '✓'}</span>
      {text}
    </div>
  )
}

function PlanCard({ plan, onSelect }) {
  const { t } = useLang()
  const featured = plan.featured
  return (
    <Reveal
      delay={plan.delay}
      className={featured ? 'price-featured' : 'price-card'}
      style={{
        background: featured ? '#1A1A1A' : '#262626',
        border: featured ? '1px solid rgba(0,230,163,0.4)' : '1px solid rgba(255,255,255,0.09)',
        borderRadius: 24,
        padding: '38px 34px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        color: '#fff',
        boxShadow: featured ? '0 30px 70px rgba(0,0,0,0.45)' : undefined,
        transform: featured ? 'translateY(-10px)' : undefined,
      }}
    >
      {featured && (
        <T
          k="popular"
          style={{
            position: 'absolute',
            top: 20,
            right: 24,
            background: '#00E6A3',
            color: '#0B1533',
            fontWeight: 800,
            fontSize: 11,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '6px 12px',
            borderRadius: 999,
          }}
        />
      )}
      <T k={plan.nameKey} className="display" style={{ fontWeight: 700, fontSize: 20, display: 'block' }} />
      <T
        k={plan.subKey}
        style={{ fontSize: 14, color: featured ? 'rgba(255,255,255,0.6)' : '#8A8A8A', margin: '4px 0 22px', display: 'block' }}
      />
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 22 }}>
        <span
          className="display"
          style={{ fontWeight: 800, fontSize: 48, color: featured ? '#00E6A3' : '#FFFFFF', letterSpacing: '-0.02em' }}
        >
          {plan.price}
        </span>
        <T
          k="permonth"
          style={{ fontSize: 15, color: featured ? 'rgba(255,255,255,0.55)' : '#8A8A8A', fontWeight: 600 }}
        />
      </div>
      {plan.plusKey && (
        <T k={plan.plusKey} style={{ fontSize: 13, fontWeight: 700, color: '#00E6A3', marginBottom: 14, display: 'block' }} />
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 26 }}>
        {plan.features.map((f, i) => (
          <Feature key={i} text={f.text} muted={f.muted} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => onSelect(plan.pkg)}
        className={featured ? 'price-btn-solid' : 'price-btn-ghost'}
        style={{
          marginTop: 'auto',
          cursor: 'pointer',
          textAlign: 'center',
          fontFamily: 'inherit',
          fontWeight: 700,
          fontSize: 15,
          padding: 14,
          borderRadius: 12,
          ...(featured
            ? { background: '#00E6A3', color: '#0B1533', border: 'none', boxShadow: '0 10px 24px rgba(0,230,163,0.35)' }
            : { background: 'rgba(0,230,163,0.08)', color: '#00E6A3', border: '1px solid rgba(0,230,163,0.4)' }),
        }}
      >
        {t('getstarted')}
      </button>
    </Reveal>
  )
}

export default function Pricing() {
  const [openPkg, setOpenPkg] = useState(null)

  return (
    <section id="pricing" style={{ scrollMarginTop: 90 }}>
      <div className="container section-pad">
        <Reveal delay={0} style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 56px' }}>
          <div style={{ marginBottom: 20 }}>
            <T k="lb_pricing" className="eyebrow" />
          </div>
          <T
            as="h2"
            k="price_h2"
            className="display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(34px,4vw,54px)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
              margin: '0 0 14px',
              color: '#FFFFFF',
            }}
          />
        </Reveal>

        <div className="grid-3">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.pkg} plan={plan} onSelect={setOpenPkg} />
          ))}
        </div>

        {/* one-off band */}
        <Reveal
          delay={60}
          style={{
            marginTop: 22,
            background: '#1A1A1A',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 24,
            padding: '30px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <T k="oneoff_t" className="display" style={{ fontWeight: 700, fontSize: 21, color: '#FFFFFF' }} />
          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', fontSize: 15, color: '#A0A0A0', fontWeight: 600 }}>
            <T k="oneoff_web" />
            <T k="oneoff_seo" />
            <T k="oneoff_lp" />
          </div>
        </Reveal>
      </div>

      <PricingModal pkgKey={openPkg} onClose={() => setOpenPkg(null)} />
    </section>
  )
}
