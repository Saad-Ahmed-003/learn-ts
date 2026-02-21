// src/pages/NotFoundPage.tsx
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import PATHS from '@/routes/paths'
import { MoveLeft, Home } from 'lucide-react'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 gap-4">

      {/* Big 404 */}
      <h1 className="text-[8rem] font-black leading-none text-muted-foreground/20 select-none">
        404
      </h1>

      {/* Message */}
      <div className="flex flex-col gap-2 -mt-4">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-sm">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-2">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <MoveLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
        <Button onClick={() => navigate(PATHS.HOME)}>
          <Home className="mr-2 h-4 w-4" />
          Home
        </Button>
      </div>

    </div>
  )
}