// src/pages/dashboard/DashboardPage.tsx
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import PATHS from '@/routes/paths'
import { LogOut, TrendingUp, Users, FileText, Activity } from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  positive?: boolean
}

// ─── Sub-component: Stat Card ─────────────────────────────────────────────────
function StatCard({ title, value, change, icon, positive = true }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardDescription className="text-sm font-medium">{title}</CardDescription>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
        <p className={`text-xs mt-1 ${positive ? 'text-green-500' : 'text-red-500'}`}>
          {change} from last month
        </p>
      </CardContent>
    </Card>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // 🔁 Replace with your real logout logic
    localStorage.removeItem('token')
    navigate(PATHS.LOGIN)
  }

  // 🔁 Replace with real user data from your auth context / store
  const user = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    role: 'Admin',
    initials: 'JD',
  }

  const stats = [
    {
      title: 'Total Users',
      value: '1,284',
      change: '+12%',
      icon: <Users className="h-4 w-4" />,
      positive: true,
    },
    {
      title: 'Reports Filed',
      value: '340',
      change: '+8%',
      icon: <FileText className="h-4 w-4" />,
      positive: true,
    },
    {
      title: 'Active Sessions',
      value: '57',
      change: '-3%',
      icon: <Activity className="h-4 w-4" />,
      positive: false,
    },
    {
      title: 'Growth Rate',
      value: '24.5%',
      change: '+4%',
      icon: <TrendingUp className="h-4 w-4" />,
      positive: true,
    },
  ]

  const recentActivity = [
    { id: 1, action: 'New report submitted', time: '2 minutes ago', type: 'report' },
    { id: 2, action: 'User account created', time: '15 minutes ago', type: 'user' },
    { id: 3, action: 'Case #1042 updated', time: '1 hour ago', type: 'case' },
    { id: 4, action: 'System backup completed', time: '3 hours ago', type: 'system' },
  ]

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Welcome back, {user.name}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* User Info */}
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-sm font-medium">{user.name}</span>
            <Badge variant="secondary" className="text-xs">{user.role}</Badge>
          </div>
          <Avatar>
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>

          {/* Logout */}
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-1" />
            Logout
          </Button>
        </div>
      </div>

      <Separator />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Activity</CardTitle>
          <CardDescription>Latest events across the platform</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {recentActivity.map((item, index) => (
            <div key={item.id}>
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">{item.action}</span>
                </div>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
              {index < recentActivity.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

    </div>
  )
}