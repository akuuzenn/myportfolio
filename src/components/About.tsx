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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Backend Specialist</h3>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              Saya Zenn, Backend Developer dengan pengalaman mendalam dalam membangun sistem yang scalable dan maintainable. 
              Spesialisasi saya adalah <span className="font-semibold">Laravel</span> dengan <span className="font-semibold">Inertia.js + React TypeScript</span>.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Fokus utama saya adalah menciptakan API yang robust, database optimization, dan architecture yang clean. 
              Saya juga berpengalaman dalam system design untuk aplikasi enterprise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-background border shadow-xl">
              <h4 className="text-xl font-bold mb-3">Expertise</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• API Development &amp; Optimization</li>
                <li>• Database Design &amp; Performance</li>
                <li>• Microservices Architecture</li>
                <li>• Real-time Applications</li>
                <li>• Security &amp; Authentication</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

