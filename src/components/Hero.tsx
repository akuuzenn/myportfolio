import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from './ui/Button'

interface HeroProps {
  onUnlockScroll: () => void
}

export default function Hero({ onUnlockScroll }: HeroProps) {
  const handleUnlockScroll = () => {
    onUnlockScroll()
    // Instant scroll to projects after unlock (single click)
    setTimeout(() => {
      const projectsElement = document.getElementById('projects')
      projectsElement?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-secondary text-secondary-foreground">
              Backend Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Zenn
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed opacity-90">
            Fokus pada pengembangan sistem backend yang <span className="font-semibold text-primary">scalable</span> dan <span className="font-semibold text-primary">clean code</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button className="px-8 py-3 group" onClick={handleUnlockScroll}>
              Lihat Projects
              <ArrowDown className="h-4 w-4 ml-2 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button className="px-8 py-3 border">
              <a href="#contact" className="block">
                Hubungi Saya
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

