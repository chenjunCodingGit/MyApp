<template>
    <div class="home-search">
        <div class="mysearch" @click='goSearch'>
            <mu-icon value="search" color="#7e57c2" />
            <input type="search" placeholder='搜索' />
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
    
        <div class="gridlist-demo-container" @click.stop="detail">
            <mu-grid-list class="gridlist-demo">
                <mu-sub-header>热门商品</mu-sub-header>
                <mu-grid-tile v-for="tile, index in list" :key="index">
                    <img :src="tile.image" />
                    <span slot="title">{{tile.title}}</span>
                    <span slot="subTitle">by <b>{{tile.author}}</b></span>
                    <mu-icon-button label="show toast" @click.stop='showToast(index,$event)' icon="star_border" slot="action" />
                </mu-grid-tile>
            </mu-grid-list>
        </div>

        <mu-toast v-if="toast" :message="message" @close="hideToast" />
    </div>
</template> 
<script>
export default {
    data() {
        return {
            toast: false, //显示toast状态
            message:'成功加入收藏', //toast默认信息
            activeName: new Array(), //保存star颜色状态
            list: [{
                image: './static/home/one.jpg',
                title: 'Breakfast',
                author: 'Myron'
            }, {
                image: './static/home/two.jpg',
                title: 'Burger',
                author: 'Linyu'
            }, {
                image: './static/home/three.jpg',
                title: 'Camera',
                author: 'ruolin'
            }, {
                image: './static/home/one.jpg',
                title: 'Hats',
                author: 'kakali'
            }, {
                image: './static/home/two.jpg',
                title: 'Honey',
                author: 'yuyang'
            }, {
                image: './static/home/three.jpg',
                title: 'Morning',
                author: 'mokayi'
            }, {
                image: './static/home/one.jpg',
                title: 'Vegetables',
                author: 'NUyyyyyyy'
            }, {
                image: './static/home/two.jpg',
                title: 'water',
                author: 'TDDyyyyyyy'
            }]
        }
    },
    computed: {

    },
    methods: {
        goSearch: function () {
            this.$router.push({ path: '/searchInfo' }) //跳转到搜索页
            //window.location = '/#searchInfo' 
        },
        showToast(index, e) {
            //this.$router.push({path:'/detail'}) //跳转到搜索页            
            //console.log(e)
            if (!this.activeName[index]) { //状态为Null，则添加class为activeName
                e.toElement.nextElementSibling.className = 'activeName mu-icon material-icons' //改变star的color
                this.activeName[index] = 'a'

                this.message = '成功加入收藏' //toast信息
                this.toast = true            //toast显示状态
                if (this.toastTimer) clearTimeout(this.toastTimer)               //toast
                this.toastTimer = setTimeout(() => { this.toast = false }, 500)  //toast
            } else { //否则，则添加class为原状态
                e.toElement.nextElementSibling.className = 'mu-icon material-icons'            //改变star的color
                this.activeName[index] = ''

                this.message = '已经取消收藏' //toast信息
                this.toast = true            //toast显示状态
                if (this.toastTimer) clearTimeout(this.toastTimer)              //toast
                this.toastTimer = setTimeout(() => { this.toast = false }, 500) //toast
            }
            //e.srcElement.className = 'activeName mu-ripple-wrapper'
            //this.isActive = !this.isActive //点击反转star颜色
        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        },
        detail() {
            console.log(3)
            this.$router.push({ path: '/detail' }) //跳转到详情页
        }
    },
    created() {

    }
}
</script>
<style lang="less">
.home-search {
    a {
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
            padding-left: 25px;
            width: 95%;
            height: 28px;
            margin-left: 10px;
            margin-top: 8px;
            border: none;
            border-radius: 3px;
            outline: none;
        }
    }
    .gridlist-demo-container {
        margin-bottom: 55px; // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-around;
        .activeName {
            color: #f00;
        }
        .mu-sub-header {
            height: 36px;
            line-height: 44px;
        }
    } 
    .mu-toast {
        width: 134px;
        height: 80px;
        top: 252px;
        border-radius: 5px;
        line-height: 79px;
        background-color: rgba(0, 0, 0, 0.45);
        left: 50%;
        margin-left: -67px;
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