import React from 'react'
import Link from 'next/link'

type Item = { href: string; label: string }

const items: Item[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const NavbarItems: React.FC = () => {
  return (
    <>
      {items.map((it) => (
        <Link key={it.href} href={it.href} style={{ color: 'inherit' }}>
          {it.label}
        </Link>
      ))}
    </>
  )
}

export default NavbarItems
