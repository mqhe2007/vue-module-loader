# vue-module-loader

可以远程加载一个 [vue 模块](https://mqhe2007.github.io/admincraft/guide/#%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97)。

Can load a [vue module](https://mqhe2007.github.io/admincraft/guide/#%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E6%A8%A1%E5%9D%97) remotely.

更强大的分布式前端开发架构，请使用[Admincraft](https://mqhe2007.github.io/admincraft/)

More powerful distributed front-end development architecture，please use [Admincraft](https://mqhe2007.github.io/admincraft/)

## 安装

```
yarn add vue-module-loader
```

## 使用


1. 编写模块

```javascript
import routes from './routes.js'
import storeModule from './storeModule.js'
import customMethods from './customMethods.js'

export default ({Vue, store, router}) => {
  Vue.prototype.$customMethods = customMethods
  router.addRoutes(routes)
  store.registerModule('moduleName', storeModule)
}
```

2. 主系统中加载模块

```javascript
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vueModuleLoader from 'vue-module-loader'
Vue.use(VueRouter)
Vue.use(Vuex)
const router = new VueRouter()
const store = new Vuex.Store()
Vue.use(vueModuleLoader, {
  router, // 合并路由配置必传。
  store // 合并状态配置必传。
})
let app = new Vue({
  router,
  store,
  render: h => h('h1', 'vue-module-loader')
})
const moduleByUrl = {
  a: 'http://xx.xxx.com/a.js',
  b: 'http://xx.xxx.com/b.js'
}
const moduleByLocal = require('./module-a.js')
app.$moduleLoader(moduleByUrl)
app.$moduleLoader(moduleByLocal)
```
