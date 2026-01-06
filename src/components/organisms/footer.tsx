import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>© {new Date().getFullYear()} ArkCool</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}

const footerStyle: React.CSSProperties = {
  borderTop: '1px solid #eaeaea',
  background: '#fff',
  marginTop: 40,
  padding: '12px 0',
}

const containerStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '0 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default Footer
