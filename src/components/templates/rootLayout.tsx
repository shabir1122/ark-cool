import React from 'react'
import Header from '../organisms/header'
import Footer from '../organisms/footer'

type Props = {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={mainStyle}>{children}</main>
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

export default RootLayout
