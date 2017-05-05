<template>
    <div class="detail">
        <TopBar title="详情"></TopBar>

        <div class="page-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item :class="{slide1:true}">
                    <img src="../../assets/images/1.jpg" />
                </mt-swipe-item>
                <mt-swipe-item :class="{slide2:true}">
                    <img src="../../assets/images/2.jpg" />
                </mt-swipe-item>
                <mt-swipe-item :class="{slide3:true}">
                    <img src="../../assets/images/3.jpg" />
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <mu-appbar title="¥169"></mu-appbar>
        
        <div class='detail-footer'>

        </div>
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
export default {
    created() {
    
    },
    components: {
        TopBar
    },
    data() {
        return {
            
        }
    },
    computed: {

    },
    methods: {
       
    }
}   
</script>
<style lang="less">
.detail{
    background-color:#dfdfdf;
    .page-swipe .mint-swipe {
        height: 330px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .page-swipe .mint-swipe-item {
        line-height: 330px;
    }
    .page-swipe .mint-swipe-item img {
        width: 100%;
        height: 100%;
    }
    .page-swipe .slide1 {
        background-color: #0089dc;
        color: #fff;
    }
    .page-swipe .slide2 {
        background-color: #ffd705;
        color: #000;
    }
    .page-swipe .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }
    .page-swipe-desc {
        text-align: center;
        color: #666;
        margin-bottom: 5px;
    }
    .mu-appbar.mu-paper-1{
        margin-top:5px;
        color:#f00;
        background-color:#fff;
    }
   
    .detail-footer{
        position:fixed;
        bottom:0px;
        width:100%;
        height:50px;
        line-height:50px;
        background-color:#f00;
    }
}
</style>