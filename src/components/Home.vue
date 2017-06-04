<template>
    <div class="home-search">
        <div class="mysearch" @click='goSearch'>
            <mu-icon value="search" color="#7e57c2" />
            <input type="search" placeholder='搜索' />
        </div>
    
        <div class="page-swipe">
            <mt-swipe :auto="3500">
                <mt-swipe-item v-for="tile, index in list" :key="index" :class="{slide1:true}">
                    <img @click.stop="detail(index)" :src="tile.image"/>
                </mt-swipe-item>
                <!--<mt-swipe-item :class="{slide2:true}">
                    <img src="../assets/images/two.jpg" />
                </mt-swipe-item>
                <mt-swipe-item :class="{slide3:true}">
                    <img src="../assets/images/three.jpg" />
                </mt-swipe-item>-->
            </mt-swipe>
        </div>
    
        <div class="gridlist-demo-container">
            <!--@click.stop="detail"-->
            <mu-grid-list class="gridlist-demo">
                <mu-sub-header>热门商品</mu-sub-header>
                <mu-grid-tile v-for="tile, index in list" :key="index">
                    <img @click.stop="detail(index)" :src="tile.image"/>
                    <span slot="title">{{tile.title}}</span>
                    <span slot="subTitle">by
                        <b>{{tile.author}}</b>
                    </span>
                    <mu-icon-button label="show toast" @click.stop='showToast(index,$event)' icon="star_border" slot="action" />
                </mu-grid-tile>
            </mu-grid-list>
        </div>
    
        <div class="second-title">新品展示</div>
        <div class="mydefoot">
            <div class="lineimg">
                <div @click="selectgood(index)" v-for="item,index in list1" :key="index" class="img">
                    <img :src="item.image" />
                    <div>{{item.title}}</div>
                </div>
            </div>
        </div>
        <mu-toast v-if="toast" :message="message" @close="hideToast" />
    </div>
</template> 
<script>
import staticList from './data/Global.js'

export default {
    created() {
        this.$http.jsonp(
            'http://' + this.regUrl + '/php/goods/selectGoods.php', {
                jsonp: 'callback'
            }).then(function (res) {
                // console.log(res)
                if (res.ok) {
                    res.json().then((res) => {
                        // res.forEach(function (element) {
                        //     this.list.push(element)
                        // }, this);
                        for (let i in res) {
                            if (i <= 3) {
                                this.list.push(res[i])
                            } else {
                                this.list1.push(res[i])
                            }
                        }
                        // console.log(this.list)
                    }, (err) => {
                        console.log(err)
                    })

                }
            }, function (error) {
                console.log(error)
            })
    },
    data() {
        return {
            username: '',
            toast: false, //显示toast状态
            message: '成功加入收藏', //toast默认信息
            activeName: new Array(), //保存star颜色状态
            list: [],
            list1: [],
            regUrl: staticList.staticList[0]
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

                this.$http.jsonp(
                    'http://' + this.regUrl + '/php/session.php', {
                        jsonp: 'callback'
                    }
                ).then((res) => {
                    if (res.ok) {
                        res.json().then((res) => {
                            if (res.status) {
                                this.username = res.status

                                this.$http.jsonp(
                                    'http://' + this.regUrl + '/php/favorite/addFavorite.php', {
                                        params: {
                                            name: this.username,
                                            title: this.list[index].title,
                                            image: this.list[index].image,
                                            price: this.list[index].price,
                                            indexs: index,
                                            isshow: 'true'
                                        },
                                        jsonp: 'callback'
                                    }).then(function (res) {
                                        // console.log(res)
                                        if (res.ok) {
                                            res.json().then((res) => {
                                                if (res.status == 0) {
                                                    //this.$router.push({ path: '/home' })
                                                } else {
                                                }
                                            }, (err) => {
                                                console.log(err)
                                            })

                                        }
                                    }, function (error) {
                                        console.log(error)
                                    })
                            }
                        })
                    }
                })


            } else { //否则，则添加class为原状态
                e.toElement.nextElementSibling.className = 'mu-icon material-icons'            //改变star的color
                this.activeName[index] = ''

                this.message = '已经取消收藏' //toast信息
                this.toast = true            //toast显示状态
                if (this.toastTimer) clearTimeout(this.toastTimer)              //toast
                this.toastTimer = setTimeout(() => { this.toast = false }, 500) //toast

                this.$http.jsonp(
                    'http://' + this.regUrl + '/php/session.php', {
                        jsonp: 'callback'
                    }
                ).then((res) => {
                    if (res.ok) {
                        res.json().then((res) => {
                            if (res.status) {
                                this.username = res.status

                                this.$http.jsonp(
                                    'http://' + this.regUrl + '/php/favorite/delFavorite.php', {
                                        params: {
                                            name: this.username,
                                            indexs: index
                                        },
                                        jsonp: 'callback'
                                    }).then(function (res) {
                                        // console.log(res)
                                        if (res.ok) {
                                            res.json().then((res) => {
                                                if (res.status == 0) {
                                                    //this.$router.push({ path: '/home' })
                                                } else {
                                                }
                                            }, (err) => {
                                                console.log(err)
                                            })

                                        }
                                    }, function (error) {
                                        console.log(error)
                                    })
                            }
                        })
                    }
                })

            }
            //e.srcElement.className = 'activeName mu-ripple-wrapper'
            //this.isActive = !this.isActive //点击反转star颜色
        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        },
        detail(index) {
            // this.$router.push({ path: '/detail' }) //跳转到详情页
            // console.log(this.list[index])
            this.$http.jsonp(
                'http://' + this.regUrl + '/php/details/updatecontent.php',
                {
                    params: {
                        image: this.list[index].image,
                        title: this.list[index].title,
                        describes: this.list[index].describes,
                        scale: this.list[index].scale,
                        price: Number(this.list[index].price),
                        goodid: Number(this.list[index].id),
                    },
                    jsonp: 'callback'
                }
            ).then((res) => {
                if (res.ok) {
                    res.json().then((res) => {
                        // console.log(res)
                        if (res.msg == "success") {
                            this.$router.push({ path: '/detail' })
                        }
                    })
                }
            })
        },
        selectgood(index) { //将信息更新到详情页
            // console.log(this.list1)
            this.$http.jsonp(
                'http://' + this.regUrl + '/php/details/updatecontent.php',
                {
                    params: {
                        image: this.list1[index].image,
                        title: this.list1[index].title,
                        describes: this.list1[index].describes,
                        scale: this.list1[index].scale,
                        price: Number(this.list1[index].price),
                        goodid: Number(this.list1[index].id),
                    },
                    jsonp: 'callback'
                }
            ).then((res) => {
                if (res.ok) {
                    res.json().then((res) => {
                        // console.log(res)
                        if (res.msg == "success") {
                            this.$router.push({ path: '/detail' })
                        }
                    })
                }
            })
        }
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
        // margin-bottom: 55px; // display: flex;
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
    .second-title {
        top: 0px;
        height: 40px;
        line-height: 40px;
        margin-left: 10px; // background-color: #f00;
    }
    .mydefoot {
        width: 100%;
        margin-bottom: 60px;
        .lineimg {
            width: 100%;
            margin-top: 6px;
            .img:nth-child(2n) {
                margin-left: 1%;
            }
            .img {
                width: 49%;
                display: inline-block;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                }
                div {
                    position: absolute;
                    background-color: rgba(0, 0, 0, 0.3);
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    color: #fff;
                    text-align: center;
                    bottom: 0px;
                }
            }
        }
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