// src/pages/HomePage.tsx
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import PATHS from '@/routes/paths'
import { ArrowRight, Shield, Zap, LayoutDashboard } from 'lucide-react'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 gap-6">

      {/* Badge */}
      <Badge variant="secondary" className="text-xs tracking-widest uppercase px-4 py-1">
        Welcome
      </Badge>

      {/* Headline */}
      <h1 className="text-5xl font-bold tracking-tight max-w-2xl leading-tight">
        Your App Starts <span className="text-primary">Here</span>
      </h1>

      <p className="text-muted-foreground text-lg max-w-md">
        A clean, scalable React + TypeScript starter with shadcn/ui, Tailwind,
        and React Router v6 already wired up.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-3 mt-2">
        <Button onClick={() => navigate(PATHS.DASHBOARD)}>
          Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" onClick={() => navigate(PATHS.LOGIN)}>
          Sign In
        </Button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 w-full max-w-2xl text-left">
        {[
          {
            icon: <Shield className="h-5 w-5 text-primary" />,
            title: 'Protected Routes',
            desc: 'Auth guards built in with clean redirect logic.',
          },
          {
            icon: <Zap className="h-5 w-5 text-primary" />,
            title: 'Lazy Loading',
            desc: 'Every page loads only when the user visits it.',
          },
          {
            icon: <LayoutDashboard className="h-5 w-5 text-primary" />,
            title: 'Typed Paths',
            desc: 'No more string typos — all routes are type-safe.',
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-xl border bg-card p-5 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow"
          >
            {card.icon}
            <h3 className="font-semibold text-sm">{card.title}</h3>
            <p className="text-xs text-muted-foreground">{card.desc}</p>
          </div>
        ))}
      </div>

    </div>
  )
}