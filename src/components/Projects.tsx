import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-background border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
            >
              <div className="h-48 bg-gradient-to-br from-muted to-muted-foreground/20 rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <div className="text-5xl opacity-20">🚀</div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-primary">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-primary">Fitur Utama:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <button disabled className="flex-1 text-center py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium cursor-not-allowed opacity-75">
                  Live Demo Soon <ExternalLink className="h-4 w-4 ml-2" />
                </button>
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-muted rounded-lg hover:bg-muted-foreground/20 transition-colors flex items-center justify-center">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

