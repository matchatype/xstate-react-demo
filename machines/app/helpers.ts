import {assign, spawn} from 'xstate'
import {authMachine} from '../auth/machine'

// Actions
export const setConfigInContext = assign<any, any>({
  config: (_context: any, event: any) => event.data,
})

export const spawnActors = assign({
  auth: () => spawn(authMachine, 'auth'),
})
