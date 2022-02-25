import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between font-content antialiased">
      <Header />
      <main className="isolate mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
