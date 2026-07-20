import { Navigate, useLocation } from 'react-router'
import type { ReactNode } from 'react'
import { useAuth } from '@/auth/AuthContext'

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center bg-zinc-50" role="status" aria-label="Verificando sessão">
        <span className="size-8 animate-spin rounded-full border-2 border-zinc-200 border-t-violet-600" />
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />

  return children
}
