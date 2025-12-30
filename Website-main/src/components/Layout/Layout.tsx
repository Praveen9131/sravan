import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import SkipLink from '../SkipLink/SkipLink'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import WhatsAppFloat from '../WhatsAppFloat/WhatsAppFloat'

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-[#780606]/5 to-white dark:from-black dark:via-black dark:to-black transition-colors duration-300">
      <SkipLink />
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default Layout

