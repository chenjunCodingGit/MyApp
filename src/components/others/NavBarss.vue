<template>
    
    <div class="footer">
        <mt-tabbar v-model="selected"  >
            <mt-tab-item id="home">
                <img slot="icon" src="../assets/img/home-active.png"> 
                首页<!--<router-link to="/home">首页</router-link>-->
            </mt-tab-item>
            <mt-tab-item id="detail">
                <img slot="icon" src="../assets/img/fenlei_active.png"> 
                分类<!--<router-link to="/detail" >分类</router-link>-->
            </mt-tab-item>
            <mt-tab-item id="shopcar">
                <img slot="icon" src="../assets/img/shopCar_active.png"> 
                购物车<!--<router-link to="/shopcar" >购物车</router-link>-->
            </mt-tab-item>
            <mt-tab-item id="about">
                <img slot="icon" src="../assets/img/about_active.png"> 
                我的<!--<router-link to="/about" >我的</router-link>-->
            </mt-tab-item>
            
        </mt-tabbar>
        
    </div>
    <!--<router-view></router-view>-->
   
</template>
<script>
    export default {
        data(){
            return{
                selected:'home',
            }
        },
        computed:{
            
        },
        methods:{
            handleChange(){
                console.log(3)
               // this.selected = val
               this.$router.push('/'+this.selected)
            }
        },
        created(){
            console.log(this.selected)
            //this.$router.push('/'+this.selected)
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