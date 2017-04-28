<template>
    <div>
        <div @keyup="get($event)" >
            <router-link to="/searchInfo" >
            <mt-search v-model="value"
                       cancel-text="取消"
                       placeholder="搜索"
                       >
            </mt-search>
             </router-link>
        </div>
        
    
        <div class="page-swipe">
            <mt-swipe :auto="3500">
                <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
                <mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
                <mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '',
            mydata:[]
        }
    },
    computed:{
       
    },
    methods:{
        get:function(ev){
            //if (ev.keyCode == 38 || ev.keyCode == 40) return //上下键选择索引的value时，不再请求jsonp

            this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
                    params: {
                        wd: this.value
                    },
                    jsonp: 'cb'
                }).then(function(res) {
                    this.mydata = res.data.s;
                }, function(err) {
                    console.log(err)
                })
        },
        location:function(){
            window.location = 'searchInfo'
        }
    },
    created(){
        
    }
}
</script>
<style lang="css">
a{
    text-decoration: none;
}
.mint-search .mint-searchbar {
    background-color: #fb8c00;
}
.mint-search .mint-searchbar a{
    color: #fff;
}
.mint-search{
    height: 100%;
}
.mint-searchbar-cancel {
    color: #fff;
}

.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: -616px;
}

.page-swipe .mint-swipe-item {
    line-height: 200px;
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
</style>