export interface Project {
  title: string
  description: string
  techStack: string[]
  features: string[]
  github?: string
}

export const projects: Project[] = [
  {
    title: "Sistem Manajemen Masjid",
    description: "Sistem lengkap untuk manajemen masjid yang mencakup pengelolaan keuangan, jadwal sholat, dan database jamaah.",
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
    techStack: ["Laravel", "MySQL", "Redis", "Pusher"],
    features: [
      "Rate Limiting & API Throttling",
      "JWT Authentication",
      "Push Notification System",
      "Real-time Status Updates"
    ]
  }
]

