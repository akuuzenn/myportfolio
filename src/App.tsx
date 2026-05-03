import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [scrollLocked, setScrollLocked] = useState(true)

  useEffect(() => {
    // Load theme from localStorage or default to system preference
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = saved === 'dark' || (!saved && prefersDark)
    setDarkMode(initialDark)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [scrollLocked])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero onUnlockScroll={() => setScrollLocked(false)} />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
