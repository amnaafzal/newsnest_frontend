'use client'

import { useState, useContext, createContext } from "react";


const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)