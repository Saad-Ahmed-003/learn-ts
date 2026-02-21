// src/routes/index.tsx
import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PATHS from './paths'
import ProtectedRoute from './ProtectedRoute'
import RootLayout from '@/layouts/RootLayout'

// Lazy load all pages — they only load when visited
const HomePage = lazy(() => import('@/pages/HomePage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const DashboardPage = lazy(() => import('@/pages/dashboard/DashboardPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

// Simulate your auth check — replace with your real auth logic
// e.g. reading from context, zustand, redux, etc.
const isAuthenticated = () => !!localStorage.getItem('token')
const isAdmin = () => localStorage.getItem('role') === 'admin'

// createBrowserRouter is the modern v6.4+ way — replaces <BrowserRouter>
const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <RootLayout />,          // ← wraps everything
    children: [

      // Public routes
      { index: true, element: <HomePage /> },
      { path: PATHS.LOGIN, element: <LoginPage /> },

      // Protected routes — user must be logged in
      {
        element: <ProtectedRoute isAllowed={isAuthenticated()} />,
        children: [
          { path: PATHS.DASHBOARD, element: <DashboardPage /> },
        ],
      },

      // Admin only routes
      {
        element: (
          <ProtectedRoute
            isAllowed={isAuthenticated() && isAdmin()}
            redirectTo={PATHS.DASHBOARD}
          />
        ),
        children: [
          { path: PATHS.ADMIN_DASHBOARD, element: <DashboardPage /> },
        ],
      },

      // 404 catch-all
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

// Wrap everything in Suspense for the lazy loading to work
export default function AppRouter() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}