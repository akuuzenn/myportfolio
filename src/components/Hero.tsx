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
          <div className="space-y-4 mb-8">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm"
            >
              Backend Architect
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-foreground via-primary via-[60%] to-secondary bg-clip-text text-transparent leading-tight tracking-tight"
            >
              Zenn
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-tight font-semibold opacity-95 bg-gradient-to-r from-muted-foreground/80 bg-clip-text"
            >
              Membangun Backend <span className="text-primary font-black">Scalable Enterprise</span> dengan Laravel, Inertia.js + React TypeScript
            </motion.p>
          </div>
          
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

