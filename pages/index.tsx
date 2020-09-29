import {NextPage} from 'next'
import {useState} from 'react'
import {useAuth} from '../contexts/auth-context'

const Index: NextPage = () => {
  const [state, send] = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  }

  const signIn = (event: any) => {
    event.preventDefault()
    send({type: 'SIGN_IN', data: {email, password}})
    setEmail('')
    setPassword('')
  }

  const signOut = () => {
    send({type: 'SIGN_OUT'})
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={signIn}>
        <input type="email" value={email} onChange={handleEmailChange} />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" />
      </form>
      {state.context.user ? (
        <div>
          <p>Signed in as {JSON.stringify(state.context.user.email)}.</p>
        </div>
      ) : (
        <div>
          <p>Signed out.</p>
        </div>
      )}
      {state.matches('authenticated') && (
        <button onClick={signOut}>Sign out</button>
      )}
    </div>
  )
}

Index.displayName = 'Home'

export default Index
