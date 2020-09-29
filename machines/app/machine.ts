import {createMachine} from 'xstate'
import {setConfigInContext, spawnActors} from './helpers'

export const appMachine = createMachine(
  {
    id: 'app',
    initial: 'init',
    context: {
      auth: null as never,
    },
    states: {
      init: {
        entry: 'spawnActors',
      },
    },
  },
  {
    actions: {spawnActors, setConfigInContext},
  },
)
