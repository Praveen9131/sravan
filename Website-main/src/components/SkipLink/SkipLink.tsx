import React from 'react'

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="absolute -top-40 left-4 z-[100] px-4 py-2 bg-[#780606] text-white rounded-lg focus:top-4 focus:outline-none focus:ring-2 focus:ring-[#780606] focus:ring-offset-2 transition-all"
    >
      Skip to main content
    </a>
  )
}

export default SkipLink

