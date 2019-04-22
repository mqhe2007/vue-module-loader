import moduleLoader from './module-loader'
export default (Vue, options) => {
  Vue.prototype.$moduleLoader = moduleLoader
}
