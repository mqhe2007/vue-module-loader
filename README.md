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

```javascript
import vueModuleLoader from 'vue-module-loader'
Vue.use(vueModuleLoader)
let app = new Vue({
  router,
  store,
  render: h => h('h1', 'vue-module-loader')
})
const moduleByUrl = {
  a: 'http://xx.xxx.com/a.js',
  b: 'http://xx.xxx.com/b.js'
}
moduleByLocal = require('./module-a.js')
app.$moduleLoader(moduleByUrl)
app.$moduleLoader(moduleByLocal)
```
