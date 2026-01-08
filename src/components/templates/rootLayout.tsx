import React from 'react'
import Header from '../organisms/header'
import Footer from '../organisms/footer'
import Sidebar from '../organisms/sidebar'

type Props = {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={mainStyle}>
        <div style={layoutStyle}>
          <Sidebar />
          <div style={contentStyle}>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

const mainStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: '24px auto',
  padding: '0 20px',
  minHeight: '60vh',
}

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  gap: 24,
}

const contentStyle: React.CSSProperties = {
  flex: 1,
}

export default RootLayout
