'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Code, Database } from 'lucide-react'
import { Project } from '../../data/projects'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          className="max-w-4xl max-h-[90vh] w-full bg-background/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 lg:p-12">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-1.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-xl transition-colors group"
              >
                <X className="h-6 w-6 text-muted-foreground group-hover:text-foreground" />
              </button>
            </div>

            {/* Image/Visual */}
            <div className="mb-12">
              <div className="h-64 lg:h-80 bg-gradient-to-br from-muted to-muted-foreground/10 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
                <div className="text-6xl opacity-10">📱</div>
              </div>
            </div>

            {/* Description */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Problem & Solusi
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Fitur Utama
                </h4>
                <ul className="space-y-3">
                  {project.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl hover:bg-muted-foreground/10 transition-colors">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-8 border-t border-border/50">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold py-4 px-6 rounded-2xl text-center hover:shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Github className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                View Code
              </a>
              <button 
                className="flex-1 bg-gradient-to-r from-muted to-muted-foreground/50 border border-border/50 text-foreground font-bold py-4 px-6 rounded-2xl hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 flex items-center justify-center gap-3"
                onClick={onClose}
              >
                <ExternalLink className="h-5 w-5" />
                Live Demo Soon
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

