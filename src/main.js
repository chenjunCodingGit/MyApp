import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

import router from './router/index' //全局引入路由

import axios from 'axios' //全局引入ajax
Vue.prototype.$http = axios

Vue.use(MintUI)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})