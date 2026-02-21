// src/layouts/RootLayout.tsx
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Your Navbar component would go here */}
      {/* <Navbar /> */}

      <main className="container mx-auto px-4 py-8">
        <Outlet /> {/* ← child pages render here */}
      </main>

      {/* <Footer /> */}
    </div>
  )
}