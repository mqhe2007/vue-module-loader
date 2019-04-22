import moduleLoader from './module-loader'
export default (Vue, options) => {
  Vue.prototype.$moduleLoader = moduleLoader
  console.log(
    `%cvue-module-loader插件已安装`,
    'background: #4192d9; padding: 5px; color: #fff; border-radius: 5px'
  )
}
