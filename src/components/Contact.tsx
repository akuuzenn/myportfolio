import { motion } from 'framer-motion'
import { Mail, Github, Twitter } from 'lucide-react'
import { Button } from './ui/Button'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'zenn@example.com',
      href: 'mailto:zenn@example.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@zenn-dev',
      href: 'https://github.com/zenn-dev'
    }
  ]

  return (
    <section id="contact" className="py-32 bg-gradient-to-t from-background via-muted/50 to-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tertarik bekerja sama? Kirim pesan atau email saya untuk diskusi project.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center max-w-3xl mx-auto"
        >
          <div className="space-y-8">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center p-6 bg-background border rounded-2xl hover:shadow-xl transition-all hover:-translate-x-2"
              >
                <contact.icon className="h-8 w-8 text-primary mr-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{contact.label}</p>
                  <a href={contact.href} className="font-semibold hover:text-primary transition-colors">
                    {contact.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-12 text-center group hover:shadow-2xl hover:shadow-primary/10 transition-all">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-2xl mx-auto mb-8 shadow-lg group-hover:scale-105 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Ready for Next Project?</h3>
              <Button size="lg" className="w-full">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

