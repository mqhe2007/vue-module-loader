import Vue from 'vue'
import admincraft from '../src/main.js'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(VueRouter)
Vue.use(Vuex)
const router = new VueRouter()
const store = new Vuex.Store()

Vue.use(admincraft)
let el = document.createElement('div')
document.body.appendChild(el)
let app = new Vue({
  router,
  store,
  render: h => h('h1', 'vue-module-loader')
})
app.$mount(el)
