import {useService} from '@xstate/react'
import {createContext, useContext, useEffect} from 'react'
import {auth} from '../lib/firebase/client'

export const onAuthStateChanged = (send: any) =>
  auth.onAuthStateChanged(user => {
    if (user) {
      send({type: 'AUTHENTICATED', data: {user}})
    } else {
      send({type: 'UNAUTHENTICATED'})
    }
  })

// Create context
const AuthContext = createContext<any>(null as never)

// Context provider
export const AuthProvider = ({children, actor}: any) => {
  const [state, send] = useService(actor)

  useEffect(() => {
    return onAuthStateChanged(send)
  }, [])

  return (
    <AuthContext.Provider value={[state, send]}>
      {children}
    </AuthContext.Provider>
  )
}

// useAuth custom hook
export const useAuth = () => {
  return useContext(AuthContext)
}
