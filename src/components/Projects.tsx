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

          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group bg-background border rounded-lg md:rounded-2xl p-3 md:p-8 shadow-md md:shadow-xl hover:shadow-lg md:hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative mb-3 md:mb-6 overflow-hidden rounded-lg md:rounded-xl group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-36 md:h-48 object-cover rounded-md md:rounded-lg" 
                  loading="lazy"
                />
                <div className="absolute bottom-1 md:hidden left-1 right-1 bg-background/95 backdrop-blur-sm p-1.5 rounded-md">
                  <h3 className="font-bold text-sm">{project.title}</h3>
                </div>
              </div>
              
              {/* Desktop title */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 group-hover:text-primary transition-colors hidden md:block">{project.title}</h3>

              <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-6 leading-relaxed line-clamp-2 md:line-clamp-none">{project.description}</p>
              
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

              {/* Fitur Utama hidden on mobile */}
              <div className="hidden md:block mb-8">
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

              <div className="flex gap-1.5 pt-2 border-t border-border/30 mt-auto">
                <button disabled className="flex-1 py-1.5 px-2 bg-primary text-primary-foreground rounded text-xs font-medium cursor-not-allowed opacity-75">
                  Live <ExternalLink className="h-3 w-3 ml-1 inline" />
                </button>
                <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-muted rounded hover:bg-muted-foreground/20 transition-colors flex items-center justify-center">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

