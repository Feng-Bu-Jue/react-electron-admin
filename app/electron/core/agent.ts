import { Actions } from '../types'

export const actions: Actions = new Proxy(
  {},
  {
    get(obj, key: keyof Actions) {
      return (...params: any[]) => window._agent.call(key, ...params)
    },
  }
) as Actions

export const agent = window._agent
