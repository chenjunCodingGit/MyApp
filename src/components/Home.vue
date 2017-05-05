<template>
    <div class="home-search">
        <div class="mysearch" @click='goSearch'>
            <mu-icon value="search" color="#7e57c2" />
            <input type="search" placeholder='搜索'/>
        </div>
    
        <div class="page-swipe">
            <mt-swipe :auto="3500">
                <mt-swipe-item :class="{slide1:true}">
                    <img src="../assets/images/one.jpg" />
                </mt-swipe-item>
                <mt-swipe-item :class="{slide2:true}">
                    <img src="../assets/images/two.jpg" />
                </mt-swipe-item>
                <mt-swipe-item :class="{slide3:true}">
                    <img src="../assets/images/three.jpg" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
        
        <div class="gridlist-demo-container">
            <mu-grid-list class="gridlist-demo">
                <mu-sub-header>图片展示</mu-sub-header>
                <mu-grid-tile v-for="tile, index in list" :key="index">
                <img :src="list.image"/>
                <span slot="title">{{tile.title}}</span>
                <span slot="subTitle">by <b>{{tile.author}}</b></span>
                <mu-icon-button icon="star_border" slot="action"/>
                </mu-grid-tile>
            </mu-grid-list>
        </div>
    </div>
</template>
<script>
export default {
    directives: { //自定义自动聚焦指令
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    },
    data() {
        return {
            value: '',
            mydata: [],
            list: [{
                image: './static/home/one.jpg',
                title: 'Breakfast',
                author: 'Myron'
            }, {
                image: './static/home/one.jpg',
                title: 'Burger',
                author: 'Linyu'
            }, {
                image: './static/home/one.jpg',
                title: 'Camera',
                author: 'ruolin'
            }, {
                image: './static/home/one.jpg',
                title: 'Hats',
                author: 'kakali'
            }, {
                image: './static/home/one.jpg',
                title: 'Honey',
                author: 'yuyang'
            }, {
                image: './static/home/one.jpg',
                title: 'Morning',
                author: 'mokayi'
            }, {
                image: './static/home/one.jpg',
                title: 'Vegetables',
                author: 'NUyyyyyyy'
            }, {
                image: './static/home/one.jpg',
                title: 'water',
                author: 'TDDyyyyyyy'
            }]
        }
    },
    computed: {

    },
    methods: {
        goSearch: function () {
            this.$router.push({path:'/searchInfo'})
            //window.location = '/#searchInfo' //跳转到搜索页
        }
    },
    created() {

    }
}
</script>
<style lang="less">
.home-search {
    a{
        text-decoration: none;
    }
    .mysearch {
        position: fixed;
        width: 100%;
        background-color: #7e57c2;
        height: 44px;
        top: 0px;
        z-index: 99;
        .mu-icon {
            position: absolute;
            left: 12px;
            top: 12px;
            font-size: 20px;
        }
        input {
            padding-left:25px; 
            width: 95%;
            height: 28px;
            margin-left: 10px;
            margin-top: 8px;
            border: none;
            border-radius: 3px;
            outline: none;
        }
    }
    .gridlist-demo-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .gridlist-demo{
        width: 500px;
        height: 450px;
        overflow-y: auto;
    }
}
.home-search .page-swipe .mint-swipe {
    margin-top: 44px;
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
}

.home-search .page-swipe .mint-swipe-item {
    line-height: 200px;
}

.home-search .page-swipe .mint-swipe-item img {
    width: 100%;
    height: 100%;
}

.home-search .page-swipe .slide1 {
    background-color: #0089dc;
    color: #fff;
}

.home-search .page-swipe .slide2 {
    background-color: #ffd705;
    color: #000;
}

.home-search .page-swipe .slide3 {
    background-color: #ff2d4b;
    color: #fff;
}

.home-search .page-swipe-desc {
    text-align: center;
    color: #666;
    margin-bottom: 5px;
}
</style>