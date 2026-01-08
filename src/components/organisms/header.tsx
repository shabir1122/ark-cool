import React from 'react'
import Link from 'next/link'
import NavbarItems from '../molecules/navbar-items'

type Props = {
  user?: {
    name: string
    email?: string
    avatarUrl?: string
  }
}

const Header: React.FC<Props> = ({ user = { name: 'Jane Doe' } }) => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <Link href="/">ArkCool</Link>
        </div>

        <nav style={navStyle}>
          <NavbarItems />
        </nav>

        <div style={userStyle}>
          <div style={avatarStyle}>{getInitials(user.name)}</div>
          <div style={{ marginLeft: 10, textAlign: 'right' }}>
            <div style={{ fontWeight: 600 }}>{user.name}</div>
            <div style={{ fontSize: 12, color: '#666' }}>{user.email ?? 'user@example.com'}</div>
          </div>
        </div>
      </div>
    </header>
  )
}

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

const headerStyle: React.CSSProperties = { borderBottom: '1px solid #eaeaea', background: '#fff' }
const containerStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: '0 auto',
  padding: '12px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}
const logoStyle: React.CSSProperties = { fontWeight: 700, fontSize: 18 }
const navStyle: React.CSSProperties = { display: 'flex', gap: 20 }
const userStyle: React.CSSProperties = { display: 'flex', alignItems: 'center' }
const avatarStyle: React.CSSProperties = {
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: '#111',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
}

export default Header
