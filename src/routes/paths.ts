// src/routes/paths.ts

const PATHS = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  ADMIN_DASHBOARD: '/dashboard/admin',
  REPORT: '/report',
  ANONYMOUS_REPORT: '/anonymous-report',
  GUIDELINES: '/guidelines',
} as const

// This creates a union type of all path values:
// '/' | '/login' | '/dashboard' | ...
export type AppPath = (typeof PATHS)[keyof typeof PATHS]

export default PATHS