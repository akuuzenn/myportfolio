import { motion } from 'framer-motion'
import { Github, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-16 bg-gradient-to-r from-slate-800/30 via-indigo-500/10 to-purple-600/20 backdrop-blur-xl shadow-xl ring-1 ring-primary/10">
      <div className="container mx-auto px-4 py-8 lg:py-10 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
          {/* Logo & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary via-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl ring-1 ring-primary/20">
                <span className="text-2xl font-black text-background drop-shadow-sm">Z</span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                Zenn
              </h3>
            </div>
            <p className="text-muted-foreground/90 text-xs lg:text-sm max-w-md mx-auto lg:mx-0 leading-relaxed font-semibold">
              Backend Developer specialist dalam sistem scalable dan clean architecture.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 lg:text-center"
          >
            <h4 className="text-lg font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className="group text-xs lg:text-sm font-semibold hover:text-primary transition-all duration-300 hover:translate-x-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full">
                Home
              </a>
              <a href="#about" className="group text-xs lg:text-sm font-semibold hover:text-primary transition-all duration-300 hover:translate-x-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full">
                About
              </a>
              <a href="#techstack" className="group text-xs lg:text-sm font-semibold hover:text-primary transition-all duration-300 hover:translate-x-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full">
                Tech Stack
              </a>
              <a href="#projects" className="group text-xs lg:text-sm font-semibold hover:text-primary transition-all duration-300 hover:translate-x-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full">
                Projects
              </a>
              <a href="#contact" className="group text-xs lg:text-sm font-semibold hover:text-primary transition-all duration-300 hover:translate-x-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full">
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
            className="space-y-6 lg:text-right"
          >
            <div>
              <h4 className="text-lg font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-3">Let's Connect</h4>
              <div className="flex flex-col space-y-2 mb-6 max-w-xs mx-auto lg:mx-0">
                <a href="mailto:email saya" className="group flex items-center space-x-2 hover:text-primary transition-all duration-300 hover:gap-3 text-sm font-semibold">
                  <Mail className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>email saya</span>
                </a>
                <a href="https://wa.me/628123456789" className="group flex items-center space-x-2 hover:text-primary transition-all duration-300 hover:gap-3 text-sm font-semibold">
                  <Phone className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+62 812 3456 7890</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end space-x-4 pt-2">
              <a href="https://github.com/zenn-dev" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-3.5 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-400 hover:scale-110 hover:rotate-3 shadow-xl hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm">
                <Github className="h-5 w-5 text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </a>
              <a href="https://instagram.com/zenn_dev" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-3.5 rounded-2xl border border-border/50 hover:border-primary/50 hover:bg-gradient-to-br hover:from-primary/10 hover:to-secondary/10 transition-all duration-400 hover:scale-110 hover:rotate-3 shadow-xl hover:shadow-2xl hover:shadow-primary/10 backdrop-blur-sm">
                <Instagram className="h-5 w-5 text-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </a>
              <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" 
                 className="group relative p-3.5 rounded-2xl border border-border/50 hover:border-green-500/50 hover:bg-gradient-to-br hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-400 hover:scale-110 hover:rotate-3 shadow-xl hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm">
                <Phone className="h-5 w-5 text-foreground group-hover:text-green-500 transition-all duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </a>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="col-span-full pt-4 mt-6 border-t border-border/40">
            <p className="text-xs text-muted-foreground/70 font-semibold text-center tracking-wide">
              © 2024 Zenn. Dibuat dengan ❤️ menggunakan React, TS & Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

