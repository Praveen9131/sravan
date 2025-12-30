import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (path: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (path === '/services' || path === '/cybersecurity-services') {
      e.preventDefault()
      if (location.pathname === '/') {
        const servicesSection = document.getElementById('services')
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        window.location.href = '/#services'
      }
    }
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about-us', label: 'About us' },
    { path: '/contact', label: 'Contact Us' },
  ]

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-white/10'
          : 'bg-white/70 dark:bg-black/70 backdrop-blur-lg border-b border-white/10 dark:border-white/5'
      }`}
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <img
                  src="/cogninode.jpg"
              alt="cogninode technologies Logo"
              className="h-10 lg:h-12 w-auto rounded"
            />
            <span className="text-xl lg:text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
              COGNINODE TECHNOLOGIES
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {navItems.map((item, index) => {
              const isActive = item.path === '/' ? location.pathname === '/' : location.pathname === item.path

              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => handleNavClick(item.path, e)}
                    className="relative px-3 py-2 text-xs xl:text-sm font-medium text-gray-700 dark:text-white hover:text-[#780606] dark:hover:text-[#dc2626] transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#780606] to-[#780606] rounded-full"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Theme Toggle and Get Started Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/get-started">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(120, 6, 6, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 xl:px-6 py-2 xl:py-2.5 rounded-full font-semibold text-white text-xs xl:text-sm bg-gradient-to-r from-gray-900 via-gray-800 to-[#780606] dark:from-[#780606] dark:via-[#5c0404] dark:to-black bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-500 shadow-lg whitespace-nowrap"
                  style={{
                    backgroundSize: '200% 100%',
                  }}
                >
                  Get Started
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white hover:text-[#780606] dark:hover:text-[#dc2626] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-white/20 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => {
                const isActive = item.path === '/' ? location.pathname === '/' : location.pathname === item.path

                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={(e) => {
                        handleNavClick(item.path, e)
                        setIsOpen(false)
                      }}
                      className={`block px-4 py-3 text-gray-700 dark:text-white hover:text-[#780606] dark:hover:text-[#dc2626] hover:bg-[#780606]/15 dark:hover:bg-[#780606]/20 rounded-lg text-base font-medium transition-colors ${isActive ? 'text-[#780606] dark:text-[#dc2626] bg-[#780606]/15 dark:bg-[#780606]/20' : ''
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  to="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="block"
                >
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-gray-900 via-gray-800 to-[#780606] dark:from-[#780606] dark:via-[#5c0404] dark:to-black shadow-lg"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

