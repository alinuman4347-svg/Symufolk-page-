import logo from '../assets/logo.png'
import { T } from '../i18n.jsx'

const linkStyle = { color: 'rgba(255,255,255,0.78)', fontSize: 15, fontWeight: 500 }

export default function Footer() {
  return (
    <footer style={{ background: '#111111', color: '#fff' }}>
      <div className="container" style={{ padding: '70px 32px 40px' }}>
        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr 1fr',
            gap: 40,
            paddingBottom: 44,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div>
            <img src={logo} alt="Symufolk" style={{ height: 30, width: 'auto', marginBottom: 18, display: 'block' }} />
            <T
              as="p"
              k="ft_tag"
              style={{ fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)', maxWidth: 300, margin: 0 }}
            />
          </div>
          <div>
            <T
              k="ft_quick"
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 18,
                display: 'block',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <T as="a" k="ft_about" href="#about" className="footer-link" style={linkStyle} />
              <T as="a" k="ft_services" href="#services" className="footer-link" style={linkStyle} />
              <T as="a" k="ft_cases" href="#cases" className="footer-link" style={linkStyle} />
              <T as="a" k="ft_pricing" href="#pricing" className="footer-link" style={linkStyle} />
              <T as="a" k="ft_contact" href="#final-cta" className="footer-link" style={linkStyle} />
            </div>
          </div>
          <div>
            <T
              k="ft_legal"
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 18,
                display: 'block',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:info@symufolk.com" style={{ color: '#00E6A3', fontSize: 15, fontWeight: 600 }}>
                info@symufolk.com
              </a>
              <a href="#" className="footer-link" style={linkStyle}>
                Impressum
              </a>
              <a href="#" className="footer-link" style={linkStyle}>
                Datenschutz (DSGVO)
              </a>
              <a href="#" className="footer-link" style={linkStyle}>
                AGB
              </a>
            </div>
          </div>
        </div>
        <T
          k="ft_copy"
          style={{ paddingTop: 26, fontSize: 13.5, color: 'rgba(255,255,255,0.45)', display: 'block' }}
        />
      </div>
    </footer>
  )
}
