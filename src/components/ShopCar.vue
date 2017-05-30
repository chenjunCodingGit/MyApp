<template>
    <div class="shopcar">
        <mu-appbar title="购物车">
            <mu-flat-button @click='clearShopCar' label="清空购物车" slot="right" />
        </mu-appbar>
        <div class="myscroll">
            <div v-for="title,index in list" :key="index">
                <div class="select-shop">
                    <mu-checkbox class="demo-checkbox" @change='selectCheck(index)' :selected='title.selected' />
    
                    <div class="shop-img">
                        <img :src="title.image" />
                    </div>
                    <div class="shop-left">
                        <div class="shop-title">
                            <div class="shop-title-top">{{title.title}}</div>
                            <div class="shop-title-standard">{{title.scale}}</div>
                        </div>
                        <div class="shop-title-bottom">
                            <div class="title-bottom-money">
                                <span>¥</span>
                                <span>{{title.price}}</span>
                            </div>
                            <div class="title-bottom-btn">
                                <span @click='decrease(index)'>-</span>
                                <span>{{title.shopnum}}</span>
                                <span @click='add(index)'>+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="submit">
            <div class="submit-title">商品总计：</div>
            <div class="submit-total">
                <span>¥</span>
                <span>{{submitTitle}}</span>
            </div>
            <mu-flat-button @click='submit' label="去结算" slot="right" primary/>
        </div>
        <mu-toast v-if="toast" :message="message" @close="hideToast" />
    </div>
</template>

<script>
import staticList from './data/Global.js'

export default {
    created() {
        this.$http.jsonp(
            'http://' + this.regUrl + '/php/session.php', {
                jsonp: 'callback'
            }).then((res) => {
                if (res.ok) {
                    res.json().then((res) => {
                        if (res.status) {
                            this.username = res.status

                            this.$http.jsonp( //selectFavorite
                                'http://' + this.regUrl + '/php/shopcar/selectshopcar.php', {
                                    params: {
                                        name: this.username
                                    },
                                    jsonp: 'callback'
                                }).then(function (res) {
                                    if (res.ok) {
                                        res.json().then((res) => {
                                            // console.log(res)
                                            res.forEach(function (element, index) {
                                                // console.log(element.id)
                                                this.list.push(element)

                                                let myobj = new Object()        //新的对象存入数组ids中
                                                myobj.id = ""
                                                myobj.shopnum = ''

                                                this.ids.push(myobj)            //对象存入数组中
                                                this.ids[index].id = element.id //该用户购物车里每个商品的id
                                            }, this);

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
            }, (error) => {
                console.log(error)
            })

        // console.log(this.ids)
    },
    computed: {
        // return this.list[index]
    },
    data() {
        return {
            username: '',
            submitTitle: 0, //商品总计
            list: [],
            ids: [],
            toast: false,        //是否显示toast
            message: '',         //显示toast信息
            regUrl: staticList.staticList[0],

            selectID: [],          //被选中的商品id
            
            selectNum:0
            // list: [{
            //     id: 1,
            //     image: './static/home/two.jpg',
            //     title: '新西兰原装进口奶粉，精选上等优质原料。',
            //     scale: '100g',  //商品规格
            //     price: 100,      //商品单价
            //     shopnum: 0,            //商品数量
            //     selected: 0         //selectbox选择状态
            // }],
        }
    },
    methods: {
        submit() { //提交结算
            if (this.submitTitle > 0) {
                //更新shopcar信息
                this.$http.jsonp(
                    'http://' + this.regUrl + '/php/shopcar/updateShopcar.php', {
                        params: {
                            ids: this.ids
                        },
                        jsonp: 'callback'
                    }).then((res) => {
                        if (res.ok) {
                            res.json().then((res) => {
                                // console.log(res.status)
                                if (res.status) {
                                    // this.$router.push({ path: '/order' })

                                } else {
                                    // this.$router.push({ path: '/order' })
                                }
                            }, (err) => {

                            })
                        }
                    })

                //被选中的商品
                let j = 0
                for (let i in this.list) {
                    if (this.list[i].selected == true) {
                        this.selectID[j] = this.list[i].id
                        j++
                        //将选中的商品存入支付数据库
                        this.selectNum+=1
                    }
                }

                this.$http.jsonp(
                    'http://' + this.regUrl + '/php/shopcar/deletepay.php',
                    {
                        params: {
                            ids:this.selectID
                        },
                        jsonp: 'callback'
                    }
                ).then((res) => {
                    if (res.ok) {
                        res.json().then((res) => {
                            console.log(res)
                            console.log(this.selectID)
                        }, (error) => {
                            console.log(error)
                        })
                    }
                })


                //将该用户的总价更新到order表中
                if (this.username) {
                    this.$http.jsonp(
                        'http://' + this.regUrl + '/php/order/updateprice.php',
                        {
                            params: {
                                username: this.username,
                                totalprice: this.submitTitle
                            },
                            jsonp: 'callback'
                        }
                    ).then((res) => {
                        if (res.ok) {
                            res.json().then((res) => {
                                // console.log(res)
                            }, (error) => {
                                console.log(error)
                            })
                        }
                    })
                }
            } else {
                this.toast = true
                this.message = '您还未选择商品'
            }

            if (this.toastTimer) clearTimeout(this.toastTimer) //toast状态
            this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
        },
        clearShopCar() { //清空购物车
            this.list = ''
            this.submitTitle = 0
            this.$http.jsonp(
                'http://' + this.regUrl + '/php/shopcar/clearShopcar.php', {
                    params: {
                        name: this.username
                    },
                    jsonp: 'callback'
                }).then((res) => {
                    if (res.ok) {
                        res.json().then((res) => {
                            // console.log(3)
                        }, (err) => {
                            console.log(err)
                        })
                    }
                })
        },
        add(index) {     //增加商品数量
            this.list[index].selected = Number(this.list[index].selected)  //将字符串string类型转化为num
            this.list[index].price = Number(this.list[index].price)        //将字符串string类型转化为num
            this.list[index].shopnum = Number(this.list[index].shopnum)    //将字符串string类型转化为num
            // console.log(typeof(this.list[index].selected))
            if (this.list[index].shopnum >= 0) {
                this.list[index].shopnum++ //数量++
                this.ids[index].shopnum = this.list[index].shopnum     //将该商品数量更新到数组对象shopnum中
                if (this.list[index].selected) {
                    this.submitTitle += Number(this.list[index].price) //商品总价++
                }

            }
        },
        decrease(index) {//减少商品数量
            this.list[index].selected = Number(this.list[index].selected) //将字符串string类型转化为num
            this.list[index].price = Number(this.list[index].price)       //将字符串string类型转化为num
            this.list[index].shopnum = Number(this.list[index].shopnum)   //将字符串string类型转化为num

            //console.log(this.$parent.$children[1])
            //this.$parent.$children[1].$children[index + 1].$el.children[0].checked = true
            if (this.list[index].shopnum > 0) {
                this.list[index].shopnum-- //数量--
                this.ids[index].shopnum = this.list[index].shopnum   //将该商品数量更新到数组对象shopnum中
                if (this.list[index].selected) {                     //checkbox被选中
                    this.submitTitle -= this.list[index].price       //商品总价--
                }
                if (this.list[index].shopnum <= 0) { //商品选择减少到0时
                    // console.log(this.$parent.$children[1].$children[index+2])
                    // this.$parent.$children[1].$children[index + 2].$el.children[0].checked = false //点击当前index的checkbox为false
                    // this.list[index].selected = false //checkbox的false状态保持一致
                }

            }
        },
        selectCheck(index) { //勾选checkbox某个商品
            this.list[index].selected = Number(this.list[index].selected)

            this.list[index].selected = !this.list[index].selected //点击反转checkbox状态
            if (this.list[index].selected) { //当前checkbox状态为true
                this.submitTitle += this.list[index].price * this.list[index].shopnum //商品总价+被选择商品总价
            }
            if (!this.list[index].selected) { //当前checkbox状态为false
                this.submitTitle -= this.list[index].price * this.list[index].shopnum //商品总价-被选择商品总价
            }
        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        }
    }
}
</script>

<style lang="less">
.shopcar {
    .mu-appbar {
        position: fixed;
        top: 0;
        padding: 0px;
        height: 50px;
        line-height: 50px;
        .right span {
            font-family: "Microsoft YaHei";
            font-size: 13px; // letter-spacing: 1px;
        }
        .mu-appbar-title span {
            font-size: 16px;
            letter-spacing: 1px;
            margin-left: 157px;
        }
        .mu-flat-button-label {
            padding-right: 7px;
            padding-left: 7px;
        }
    }
    .myscroll {
        overflow: scroll;
        flex: 1;
        margin-top: 50px;
        margin-bottom: 106px;
        .select-shop {
            width: 100%;
            height: 120px;
            border-bottom: 1px solid #ececec;
            display: flex;
            flex-direction: row;
            align-items: center;

            .mu-checkbox {
                margin-left: 10px;
            }
            .shop-img {
                flex: 1.5;
                background-color: #f00;
                height: 90px;
                margin-left: 10px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .shop-left {
                flex: 4;
                display: flex;
                flex-direction: column;
                margin-left: 10px;
                height: 90px;
                .shop-title {
                    height: 80px;
                    .shop-title-standard {
                        color: #aaa;
                    }
                }
                .shop-title-bottom {
                    display: flex;
                    height: 30px;
                    flex-direction: row;
                    span {
                        display: inline-block;
                    }
                    .title-bottom-money {
                        flex: 1;
                        height: 30px;
                        color: #7e57c2;
                    }
                    .title-bottom-btn {
                        flex: 1;
                        height: 30px;
                        margin-right: 30px;
                        border: 1px solid #ececec;
                        display: flex;
                        align-items: center;
                        span:nth-child(1) {
                            width: 30px;
                            height: 30px;
                            line-height: 30px;
                            text-align: center;
                            border-right: 1px solid #ececec;
                            font-size: 22px;
                        }
                        span:nth-child(1):hover {
                            color: #fff;
                            background-color: #7e57c2;
                        }
                        span:nth-child(2) {
                            flex: 1;
                            text-align: center;
                        }
                        span:nth-child(3) {
                            width: 30px;
                            height: 30px;
                            line-height: 30px;
                            text-align: center;
                            border-left: 1px solid #ececec;
                        }
                        span:nth-child(3):hover {
                            color: #fff;
                            background-color: #7e57c2;
                        }
                    }
                }
            }
        }
    }

    .submit {
        position: fixed;
        bottom: 56px;
        height: 50px;
        line-height: 50px;
        width: 100%;
        border-top: 1px solid #ececec;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        .submit-title {
            text-align: right;
            flex: 1;
            font-size: 18px;
        }
        .submit-total {
            flex: 1;
            margin-left: 0px;
            color: #7e57c2;
            font-size: 18px;
        }
        .mu-flat-button {
            flex: 1;
            height: 50px;
            line-height: 50px;
            border-radius: 0px;
            letter-spacing: 1px;
            margin-right: 2px;
        }
        .mu-flat-button-primary {
            background-color: #7e57c2;
            color: #fff;
            margin-right: 2px;
        }
    }

    .mu-toast {
        width: 150px;
        height: 80px;
        top: 200px;
        border-radius: 5px;
        line-height: 79px;
        background-color: rgba(0, 0, 0, 0.45);
        left: 50%;
        margin-left: -75px; // color: #f00;
    }
}
</style>