import state from './state'
import getter from './getter'
import setter from './setter'

let store = new Proxy(state, {
  get(target, prop) {
    return getter[prop] ? getter[prop](target[prop]) : target[prop]
  },
  set(target, prop, val) {
    if (setter[prop]) val = setter[prop](val)
    return (target[prop] = val)
  }
})

export default store
