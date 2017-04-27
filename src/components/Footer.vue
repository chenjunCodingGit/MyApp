<template>
    <div>
    <div class="footer">
        <mt-tabbar v-model="selected">
            <mt-tab-item id="外卖">
                <img slot="icon" src="../assets/img/home-active.png"> 
                <router-link to="/home">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="../assets/img/fenlei_active.png"> 
                <router-link to="/detail" >分类</router-link>                
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="../assets/img/shopCar_active.png"> 
                <router-link to="/shopcar" >购物车</router-link>                
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/img/about_active.png"> 
                <router-link to="/about" >我的</router-link>                
            </mt-tab-item>
            
        </mt-tabbar>
        
    </div>
    <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                selected:'外卖'
            }
        }
    }
</script>
<style>
    .mint-tabbar > .mint-tab-item.is-selected{
        background-color: #aaa;
    }
    .mint-tab-item-label a{
        text-decoration:none;
        color: #ff5c00;
    }
</style>   