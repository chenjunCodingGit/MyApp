import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

import router from './router/index' //全局引入路由

import VueResource from 'vue-resource'; //全局引入ajax
Vue.use(VueResource);

Vue.use(MintUI)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})