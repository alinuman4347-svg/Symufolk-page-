import logo from '../assets/logo.png'
import { T, useLang } from '../i18n.jsx'
import { useScrolled } from '../hooks.jsx'

const navLinkStyle = {
  color: '#FFFFFF',
  fontWeight: 500,
  fontSize: 15,
  letterSpacing: '-0.01em',
}

export default function Header() {
  const { lang, setLang } = useLang()
  const scrolled = useScrolled()

  return (
    <header
      id="site-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(22,22,22,0.85)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        transition: 'box-shadow .35s ease',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.35)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          padding: '16px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="Symufolk" style={{ height: 42, width: 'auto', display: 'block' }} />
        </a>
        <nav className="hero-nav" style={{ display: 'flex', alignItems: 'center', gap: 34 }}>
          <T as="a" k="nav_about" href="#about" className="nav-link" style={navLinkStyle} />
          <T as="a" k="nav_services" href="#services" className="nav-link" style={navLinkStyle} />
          <T as="a" k="nav_cases" href="#cases" className="nav-link" style={navLinkStyle} />
          <T as="a" k="nav_pricing" href="#pricing" className="nav-link" style={navLinkStyle} />
        </nav>
        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.24)',
              borderRadius: 999,
              padding: 3,
            }}
          >
            <button
              type="button"
              className={`lang-btn ${lang === 'de' ? 'active' : ''}`}
              onClick={() => setLang('de')}
            >
              DE
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
          <T
            as="a"
            k="h_cta"
            href="#final-cta"
            className="btn-pill"
            style={{
              background: '#00E6A3',
              color: '#0B1533',
              fontWeight: 700,
              fontSize: 14.5,
              letterSpacing: '-0.01em',
              padding: '12px 22px',
              borderRadius: 999,
              boxShadow: '0 8px 20px rgba(0,230,163,0.35)',
              transition: 'transform .2s ease, box-shadow .2s ease, background .2s ease',
            }}
          />
        </div>
      </div>
    </header>
  )
}
