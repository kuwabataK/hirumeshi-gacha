import { CounterStore } from './CounterStore'
import { AuthStore } from './AuthStore'
import { configure } from 'mobx'

configure({ enforceActions: 'always' })

export default {
  counterStore: new CounterStore(),
  authStore: new AuthStore()
}
