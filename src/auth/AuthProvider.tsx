import {
  GoogleAuthProvider,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getRedirectResult,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth'
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { AuthContext, type AuthContextValue } from '@/auth/AuthContext'
import { firebaseAuth, isFirebaseConfigured } from '@/lib/firebase'

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(Boolean(firebaseAuth))

  useEffect(() => {
    const auth = firebaseAuth
    if (!auth) return

    void setPersistence(auth, browserLocalPersistence)
      .then(() => getRedirectResult(auth))
      .catch(() => undefined)

    return onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser)
      setLoading(false)
    })
  }, [])

  const value = useMemo<AuthContextValue>(() => ({
    user,
    loading,
    configured: isFirebaseConfigured,
    signInWithGoogle: async () => {
      const auth = firebaseAuth
      if (!auth) throw new Error('firebase-not-configured')
      await setPersistence(auth, browserLocalPersistence)
      try {
        await signInWithPopup(auth, googleProvider)
      } catch (error) {
        const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : ''
        if (code === 'auth/popup-blocked') {
          await signInWithRedirect(auth, googleProvider)
          return
        }
        throw error
      }
    },
    signUpWithEmail: async (email, password) => {
      const auth = firebaseAuth
      if (!auth) throw new Error('firebase-not-configured')
      await setPersistence(auth, browserLocalPersistence)
      await createUserWithEmailAndPassword(auth, email, password)
    },
    signInWithEmail: async (email, password) => {
      const auth = firebaseAuth
      if (!auth) throw new Error('firebase-not-configured')
      await setPersistence(auth, browserLocalPersistence)
      await signInWithEmailAndPassword(auth, email, password)
    },
    logout: async () => {
      const auth = firebaseAuth
      if (!auth) return
      await signOut(auth)
    },
  }), [loading, user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
