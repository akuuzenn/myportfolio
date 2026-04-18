import { motion } from 'framer-motion'
import { Github, Database, Code, Smartphone, Server } from 'lucide-react'

const techStack = [
  { name: 'Laravel', icon: Server, color: 'text-red-500' },
  { name: 'React TS', icon: Code, color: 'text-blue-500' },
  { name: 'Inertia.js', icon: Code, color: 'text-purple-500' },
  { name: 'MySQL', icon: Database, color: 'text-orange-500' },
  { name: 'REST API', icon: Smartphone, color: 'text-green-500' },
]

export default function TechStack() {
  return (
    <section id="techstack" className="py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center p-8 rounded-2xl bg-background border shadow-lg hover:shadow-2xl transition-all duration-300 h-32 justify-center"
            >
              <tech.icon className={`h-12 w-12 mb-4 ${tech.color} group-hover:scale-110 transition-transform`} />
              <span className="font-semibold text-lg group-hover:text-primary transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

