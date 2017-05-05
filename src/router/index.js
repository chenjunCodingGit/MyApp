import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/Home.vue'
import detail from '../components/Sort.vue'
import shopcar from '../components/ShopCar.vue'
import about from '../components/About.vue'

import main from '../components/public/Main.vue'
import login from '../components/login-reg/Login.vue'
import register from '../components/login-reg/Register.vue'

import searchInfo from '../components/page/SearchInfo.vue' //点击搜索后，跳转到具体搜索页

Vue.use(VueRouter)


const routes = [
    { path: '/', component: main }, //起始页为Home
    {
        path: '/main',
        component: main,
        children: [
            { path: '/home', component: home },
            { path: '/detail', component: detail },
            { path: '/shopcar', component: shopcar },
            { path: '/about', component: about }
        ]
    },
    { path: '/searchInfo', component: searchInfo },
    { path: '/login', component: login },
    { path: '/register', component: register }
]

export default new VueRouter({
    routes
})