import { motion } from 'framer-motion'
import { Database, Code, Smartphone, Server } from 'lucide-react'

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

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -10, rotate: 2 }}
                viewport={{ once: true }}
                className="group relative p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-background/80 to-muted backdrop-blur-xl border border-border/30 shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 h-36 lg:h-44 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-2"
              >
                {/* Glow effect */}
                <motion.div 
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity`}
                  style={{ backgroundColor: tech.color.replace('text-', '') }}
                  animate={['initial', 'whileHover']}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="relative z-10"
                >
                  <tech.icon className={`h-14 w-14 lg:h-16 lg:w-16 mb-4 ${tech.color} drop-shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`} />
                </motion.div>
                <motion.span 
                  className="font-bold text-sm lg:text-base tracking-wide bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:scale-105"
                  initial={{ y: 4, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {tech.name}
                </motion.span>
                {/* Tech subtitle */}
                <motion.span 
                  className="text-xs text-muted-foreground/70 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ y: 4 }}
                  whileHover={{ y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Expert
                </motion.span>
              </motion.div>
            ))}
          </div>
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/2 via-transparent to-secondary/2 -z-10 blur-3xl rounded-3xl" />
        </div>
      </div>
    </section>
  )
}

