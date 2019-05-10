import ModuleLoader from './module-loader'
export default (Vue, options = {}) => {
  const context = {
    Vue,
    store: options.store,
    router: options.router
  }
  Vue.prototype.$moduleLoader = ModuleLoader(context)
  console.log(
    `%cvue-module-loader插件已安装`,
    'background: #4192d9; padding: 5px; color: #fff; border-radius: 5px'
  )
  if (!options.router) {
    console.log(
      `%c警告:%c您没有传入router实例，将不能合并路由配置。`,
      'background: #ffbf0b; padding: 5px; color: #926900; border-radius: 5px 0 0 5px',
      'background: #555; padding: 5px; color: #fff; border-radius: 0 5px 5px 0'
    )
  }
  if (!options.store) {
    console.log(
      `%c警告:%c您没有传入store实例，将不能合并状态配置。`,
      'background: #ffbf0b; padding: 5px; color: #926900; border-radius: 5px 0 0 5px',
      'background: #555; padding: 5px; color: #fff; border-radius: 0 5px 5px 0'
    )
  }
}
