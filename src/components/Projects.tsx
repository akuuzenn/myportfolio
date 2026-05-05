import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectModal from './ui/ProjectModal'
import { useState } from 'react'
import { Project } from '../data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full shadow-sm" />
        </motion.div>

        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent pb-6 -mb-6">
          <div className="flex gap-6 px-4">
            {projects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex-none w-80 h-96 bg-gradient-to-br from-background to-muted border border-border/50 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-primary/10 cursor-pointer group backdrop-blur-md hover:backdrop-blur-xl transition-all duration-500 overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/15 group-hover:to-secondary/15 transition-all duration-500 rounded-t-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="h-8 w-8 text-primary/80" />
                  </div>
                  <div className="h-full flex items-center justify-center">
                    <div className="text-5xl opacity-5 group-hover:opacity-10 transition-opacity">🚀</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted/50 text-xs font-semibold rounded-md text-muted-foreground group-hover:text-primary transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-3 border-t border-border/30">
                    <span className="text-xs text-muted-foreground font-semibold">
                      {project.features.length} Fitur
                    </span>
                    <div className="h-1 bg-gradient-to-r from-primary to-secondary w-full rounded-full group-hover:w-full transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  )
}

