import { Moon, Sun } from 'lucide-react'
import { Button } from './Button'

interface ThemeToggleProps {
  darkMode: boolean
  setDarkMode: (dark: boolean) => void
}

export default function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <Button
      className="h-9 w-9 p-0"
      onClick={() => setDarkMode(!darkMode)}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${darkMode ? 'rotate-90 scale-0' : ''}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${!darkMode ? '-rotate-90 scale-100' : ''}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

