import { createContext, useContext, useState, useEffect } from 'react'
import { clients, coach } from '../data/mockData'

const AuthContext = createContext(null)

const ALL_USERS = [coach, ...clients]

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = sessionStorage.getItem('hbrd_user')
    return stored ? JSON.parse(stored) : null
  })

  const login = (email, password) => {
    const found = ALL_USERS.find(u => u.email === email && u.password === password)
    if (found) {
      const { password: _, ...safeUser } = found
      setUser(safeUser)
      sessionStorage.setItem('hbrd_user', JSON.stringify(safeUser))
      return { success: true, user: safeUser }
    }
    return { success: false, error: 'Email ou mot de passe incorrect.' }
  }

  const logout = () => {
    setUser(null)
    sessionStorage.removeItem('hbrd_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
