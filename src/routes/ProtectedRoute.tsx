// src/routes/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom'
import PATHS from './paths'

interface ProtectedRouteProps {
  isAllowed: boolean
  redirectTo?: string
  adminOnly?: boolean
}

export default function ProtectedRoute({
  isAllowed,
  redirectTo = PATHS.LOGIN,
}: ProtectedRouteProps) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />
  }

  // Outlet renders whatever child route is matched
  return <Outlet />
}