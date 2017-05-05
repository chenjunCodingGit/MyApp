import Vue from 'vue'
import App from './App.vue'

import router from './router/index' //全局引入路由

import VueResource from 'vue-resource'; //全局引入ajax
Vue.use(VueResource);

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
    // import MintUI from 'mint-ui'
    // import 'mint-ui/lib/style.css'
    // Vue.use(MintUI)
import { Swipe, SwipeItem, Navbar, TabItem, Cell, TabContainer, TabContainerItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})