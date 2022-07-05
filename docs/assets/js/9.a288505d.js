(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{274:function(t,a,s){"use strict";s.r(a);var e=s(13),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"实例-api-扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例-api-扩展"}},[t._v("#")]),t._v(" 实例 API 扩展")]),t._v(" "),s("h2",{attrs:{id:"vm-moduleloader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-moduleloader"}},[t._v("#")]),t._v(" vm.$moduleLoader")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[t._v("{Object | Function} moduleUrl | moduleInitFunction")])])]),t._v(" "),s("li",[s("h4",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[t._v("#")]),t._v(" 用法:")]),t._v(" "),s("p",[t._v("动态加载一个微前端模块，参数支持两种方式：")]),t._v(" "),s("ol",[s("li",[t._v("包含多个模块地址的对象，此时方法返回 Promise，但是无论模块是否加载成功，永远都会 resolve。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$moduleLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module-a'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.domain.com/modulea.umd.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载过程完毕")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ol",[s("li",[t._v("模块函数")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" moduleA "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./module-a.js'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$moduleLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moduleA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"vm-dynamiccomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-dynamiccomponent"}},[t._v("#")]),t._v(" vm.$dynamicComponent")]),t._v(" "),s("p",[t._v("动态组件工具，通过 "),s("code",[t._v("vm.$dynamicComponent")]),t._v(" 上的若干个方法进行使用，具体说明如下：")]),t._v(" "),s("p",[t._v("动态组件——普通的 vue 单文件组件，可以由微前端模块携带并添加到 vuex store 中，供 vue 内置的"),s("code",[t._v("component")]),t._v("组件渲染使用。")]),t._v(" "),s("p",[t._v("当添加"),s("code",[t._v("vue-module-loader")]),t._v("插件时传入 vuex"),s("code",[t._v("store")]),t._v("实例，即会自动在 vuex store 中创建命名空间为"),s("code",[t._v("dynamicComponent")]),t._v("的储存模块。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex form "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vueModuleLoader "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-module-loader'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vueModuleLoader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("dynamicComponent 状态库中默认有插槽位置"),s("code",[t._v("GLOBAL")]),t._v("，当调用下列方法时不传"),s("code",[t._v("position")]),t._v("，组件既存在"),s("code",[t._v("GLOBAL")]),t._v("位置中；如果指定了"),s("code",[t._v("position")]),t._v("，讲被存在指定的插槽位置中。实际情况可以使用"),s("code",[t._v("vue-devtools")]),t._v("进行查看。")]),t._v(" "),s("p",[s("strong",[t._v("我们约定动态组件插槽位置名称使用全大写表示。")])]),t._v(" "),s("h3",{attrs:{id:"create"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[t._v("#")]),t._v(" .create")]),t._v(" "),s("p",[t._v("创建动态组件方法")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{Object} component (必选)")])]),t._v(" "),s("li",[s("p",[t._v("{String} position")])])])]),t._v(" "),s("li",[s("p",[t._v("用法:")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" AComponent "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./AComponent.vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$dynamicComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HEADER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"destroy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#destroy"}},[t._v("#")]),t._v(" .destroy")]),t._v(" "),s("p",[t._v("移除某个动态组件插槽内的某个组件，如果不传 position 参数，默认会去“GLOBAL”的位置查找。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{String} componentName")])]),t._v(" "),s("li",[s("p",[t._v("{String} position")])])])]),t._v(" "),s("li",[s("p",[t._v("用法:")])])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$dynamicComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("destroy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'componentName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'HEADER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"vm-eventbus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vm-eventbus"}},[t._v("#")]),t._v(" vm.$eventBus")]),t._v(" "),s("p",[t._v("事件总线工具，通过 "),s("code",[t._v("vm.$eventBus")]),t._v(" 上的若干个方法进行使用，具体说明如下：")]),t._v(" "),s("h3",{attrs:{id:"on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on"}},[t._v("#")]),t._v(" .on")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"参数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-2"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{String} eventName")])]),t._v(" "),s("li",[s("p",[t._v("{Function} handler")])])])])]),t._v(" "),s("p",[t._v("监听一个事件，并且指定处理函数。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("匿名处理函数无法取消监听，具名函数可以被"),s("code",[t._v("off")]),t._v("方法取消监听。")])]),t._v(" "),s("h3",{attrs:{id:"emit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#emit"}},[t._v("#")]),t._v(" .emit")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"参数-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-3"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{String} eventName")])]),t._v(" "),s("li",[s("p",[t._v("{any} payload")])])])])]),t._v(" "),s("p",[t._v("触发一个事件，并且发送任意数据作为监听方法处理函数的参数。")]),t._v(" "),s("h3",{attrs:{id:"off"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#off"}},[t._v("#")]),t._v(" .off")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"参数-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-4"}},[t._v("#")]),t._v(" 参数:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("{String} eventName")])]),t._v(" "),s("li",[s("p",[t._v("{Function} handler")])])])])]),t._v(" "),s("p",[t._v("取消一个事件的指定处理函数。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("监听时如果是匿名处理函数无法取消监听。")])]),t._v(" "),s("h3",{attrs:{id:"clear"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[t._v("#")]),t._v(" .clear")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"参数-无"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-无"}},[t._v("#")]),t._v(" 参数: 无")])])]),t._v(" "),s("p",[t._v("清空 eventBus，这会取消所有事件监听。")]),t._v(" "),s("h3",{attrs:{id:"getevents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getevents"}},[t._v("#")]),t._v(" .getEvents")]),t._v(" "),s("ul",[s("li",[s("h4",{attrs:{id:"参数-无-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数-无-2"}},[t._v("#")]),t._v(" 参数: 无")])])]),t._v(" "),s("p",[t._v("获取所有已监听事件列表")])])}),[],!1,null,null,null);a.default=n.exports}}]);