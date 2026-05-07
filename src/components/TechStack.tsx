import { motion } from 'framer-motion'
import { Database, Code, Smartphone, Server } from 'lucide-react'

const techStack = [
  { name: 'Laravel', icon: Server },
  { name: 'React TS', icon: Code },
  { name: 'Inertia.js', icon: Code },
  { name: 'MySQL', icon: Database },
  { name: 'REST API', icon: Smartphone },
]

export default function TechStack() {
  return (
    <section id="techstack" className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech Stack
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer shadow-sm"
              >
                <motion.div
                  className="relative z-10"
                >
                  <tech.icon className="h-10 w-10 mb-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </motion.div>
                <motion.span 
                  className="font-semibold text-sm tracking-tight text-foreground"
                >
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
