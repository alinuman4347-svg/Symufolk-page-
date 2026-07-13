import { T, TReveal, useLang } from '../i18n.jsx'
import { Reveal, useParallax, showEmailToast } from '../hooks.jsx'
import { emailHref, supportEmail } from '../data.jsx'

const bars = [32, 44, 40, 58, 70, 88, 100]
const barColors = ['#2A2A2A', '#2A2A2A', '#2A2A2A', '#245040', '#0A8F68', '#00C48C', '#00E6A3']

function AuditValue({ labelKey, valueKey }) {
  return (
    <div>
      <T
        k={labelKey}
        style={{ fontSize: 11, color: '#8A8A8A', fontWeight: 600, display: 'block' }}
      />
      <T
        k={valueKey}
        className="display"
        style={{ fontWeight: 700, fontSize: 18, color: '#FFFFFF', display: 'block' }}
      />
    </div>
  )
}

export default function Hero() {
  const { t } = useLang()
  const blobA = useParallax(0.12)
  const blobB = useParallax(-0.08)
  const chipA = useParallax(-0.05)
  const chipB = useParallax(0.06)

  return (
    <section
      id="top"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(120% 90% at 85% -10%, #232323 0%, #1F1F1F 55%)',
        scrollMarginTop: 90,
      }}
    >
      <div
        ref={blobA}
        style={{
          position: 'absolute',
          top: -80,
          right: -40,
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(0,230,163,0.28), rgba(0,230,163,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        ref={blobB}
        style={{
          position: 'absolute',
          bottom: -120,
          left: -100,
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.10), rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="container hero-grid"
        style={{
          padding: 'clamp(60px,8vw,110px) 32px clamp(70px,8vw,120px)',
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: 'clamp(40px,5vw,80px)',
          alignItems: 'center',
        }}
      >
        {/* left */}
        <div>
          <Reveal
            delay={0}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              background: '#262626',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 999,
              padding: '8px 16px 8px 12px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#00E6A3',
                animation: 'pulse 2.4s ease-in-out infinite',
              }}
            />
            <T
              k="hero_badge"
              style={{ fontSize: 13, fontWeight: 600, color: '#B0B0B0', letterSpacing: '0.01em' }}
            />
          </Reveal>
          <TReveal
            as="h1"
            k="hero_h1"
            delay={80}
            className="display"
            style={{
              fontWeight: 700,
              fontSize: 'clamp(42px,5.4vw,78px)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              margin: '0 0 26px',
              color: '#FFFFFF',
            }}
          />
          <TReveal
            as="p"
            k="hero_p"
            delay={160}
            style={{
              fontSize: 'clamp(17px,1.4vw,20px)',
              lineHeight: 1.62,
              color: '#B0B0B0',
              maxWidth: 520,
              margin: '0 0 36px',
            }}
          />
          <Reveal
            delay={240}
            style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}
          >
            <T
              as="a"
              k="hero_cta"
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
                fontSize: 16.5,
                letterSpacing: '-0.01em',
                padding: '17px 30px',
                borderRadius: 999,
                boxShadow: '0 14px 34px rgba(0,0,0,0.28)',
              }}
            />
            <T
              k="hero_micro"
              style={{ fontSize: 13.5, fontWeight: 600, color: '#8A8A8A' }}
            />
          </Reveal>
        </div>

        {/* right: audit card */}
        <Reveal delay={200} style={{ position: 'relative' }}>
          <div
            ref={chipA}
            style={{
              position: 'absolute',
              top: -26,
              right: 6,
              zIndex: 3,
              background: '#262626',
              borderRadius: 16,
              padding: '14px 18px',
              boxShadow: '0 18px 40px rgba(0,0,0,0.26)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              animation: 'floaty 6s ease-in-out infinite',
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: 'rgba(0,230,163,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 19,
              }}
            >
              📈
            </div>
            <div>
              <div className="display" style={{ fontWeight: 700, fontSize: 19, color: '#00E6A3', lineHeight: 1 }}>
                +340%
              </div>
              <T k="db" style={{ fontSize: 11, color: '#8A8A8A', fontWeight: 600, marginTop: 3, display: 'block' }} />
            </div>
          </div>
          <div
            ref={chipB}
            style={{
              position: 'absolute',
              bottom: -52,
              left: -30,
              zIndex: 3,
              background: '#262626',
              borderRadius: 16,
              padding: '14px 18px',
              boxShadow: '0 18px 40px rgba(0,0,0,0.34)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              animation: 'floaty 7s ease-in-out infinite 0.6s',
            }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                background: 'rgba(0,230,163,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
              }}
            >
              💶
            </div>
            <div>
              <div className="display" style={{ fontWeight: 700, fontSize: 19, color: '#fff', lineHeight: 1 }}>
                €4,200
              </div>
              <T
                k="au_chipsaved"
                style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', fontWeight: 600, marginTop: 3, display: 'block' }}
              />
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              background: '#262626',
              borderRadius: 26,
              padding: 30,
              boxShadow: '0 30px 70px rgba(0,0,0,0.34)',
              border: '1px solid rgba(255,255,255,0.05)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <T
                k="au_label"
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#8A8A8A',
                }}
              />
              <div style={{ display: 'flex', gap: 5 }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#00E6A3' }} />
              </div>
            </div>
            <T
              k="au_title"
              className="display"
              style={{
                fontWeight: 700,
                fontSize: 34,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                lineHeight: 1,
                marginBottom: 2,
                display: 'block',
              }}
            />
            <T
              k="au_sub"
              style={{ fontSize: 13, color: '#8A8A8A', fontWeight: 600, marginBottom: 22, display: 'block' }}
            />
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 150, padding: '0 2px' }}>
              {bars.map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background: barColors[i],
                    borderRadius: '8px 8px 0 0',
                    position: 'relative',
                  }}
                >
                  {i === bars.length - 1 && (
                    <T
                      k="au_now"
                      style={{
                        position: 'absolute',
                        top: -26,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#00E6A3',
                        color: '#0B1533',
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '3px 8px',
                        borderRadius: 6,
                        whiteSpace: 'nowrap',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                marginTop: 20,
                paddingTop: 16,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <AuditValue labelKey="au_found" valueKey="au_v1" />
              <AuditValue labelKey="au_trusted" valueKey="au_v2" />
              <AuditValue labelKey="au_retained" valueKey="au_v3" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* trust strip */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
        <div
          className="container"
          style={{
            padding: '20px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: 30,
            flexWrap: 'wrap',
            justifyContent: 'center',
            color: '#8A8A8A',
            fontWeight: 600,
            fontSize: 13.5,
          }}
        >
          <T k="tr1" style={{ color: '#FFFFFF' }} />
          <span style={{ opacity: 0.4 }}>|</span>
          <T k="tr2" />
          <span style={{ opacity: 0.4 }}>|</span>
          <T k="tr3" />
          <span style={{ opacity: 0.4 }}>|</span>
          <T k="tr4" />
        </div>
      </div>
    </section>
  )
}
