# 指南

vue-module-loader 是基于 Vue 生态的微前端模块加载器，本质上是[Vue 插件](https://cn.vuejs.org/v2/guide/plugins.html)。
使用了 vue-module-loader 的工程可以构建成独立的应用程序包部署运行，也可以加载其他[符合规范的微前端模块](https://cn.vuejs.org/v2/guide/plugins.html)，让你的工程秒变微前端架构。

## 快速上手

### 模板工程

推荐使用`vue-module-cli`创建模板工程，已为您做好配置，可构建独立应用，也可构建微前端模块包。

基于[@vue/cli](https://cli.vuejs.org/zh/) 工程，使用了以下特性：

- [构建目标-库](https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93)
- [环境变量和模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)

1. 安装命令行工具

   ```bash
   yarn add vue-module-cli
   ```

2. 创建工程

   ```bash
   vm create "dir"
   ```

### 自由工程

1. 安装插件

   ```bash
   yarn add vue-module-loader
   ```

2. 使用插件

   ```js
   import Vue from 'vue'
   // 导入插件
   import vueModuleLoader from 'vue-module-loader'
   Vue.use(vueModuleLoader)

   const app = new Vue({...})
   // 加载模块
   app.$moduleLoader({
     module1: '//domain.com/module-a.js'
   })
   ```

应用实例化后的任何时候可以通过插件方法[\$moduleLoader](/api/#app-moduleloader)进行加载。

### 构建

- 作为独立应用程序构建略过，请参考[@vue/cli 官方文档](https://cli.vuejs.org/zh/)
- 作为微前端模块构建
  ```bash
  yarn build:module
  ```
  配置参考：[构建目标-库](https://cli.vuejs.org/zh/guide/build-targets.html)
  微前端模块构建完成以后会得到一个 js 文件和静态资源，部署在服务器上即可引用加载。

## 编写微前端模块

下面介绍能够被`vue-module-loader`加载摸微前端模块规范。

### 模块详解

模块目录结构和官方@vue/cli 项目基本相同，只在入口文件和构建方面有些许差别，下面一一介绍：

- **入口文件**

**module.js**

微前端模块新增了`/src/module.js`文件作为模块业务代码的入口文件，此文件导出一个匿名函数，函数内部调用`this`（Vue 实例）中安装的生态工具 API 进行数据合并。

```js
// 模块的路由配置数组
import routes from './routes.js'
// store是以vuex module的形式进行导入使用
import storeModule from './store'
// 其他的导入内容
// 模块信息
const moduleInfo = require('../package.json')
// 导出模块函数
export default () => {
  // 本函数中的this指向vue实例的引用
  // 合并路由
  this.$router.$addRoutes(routes)
  // 合并状态
  // 使用模块名当做vuex store模块的命名空间
  this.$registerModule(moduleInfo.name, storeModule)
  // 其他逻辑
}
```

**main.js**

原有的`src/main.js`依然是构建独立应用程序和本地开发服务的入口文件，要想程序正常运行，需要把上面的业务代码入口文件`src/module.js`导入进来。

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueModuleLoader from 'vue-module-loader'
// 导入模块函数
import aModule from './module'
Vue.use(vueModuleLoader)
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// 加载模块
app.$moduleLoader(aModule)
```

:::warning
再次提醒：`src/main.js`文件只在构建为应用程序和本地开发时有效，构建成微前端模块时无效，所以当你的业务代码需要包含在微前端模块中时，应该导入`src/module.js`文件
:::

### 模块部署（延展）

模块资源文件的部署没有统一标准，方式多种多样，一个使用 nginx+jenkins 的模块部署过程如下：

#### 1. 新建模块虚拟机

在部署服务器中找到 nginx 虚拟机配置目录`*/**/nginx/conf/vhost`。

创建模块的`vhost`配置文件。

着重以下配置：

```sh
server{
  # 模块资源服务。
  listen 8080;
  location / {
    # 虚拟机根目录，以模块名命名，用以存放构建生成的文件。
    root /app_modules/<moduleName>;
  }
}

```

#### 2. 配置构建脚本

登录 jenkins 构建工具创建新任务。

##### 1. 执行 shell

本段 shell 主要是模块打包命令，打包过程根据自己模块`package.json`中实际的脚本进行配置。

```sh
# 打印node版本
node -v
# 打印yarn版本
yarn -v
# 安装依赖
yarn
# 执行构建脚本
yarn build
```

##### 2. 执行 shell

把第一步打包完成的代码转移到部署服务器模块的虚拟机中。

```shell
ssh user@xxx.xxx.xxx.xxx "cd /app_modules/
rm -rf <module_name>
mkdir <module_name>"
scp -r ${WORKSPACE}/dist/* user@xxx.xxx.xxx.xxx:/app_modules/<module_name>
```

#### 3. 验证模块地址

等待 jenkins 任务执行完毕，尝试访问

`http://xxx.xxx.xxx.xxx:8080/<app_modules>/<module_name>.umd.js`

如果能访问成功，既模块部署成功。

## 事件总线

为了提高模块与模块，模块与框架之间通信的灵活性，vue-module-loader 特别引入了事件总线。

事件总线本质上是 Vue 原型对象上的一个对象 `eventBus`，我们可以用来监听和触发一些事件。

每个模块需要提供自己的[事件列表](/appendix/#事件列表)以供其他模块监听。反之，也可根据其他模块提供的事件列表按需监听。

:::tip
为表明事件的不变性，vue-module-loader 约定使用常量标识事件名称，事件名称多个单词通过下划线`_`连接。
:::

### 触发事件

我们使用\$eventBus.emit()方法可以触发一个自定义事件。

```javascript
this.$eventBus.emit('EVENT_NAME', payloadData)
```

### 监听事件

我们使用\$eventBus.on()方法可以监听一个自定义事件，同一个事件可以重复监听多次。

```javascript
this.$eventBus.on('EVENT_NAME', payloadData => {})
```

### 取消监听

我们使用\$eventBus.off()方法可以监听一个自定义事件。

```javascript
this.$eventBus.off('EVENT_NAME')
```

## 发起异步请求

根据业务接口发起异步请求获取数据，是前后端分离的系统最重要的功能之一。vue-module-loader 内部封装了强大易用的 http 网络请求库[axios](https://github.com/axios/axios)，并在实例化时赋化身为`$http`对象，我们使用`$http`发起请求就像使用 axios 一样，例如：

```js
this.$http
  .get('api/path', {
    params: {}
  })
  .then(data => {
    console.log(data)
  })
```

除了在 vue-module-loader 实例化时可以传入 http 配置，我们在使用实例方法`$http`时也可以随时修改请求配置，发起请求时传入的配置优先级大于实例化配置。

```js
this.$http
  .get('api/path', {
    params: {},
    timeout: 5000 // 当前接口的超时时间就会延长至5000ms
  })
  .then(data => {
    console.log(data)
  })
```
