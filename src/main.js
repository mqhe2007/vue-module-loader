import dynamicComponent from './ability/dynamicComponent/index'
import dynamicComponentState from './ability/dynamicComponent/storeModule'
import eventBus from './ability/eventBus'
import moduleLoader from './ability/moduleLoader'
export default function(Vue, options = {}) {
  Vue.prototype.$eventBus = eventBus()
  Vue.prototype.$moduleLoader = moduleLoader
  if (options.store) {
    options.store.registerModule('dynamicComponent', dynamicComponentState)
    Vue.prototype.$dynamicComponent = dynamicComponent(options.store)
  }
}
