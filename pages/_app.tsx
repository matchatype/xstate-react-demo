import {useMachine} from '@xstate/react'
import {AppProps} from 'next/app'
import {AuthProvider} from '../contexts/auth-context'
import {appMachine} from '../machines/app/machine'

const CustomApp = ({Component, pageProps}: AppProps) => {
  const [state] = useMachine(appMachine, {devTools: true})

  return (
    <AuthProvider actor={state.context.auth}>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

CustomApp.displayName = 'App'

export default CustomApp
