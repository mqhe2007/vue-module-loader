# 实例 API 扩展

## vm.$moduleLoader

- #### 参数:

  - {Object | Function} moduleUrl | moduleInitFunction

- #### 用法:

  动态加载一个微前端模块，参数支持两种方式：

  1. 包含多个模块地址的对象，此时方法返回 Promise，但是无论模块是否加载成功，永远都会 resolve。

  ```javascript
  this.$moduleLoader({
    'module-a': 'https://www.domain.com/modulea.umd.js'
  }).then(() => {
    // 加载过程完毕
  })
  ```

  1. 模块函数

  ```javascript
  import moduleA from './module-a.js'
  this.$moduleLoader(moduleA)
  ```

## vm.$dynamicComponent

动态组件工具，通过 `vm.$dynamicComponent` 上的若干个方法进行使用，具体说明如下：

动态组件——普通的 vue 单文件组件，可以由微前端模块携带并添加到 vuex store 中，供 vue 内置的`component`组件渲染使用。

当添加`vue-module-loader`插件时传入 vuex`store`实例，即会自动在 vuex store 中创建命名空间为`dynamicComponent`的储存模块。

```js
import Vue from 'vue'
import Vuex form 'vuex'
import vueModuleLoader from 'vue-module-loader'
const store = new Vuex.Store({
  // ...
})
Vue.use(vueModuleLoader, {store})
```

dynamicComponent 状态库中默认有插槽位置`GLOBAL`，当调用下列方法时不传`position`，组件既存在`GLOBAL`位置中；如果指定了`position`，讲被存在指定的插槽位置中。实际情况可以使用`vue-devtools`进行查看。

**我们约定动态组件插槽位置名称使用全大写表示。**

### .create

创建动态组件方法

- 参数:

  - {Object} component (必选)

  - {String} position

- 用法:

```javascript
import AComponent from './AComponent.vue'
this.$dynamicComponent.add(AComponent, 'HEADER')
```

### .destroy

移除某个动态组件插槽内的某个组件，如果不传 position 参数，默认会去“GLOBAL”的位置查找。

- 参数:

  - {String} componentName

  - {String} position

- 用法:

```javascript
this.$dynamicComponent.remove('componentName', 'HEADER')
```

## vm.$eventBus

事件总线工具，通过 `vm.$eventBus` 上的若干个方法进行使用，具体说明如下：

### .on

- #### 参数:

  - {String} eventName

  - {Function} handler

监听一个事件，并且指定处理函数。

:::warning
匿名处理函数无法取消监听，具名函数可以被`off`方法取消监听。
:::

### .emit

- #### 参数:

  - {String} eventName

  - {any} payload

触发一个事件，并且发送任意数据作为监听方法处理函数的参数。

### .off

- #### 参数:

  - {String} eventName

  - {Function} handler

取消一个事件的指定处理函数。

:::warning
监听时如果是匿名处理函数无法取消监听。
:::

### .clear

- #### 参数: 无

清空 eventBus，这会取消所有事件监听。

### .getEvents

- #### 参数: 无

获取所有已监听事件列表
