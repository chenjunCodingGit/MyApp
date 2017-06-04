<template>
    <div class="detail">
        <TopBar title="详情"></TopBar>
    
        <div class="page-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item :class="{slide1:true}">
                    <img :src="details[0].image" />
                </mt-swipe-item>
                <mt-swipe-item :class="{slide2:true}">
                    <img src="../../assets/images/2.jpg" />
                </mt-swipe-item>
                <mt-swipe-item :class="{slide3:true}">
                    <img :src="details[0].image" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
    
        <mu-appbar>¥{{details[0].price}}</mu-appbar>
        <mu-sub-header>{{details[0].title}} - {{details[0].scale}}</mu-sub-header>
        <mu-content-block>
            {{details[0].describes}}
        </mu-content-block>
    
        <div class="evaluate">
            <div class="eva-title">评价</div>
            <div v-for="item,index in evaluates" :key="index" class="eva-one">
                <div class="eva-line">
                    <div>用户:{{item.name}}</div>
                    <div>{{item.shopstar}}</div>
                </div>
                <div class="eva-content">{{item.contents}}</div>
            </div>
    
        </div>
    
        <div class='detail-footer'>
            <mu-float-button @click='decrease' icon="remove" mini class="demo-float-button float-button-btn" />
            <span class="detail-goods-num">{{goodsNum}}</span>
            <mu-float-button @click='add' icon="add" mini class="demo-float-button float-button-btn float-button-add" />
            <mu-raised-button @click='showToast()' label="加入购物车" class="demo-raised-button" primary/>
        </div>
    
        <mu-toast v-if="toast" :message="message" @close="hideToast" />
    </div>
</template>
<script>
import staticList from '../data/Global.js'
import TopBar from '../public/TopBar.vue'

export default {
    created() {
        //查询details表里数据
        this.$http.jsonp(
            'http://' + this.regUrl + '/php/details/selectdetail.php',
            {
                jsonp: 'callback'
            }
        ).then((res) => {
            if (res.ok) {
                res.json().then((res) => {
                    // console.log(res)
                    // this.details.push(res[0])
                    this.details[0] = res[0]

                    //查询所有评论
                    this.$http.jsonp(
                        'http://' + this.regUrl + '/php/details/selectevaluate.php',
                        {
                            params: {
                                goodid: res[0].goodid,//res[0].goodid
                            },
                            jsonp: 'callback'
                        }
                    ).then((res) => {
                        if (res.ok) {
                            res.json().then((res) => {
                                // console.log(res)
                                this.evaluates = res
                            })
                        }
                    })
                })
            }
        })
    },
    components: {
        TopBar
    },
    data() {
        return {
            username: '',
            goodsNum: 1,
            toast: false,
            message:'',
            evaluates: [],
            details: [{
                id: 0,
                title: '母婴之家全新进口产品',
                describes: '精选高端进口产品，母婴之家全新进口产品',
                scale: '100g',
                image: "./static/home/two.jpg",
                price: 100
            }],
            regUrl: staticList.staticList[0]
        }
    },
    computed: {

    },
    methods: {
        add() {
            if (this.goodsNum >= 1) {
                this.goodsNum++
            }
        },
        decrease() {
            if (this.goodsNum > 1) {
                this.goodsNum--
            }
        },
        showToast() { //点击加入购物车
            // console.log(this.details[0].goodid)
            //查询用户是否存在
            this.$http.jsonp(
                'http://' + this.regUrl + '/php/session.php',
                {
                    jsonp: 'callback'
                }
            ).then((res) => {
                if (res.ok) {
                    res.json().then((res) => {
                        if (res.status != '0') {
                            this.username = res.status

                            //将商品加入购物车表
                            this.$http.jsonp(
                                'http://' + this.regUrl + '/php/details/insertshopcar.php',
                                {
                                    params: {
                                        name: res.status,
                                        image: this.details[0].image,
                                        title: this.details[0].title,
                                        scale: this.details[0].scale,
                                        shopnum: Number(this.goodsNum),
                                        price: Number(this.details[0].price),
                                        goodid: Number(this.details[0].goodid)
                                    },
                                    jsonp: 'callback'
                                }
                            ).then((res) => {
                                if (res.ok) {
                                    res.json().then((res) => {
                                        // console.log(res)
                                        this.$router.push({ path: '/shopcar' })

                                        // this.toast = true
                                        // this.message = '成功加入购物车'
                                        // if (this.toastTimer) clearTimeout(this.toastTimer)
                                        // this.toastTimer = setTimeout(() => { this.toast = false }, 800)
                                    }, (err) => {
                                        console.log(err)
                                    })
                                }
                            })
                        } else {
                            // console.log('未登录')
                            this.toast = true
                            this.message = '请 登 陆'
                            if (this.toastTimer) clearTimeout(this.toastTimer)
                            this.toastTimer = setTimeout(() => { this.toast = false }, 800)
                        }
                    }, (err) => {
                        console.log(err)
                    })
                }
            })
        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        }
    }
}   
</script>
<style lang="less">
.detail {
    .topbar {
        position: fixed;
        width: 100%;
        height: 50px;
        z-index: 55555;
    } // background-color: #dfdfdf;
    .page-swipe .mint-swipe {
        height: 300px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        top: 50px;
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
    .mu-appbar.mu-paper-1 {
        margin-top: 5px;
        color: #f00;
        background-color: #fff;
        margin-top: 50px;
    }
    .mu-content-block {
        padding-bottom: 25px;
    }
    .evaluate {
        margin-bottom: 50px;
        .eva-title {
            text-align: center;
            height: 30px;
            line-height: 30px;
            border-top: 1px solid #bbb;
            border-bottom: 1px solid #bbb;
        }
        .eva-one {
            width: 100%;
            padding-bottom: 8px;
            border-top: 1px solid #bbb;
            .eva-line {
                height: 30px;
                line-height: 30px;
                display: flex;
                width: 80%;
                margin-left: 10%;
                margin-top: 5px;
                div:nth-child(1) {
                    color: #7e57c2;
                    width: 60%; // background-color: #f00;
                }
                div:nth-child(2) {
                    color: #f00;
                    margin-left: 25%;
                }
            }
            .eva-content {
                width: 80%;
                margin-left: 10%; // text-indent: 2em;
            }
        }
    }

    .detail-footer {
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #eee;
        .detail-goods-num {
            position: absolute;
            left: 37px;
        }
        .float-button-add {
            margin-left: 24px;
        }
        .mu-float-button-mini {
            margin-top: 9px;
        }
        .mu-float-button-mini {
            width: 32px;
            height: 32px;
        }
        .mu-raised-button.mu-raised-button-inverse {
            margin-top: 0px;
            top: -9px;
            margin-left: 150px;
        }
    }
    .mu-toast {
        width: 100px;
        height: 80px;
        top: 296px;
        border-radius: 5px;
        line-height: 79px;
        background-color: rgba(0, 0, 0, 0.45);
        left: 50%;
        margin-left: -50px;
    }
}
</style>