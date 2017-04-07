<template>
    <div class="footer">
        <mt-tabbar v-model="selected">
            <mt-tab-item id="外卖">
                <img slot="icon" src="../assets/img/say.png"> 
                <router-link to="/home">首页</router-link>
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="../assets/img/say.png"> 
                <router-link to="/detail" >分类</router-link>                
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="../assets/img/say.png"> 
                <router-link to="/shopcar" >购物车</router-link>                
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/img/say.png"> 
                <router-link to="/about" >我的</router-link>                
            </mt-tab-item>
            
        </mt-tabbar>
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