import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ui/ThemeToggle'

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
            className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" 
            onClick={(e) => { e.preventDefault(); scrollToSection('hero') }}
          >
            Zenn
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium transition-colors hover:text-primary/80"
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <button 
            className="md:hidden h-9 w-9 p-0 rounded-lg border hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-lg font-medium transition-colors hover:text-primary py-2"
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

