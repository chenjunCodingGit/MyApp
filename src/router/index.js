import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/Search.vue'
import detail from '../components/Sort.vue'
import shopcar from '../components/ShopCar.vue'
import about from '../components/About.vue'

import searchInfo from '../components/SearchInfo.vue' //点击搜索后，跳转到具体搜索页

Vue.use(VueRouter)

const routes = [
    { path: '/', component: home }, //起始页为Home
    {
        path: '/home',
        component: home,
        children: [{
            path: '/searchInfo',
            component: searchInfo,
            //alias: '/searchInfo'
        }]
    },
    { path: '/detail', component: detail },
    { path: '/shopcar', component: shopcar },
    { path: '/about', component: about }
]

export default new VueRouter({
    routes
})