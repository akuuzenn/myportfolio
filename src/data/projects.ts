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
  }
]

