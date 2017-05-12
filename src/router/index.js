import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/Home.vue'
import sort from '../components/Sort.vue'
import shopcar from '../components/ShopCar.vue'
import about from '../components/About.vue'

import main from '../components/public/Main.vue'
import login from '../components/login-reg/Login.vue'
import register from '../components/login-reg/Register.vue'

import searchInfo from '../components/page/SearchInfo.vue' //点击搜索后，跳转到具体搜索页
import detail from '../components/page/Detail.vue' //点击搜索后，跳转到具体搜索页
import address from '../components/page/Address.vue' //地址选择页
import account from '../components/page/Account.vue' //地址选择页

Vue.use(VueRouter)


const routes = [
    { path: '/', component: main }, //起始页为Home
    {
        path: '/main',
        component: main,
        children: [
            { path: '/home', component: home },
            { path: '/sort', component: sort },
            { path: '/shopcar', component: shopcar },
            { path: '/about', component: about }
        ]
    },
    { path: '/searchInfo', component: searchInfo },
    { path: '/login', component: login },
    { path: '/register', component: register },
    { path: '/detail', component: detail },
    { path: '/address', component: address },
    { path: '/account', component: account },
]

export default new VueRouter({
    routes
})