import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Button } from './ui/Button'

interface HeroProps {
  onUnlockScroll: () => void
}

export default function Hero({ onUnlockScroll }: HeroProps) {
  // Fungsi universal untuk buka kunci dan scroll ke target
  const handleAction = (targetId: string) => {
    onUnlockScroll();
    
    // Beri jeda sedikit agar App.tsx sempat melepas gaya 'position: fixed'
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50); // Jeda dipercepat agar terasa lebih responsif
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4 mb-8">
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-secondary/50 border border-border backdrop-blur-sm text-muted-foreground"
            >
              Backend Architect
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-tight tracking-tighter"
            >
              Zenn
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed text-muted-foreground font-medium"
            >
              Membangun sistem <span className="text-foreground font-semibold underline decoration-primary/30 underline-offset-4">Scalable Enterprise</span> dengan Laravel & React TypeScript.
            </motion.p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              className="px-8 py-6 rounded-xl group bg-foreground text-background hover:bg-foreground/90 transition-all" 
              onClick={() => handleAction('projects')}
            >
              Lihat Projects
              <ArrowDown className="h-4 w-4 ml-2 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button 
              className="px-8 py-6 rounded-xl border border-border hover:bg-muted transition-all"
              onClick={() => handleAction('contact')}
            >
                Hubungi Saya
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
