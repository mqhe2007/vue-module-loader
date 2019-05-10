import Vue from 'vue'
import vueModuleLoader from '../src/main.js'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.config.devtools = true
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter()
const store = new Vuex.Store()
Vue.use(vueModuleLoader, {
  router,
  store
})
let el = document.createElement('div')
document.body.appendChild(el)
let app = new Vue({
  router,
  store,
  render: h => h('h1', 'vue-module-loader')
})
app.$mount(el)
