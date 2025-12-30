import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'
import { HiMoon, HiSun } from 'react-icons/hi2'

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-black dark:border dark:border-black text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#780606] focus:ring-offset-2 dark:focus:ring-offset-black"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-5 h-5 flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <HiSun className="w-full h-full" />
        ) : (
          <HiMoon className="w-full h-full" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle

