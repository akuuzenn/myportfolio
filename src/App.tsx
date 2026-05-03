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
    let scrollPosition = 0

    if (scrollLocked) {
      // Mobile-safe scroll lock
      scrollPosition = window.pageYOffset
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPosition}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      document.body.style.touchAction = 'none'
      document.documentElement.style.overflow = 'hidden'
    } else {
      // Unlock scroll
      const top = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = 'auto'
      document.body.style.touchAction = ''
      document.documentElement.style.overflow = ''
      window.scrollTo(0, parseInt(top || '0') * -1)
    }

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = 'auto'
      document.body.style.touchAction = ''
      document.documentElement.style.overflow = ''
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
