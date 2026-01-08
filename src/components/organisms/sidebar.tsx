import React from 'react'
import Link from 'next/link'

const Sidebar: React.FC = () => {
  return (
    <aside style={sidebarStyle}>
      <nav style={navStyle}>
        <Link href="/">Overview</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/team">Team</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </aside>
  )
}

const sidebarStyle: React.CSSProperties = {
  width: 240,
  padding: '20px',
  borderRight: '1px solid #eaeaea',
  minHeight: '60vh',
}

const navStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
}

export default Sidebar
