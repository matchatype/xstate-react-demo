import {assign, createMachine} from 'xstate'
import {signIn, signOut} from './helpers'

export const authMachine = createMachine(
  {
    id: 'auth',
    initial: 'idle',
    context: {
      user: null,
    },
    states: {
      idle: {
        on: {
          AUTHENTICATED: {
            target: 'authenticated',
          },
          UNAUTHENTICATED: {
            target: 'unauthenticated',
          },
        },
      },
      authenticated: {
        on: {
          SIGN_OUT: {
            target: 'signingOut',
          },
        },
      },
      unauthenticated: {
        on: {
          SIGN_IN: {
            target: 'signingIn',
          },
        },
      },
      signingIn: {
        invoke: {
          src: 'signIn',
          onDone: {
            target: 'authenticated',
            actions: [
              assign({
                user: (_context: any, event: any) => event.data.user,
              }),
            ],
          },
        },
      },
      signingOut: {
        invoke: {
          src: 'signOut',
          onDone: {
            target: 'unauthenticated',
            actions: [
              assign({
                user: () => null,
              }),
            ],
          },
        },
      },
    },
  },
  {services: {signIn, signOut}},
)
