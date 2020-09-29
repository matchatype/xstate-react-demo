import {auth} from '../../lib/firebase/client'

export const signIn = async (_context: any, event: any) => {
  const {email, password} = event.data
  return auth.signInWithEmailAndPassword(email, password)
}

export const signOut = async () => auth.signOut()
