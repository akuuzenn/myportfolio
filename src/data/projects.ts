export interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  features: string[]
  github?: string
}

export const projects: Project[] = [
  {
    title: "Sistem Manajemen Masjid",
    description: "Sistem lengkap untuk manajemen masjid yang mencakup pengelolaan keuangan, jadwal sholat, dan database jamaah.",
    image: "https://images.unsplash.com/photo-1573550937893-518f2497ef04?w=400&h=250&fit=crop",
    techStack: ["Laravel", "Inertia.js", "React TS", "MySQL"],
    features: [
      "CRUD Jamaah & Pengelolaan Keuangan",
      "Jadwal Sholat Otomatis via API",
      "Dashboard Admin dengan Role Permission",
      "Export Laporan PDF/Excel"
    ]
  },
  {
    title: "Dashboard Admin Role Permission",
    description: "Dashboard admin enterprise-level dengan sistem role-based permission yang komprehensif.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    techStack: ["Laravel", "Inertia.js", "React TS", "MySQL"],
    features: [
      "Role & Permission Management",
      "Real-time User Activity Log",
      "Advanced Search & Filtering",
      "Multi-tenant Architecture"
    ]
  },
  {
    title: "REST API Mobile App",
    description: "High-performance RESTful API untuk mendukung aplikasi mobile dengan fitur push notification dan real-time updates.",
    image: "https://images.unsplash.com/photo-1558494949-efed86f07fd4?w=400&h=250&fit=crop",
    techStack: ["Laravel", "MySQL", "Redis", "Pusher"],
    features: [
      "Rate Limiting & API Throttling",
      "JWT Authentication",
      "Push Notification System",
      "Real-time Status Updates"
    ]
  },
  {
    title: "E-Commerce Platform",
    description: "Platform e-commerce fullstack dengan payment gateway dan inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    features: [
      "Multi-vendor Support",
      "Real-time Inventory",
      "Advanced Admin Panel",
      "Mobile Responsive"
    ],
    github: "https://github.com/zenn-dev/ecommerce"
  },
  {
    title: "Task Management SaaS",
    description: "SaaS platform untuk manajemen task tim dengan kolaborasi real-time.",
    image: "https://images.unsplash.com/photo-1506784367998-0f86312bb7d7?w=400&h=250&fit=crop",
    techStack: ["React", "Socket.io", "MongoDB", "AWS"],
    features: [
      "Real-time Collaboration",
      "Drag & Drop Kanban",
      "Team Permissions",
      "Analytics Dashboard"
    ]
  },
  {
    title: "AI Chatbot Dashboard",
    description: "Dashboard untuk monitoring dan analitik chatbot AI berbasis LLM.",
    image: "https://images.unsplash.com/photo-1687194500939-631377e87c8b?w=400&h=250&fit=crop",
    techStack: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
    features: [
      "AI Response Analytics",
      "User Behavior Tracking",
      "Custom AI Training",
      "Multi-channel Support"
    ]
  },
  {
    title: "Fintech Wallet App",
    description: "Digital wallet dengan fitur crypto dan P2P transfer.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
    techStack: ["Flutter", "Firebase", "Node.js", "Blockchain"],
    features: [
      "Crypto Wallet Integration",
      "P2P Instant Transfer",
      "Advanced Security",
      "Biometric Auth"
    ]
  },
  {
    title: "Healthcare Appointment System",
    description: "Sistem janji temu dokter dengan video consultation.",
    image: "https://images.unsplash.com/photo-1576091160399-1d050e4b4bd3?w=400&h=250&fit=crop",
    techStack: ["Vue.js", "Laravel", "WebRTC", "MySQL"],
    features: [
      "Video Consultation",
      "Doctor Schedule Management",
      "Patient Medical Record",
      "Payment Integration"
    ]
  },
  {
    title: "Learning Management System",
    description: "LMS lengkap untuk kursus online dengan gamification.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    techStack: ["Django", "React", "PostgreSQL", "Redis"],
    features: [
      "Gamification System",
      "Progress Tracking",
      "Interactive Quizzes",
      "Certificate Generation"
    ]
  },
  {
    title: "Inventory Management ERP",
    description: "ERP lengkap untuk UKM dengan multi-warehouse support.",
    image: "https://images.unsplash.com/photo-1586528116311-26bbc0c88961?w=400&h=250&fit=crop",
    techStack: ["PHP", "Vue.js", "MySQL", "Barcode Scanner"],
    features: [
      "Multi Warehouse",
      "Barcode Integration",
      "Stock Movement Tracking",
      "Financial Reporting"
    ]
  }
]

