import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tighter">
            Tentang Saya
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground tracking-tight">
                Backend Architect
              </h3>
            </motion.div>
            
            <p className="text-lg lg:text-xl leading-relaxed mb-8 text-muted-foreground font-medium max-w-2xl">
              Saya <span className="font-bold text-foreground">Zenn</span>, Backend Architect dengan{' '}
              <span className="text-foreground">5+ tahun pengalaman</span> membangun sistem enterprise{' '}
              <span className="text-foreground">scalable & robust</span>.
            </p>
            
            <div className="prose prose-lg max-w-none opacity-90">
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                Fokus utama saya adalah arsitektur bersih menggunakan Laravel Stack, optimasi database, dan performa tinggi pada API.
              </p>
            </div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30 mt-8"
            >
              <div className="text-center p-4">
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1 tracking-tighter">50+</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Projects</div>
              </div>
              <div className="text-center p-4 border-x border-border/50">
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1 tracking-tighter">99.9%</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Uptime</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1 tracking-tighter">5+</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Years</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 space-y-6"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-sm transition-all">
              <h4 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3 tracking-tight">
                Core Expertise
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border/50 transition-colors hover:bg-muted">
                  <div className="w-1 h-6 bg-primary rounded-full" />
                  <span className="font-semibold text-lg">Laravel Enterprise</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border/50 transition-colors hover:bg-muted">
                  <div className="w-1 h-6 bg-slate-400 rounded-full" />
                  <span className="font-semibold text-lg">React + TypeScript</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border/50 transition-colors hover:bg-muted">
                  <div className="w-1 h-6 bg-slate-600 rounded-full" />
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
