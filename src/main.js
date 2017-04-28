import Vue from 'vue'
import App from './App.vue'

import router from './router/index' //全局引入路由

import VueResource from 'vue-resource'; //全局引入ajax
Vue.use(VueResource);

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})