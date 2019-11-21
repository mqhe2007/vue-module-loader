---
home: true
actionText: 快速上手 →
actionLink: /guide/
features:
  - title: 模块可基于@vue/cli
    details: vue-module-loader 可加载基于 vue 生态的最佳脚手架方案@vue/cli导出的微前端模块，@vue/cli配置简单，功能强大，推荐使用。
  - title: 官方API
    details: vue-module-loader 的大部分能力都借助Vue, vue-router, vuex的官方API组合实现，使用成本极低。
  - title: 内置工具
    details: 内置事件总线工具，当给插件配置vuex store实例后还支持动态组件功能
footer: Copyright © 2019 mengqinghe.com
---

## 安装

```
yarn add vue-module-loader
```

## 使用

```js
// 导入插件
import Vue from 'vue'
import vueModuleLoader from 'vue-module-loader'
Vue.use(vueModuleLoader)

const app = new Vue({...})
// 加载模块
app.$moduleLoader({
  module1: '//domain.com/module-a.js'
})
```

## 进群交流

![qq群](/group.png)
