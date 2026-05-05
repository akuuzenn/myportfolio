import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Tentang Saya
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-md" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-primary via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                Backend Architect
              </h3>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 blur opacity-75 -z-10 rounded-2xl" />
            </motion.div>
            
            <p className="text-xl lg:text-2xl leading-relaxed mb-8 opacity-95 font-medium max-w-2xl">
              Saya <span className="font-black text-foreground">Zenn</span>, Backend Architect dengan{' '}
              <span className="font-black text-primary">5+ tahun pengalaman</span> membangun sistem enterprise{' '}
              <span className="font-black text-secondary">scalable & robust</span>.
            </p>
            
            <div className="prose prose-lg max-w-none opacity-90">
              <p className="text-lg leading-relaxed mb-8">
                Spesialisasi saya adalah <span className="font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Laravel Enterprise Stack</span> dengan{' '}
                <span className="font-black bg-gradient-to-r from-blue-500 to-sky-500 bg-clip-text text-transparent">Inertia.js + React TypeScript</span>.
              </p>
              <p className="text-lg leading-relaxed">
                Ahli dalam <span className="font-semibold text-primary">System Design</span>, <span className="font-semibold text-orange-500">Database Optimization</span>, dan{' '}
                <span className="font-semibold text-emerald-500">High-Performance API</span>. Siap membangun fondasi{' '}
                <span className="font-black text-foreground">rock-solid</span> untuk bisnismu.
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30 mt-8"
            >
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-muted to-transparent backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-colors">
                <div className="text-3xl lg:text-4xl font-black text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-muted to-transparent backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-colors">
                <div className="text-3xl lg:text-4xl font-black text-emerald-500 mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Uptime</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-muted to-transparent backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-colors">
                <div className="text-3xl lg:text-4xl font-black text-secondary mb-1">5+</div>
                <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 space-y-6"
          >
            <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-xl border border-primary/20 shadow-2xl hover:shadow-primary/20 transition-all">
              <h4 className="text-2xl font-black mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-3">
                Core Expertise
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-background/60 rounded-2xl border border-border/50">
                  <div className="w-2 h-10 bg-gradient-to-b from-primary to-purple-500 rounded-full" />
                  <span className="font-semibold text-lg">Laravel Enterprise</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/60 rounded-2xl border border-border/50">
                  <div className="w-2 h-10 bg-gradient-to-b from-blue-500 to-sky-500 rounded-full" />
                  <span className="font-semibold text-lg">React + TypeScript</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/60 rounded-2xl border border-border/50">
                  <div className="w-2 h-10 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                  <span className="font-semibold text-lg">Database Optimization</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

