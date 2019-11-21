# vue-module-loader

vue-module-loader 是一个 Vue 插件，让你使用类似于[微前端](https://www.thoughtworks.com/radar/techniques/micro-frontends)的架构开发 Vue 应用。
Let you use the micro front-end architecture to build Vue applications
推荐使用`admincraft-cli`生成样板工程。

```
$ yarn global add admincraft-cli
$ vmm init
```

## 安装

```
yarn add vue-module-loader@next
```

## 快速开始

```javascript
// 导入插件
import Vue from 'vue'
import vueModuleLoader from 'vue-module-loader'
// 安装使用，配置项中router实例和store实例必传。
Vue.use(vueModuleLoader, { router, store })
const app = new Vue({...})
// 使用插件提供的能力
app.$moduleLoader({
  module1: '//domain.com/module1.js'
})
```
