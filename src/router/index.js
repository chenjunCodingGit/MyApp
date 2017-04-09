import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/Search.vue'
import detail from '../components/About.vue'
import shopcar from '../components/ShopCar.vue'
import about from '../components/About.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: home }, //起始页为Home
    { path: '/home', component: home },
    { path: '/detail', component: detail },
    { path: '/shopcar', component: shopcar },
    { path: '/about', component: about }
]

export default new VueRouter({
    routes
})