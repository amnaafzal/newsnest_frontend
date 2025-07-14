'use client'

import React from 'react'
import Link from 'next/link'
import { useTheme } from '../context/themeContext'


const Footer = () => {

  const { isDarkMode } = useTheme()
  return (
    <div>
   
      <div className={`lowerFooter text-white flex justify-center items-center py-5 ${isDarkMode ? 'bg-gray-900 border border-gray-900 border-t-gray-600' : 'bg-gray-300'}`}>
        copyright © 2025 Rebrandly. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
