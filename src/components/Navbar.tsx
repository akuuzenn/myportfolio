import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ui/ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

interface NavbarProps {
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'techstack', label: 'Tech Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur supports-[backdrop-filter:blur(12px)]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <a 
            href="#hero" 
            className="font-bold text-xl text-foreground hover:text-primary transition-colors" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}
          >
            Zenn
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-semibold transition-all duration-200 hover:text-primary/80 relative group"
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.03 }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 origin-left"></span>
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <motion.button 
            className="md:hidden h-10 w-10 p-0 rounded-xl border bg-background hover:bg-muted"
            onClick={() => setMobileOpen(!mobileOpen)}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.15 }}
            >
              {mobileOpen ? <X className="h-5 w-5 mx-auto" /> : <Menu className="h-5 w-5 mx-auto" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile menu with slide/slide animation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            className="md:hidden bg-background/95 backdrop-blur border-t border-border overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-4 divide-y divide-border">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    className="text-lg font-bold py-4 first:pt-0 last:pb-0 hover:text-primary transition-colors block"
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.15, delay: index * 0.02 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
