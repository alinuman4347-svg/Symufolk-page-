import { T, TReveal, useLang } from '../i18n.jsx'
import { Reveal, useParallax, showEmailToast } from '../hooks.jsx'
import { emailHref, supportEmail } from '../data.jsx'

export default function FinalCta() {
  const { t } = useLang()
  const blob = useParallax(0.06)
  return (
    <section
      id="final-cta"
      style={{
        scrollMarginTop: 90,
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(120% 120% at 50% 0%, #232323, #1F1F1F 60%)',
      }}
    >
      <div
        ref={blob}
        style={{
          position: 'absolute',
          top: -60,
          left: '8%',
          width: 220,
          height: 220,
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(0,230,163,0.22),transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="container"
        style={{ maxWidth: 900, padding: 'clamp(90px,10vw,150px) 32px', textAlign: 'center', position: 'relative' }}
      >
        <TReveal
          as="h2"
          k="cta_h2"
          delay={0}
          className="display"
          style={{
            fontWeight: 700,
            fontSize: 'clamp(38px,5.2vw,72px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            margin: '0 0 24px',
            color: '#FFFFFF',
          }}
        />
        <TReveal
          as="p"
          k="cta_p"
          delay={80}
          style={{
            fontSize: 'clamp(17px,1.5vw,21px)',
            lineHeight: 1.6,
            color: '#B0B0B0',
            maxWidth: 600,
            margin: '0 auto 40px',
          }}
        />
        <Reveal delay={160} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <T
            as="a"
            k="cta_btn"
            href={emailHref}
            onClick={() => showEmailToast(t('cta_toast'), supportEmail)}
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#00E6A3',
              color: '#0B1533',
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: '-0.01em',
              padding: '19px 38px',
              borderRadius: 999,
              boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
            }}
          />
          <T k="cta_email" style={{ fontSize: 15, color: '#8A8A8A' }} />
        </Reveal>
      </div>
    </section>
  )
}
