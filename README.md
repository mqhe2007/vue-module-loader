# vue-module-loader

> 面向Vue3的版本请先查看`next`分支，请勿用于生产项目。

vue-module-loader 是一个 Vue 插件，让你使用类似于[微前端](https://www.thoughtworks.com/radar/techniques/micro-frontends)的架构开发 Vue 应用。

Let you use the micro front-end architecture to build Vue applications

推荐使用`vue-module-creator`生成样板工程。

```
$ yarn global add vue-module-creator
$ vmc create
```
## 谁在使用

![guogongzhineng](https://user-images.githubusercontent.com/13450661/122190121-1ec3ea80-cec4-11eb-87bf-1f657c70ae8a.png)


## 安装

```
yarn add vue-module-loader
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
