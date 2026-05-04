import { motion } from 'framer-motion'
import { Github, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/30 mt-24 bg-gradient-to-b from-background/80 to-background/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center text-center lg:text-left">
          {/* Logo & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-background">Z</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Zenn
              </h3>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mx-auto lg:mx-0 leading-relaxed">
              Backend Developer specialist dalam sistem scalable dan clean architecture.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="text-sm hover:text-primary transition-all duration-300 hover:translate-x-2">
                Home
              </a>
              <a href="#about" className="text-sm hover:text-primary transition-all duration-300 hover:translate-x-2">
                About
              </a>
              <a href="#techstack" className="text-sm hover:text-primary transition-all duration-300 hover:translate-x-2">
                Tech Stack
              </a>
              <a href="#projects" className="text-sm hover:text-primary transition-all duration-300 hover:translate-x-2">
                Projects
              </a>
              <a href="#contact" className="text-sm hover:text-primary transition-all duration-300 hover:translate-x-2">
                Contact
              </a>
            </nav>
          </motion.div>

          {/* Contact & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 pt-4 lg:pt-0 lg:text-right"
          >
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Let's Connect</h4>
              <div className="flex flex-col space-y-2 mb-6">
                <a href="mailto:hello@zenn.dev" className="flex items-center space-x-2 hover:text-primary transition-colors text-sm">
                  <Mail className="h-4 w-4" />
                  <span>hello@zenn.dev</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end space-x-4">
              <a href="https://github.com/zenn-dev" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 shadow-lg">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/zenn_dev" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 shadow-lg">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="group p-3 rounded-xl border hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 shadow-lg">
                <Phone className="h-6 w-6" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground border-t border-border/50 pt-4 mt-4">
              © 2024 Zenn. Dibuat dengan menggunakan React & Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

