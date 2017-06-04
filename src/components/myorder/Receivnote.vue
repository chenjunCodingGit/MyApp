<template>
    <div class="myreceive">
        <div v-for="title,index in list" :key="index" class="one-order">
            <div class="noorder-image">
                <img :src="title.image" />
            </div>
            <div class="noorder-right">
                <div class="noorder-title">{{title.title}}</div>
                <div class="noorder-btn">
                    <span>数量 </span>
                    <span>{{title.shopnum}}</span>
                    <span>总价 </span>
                    <span>{{title.thisprice}}</span>
                    <input @click="receive(index)" type="button" value="确认收货" />
                </div>
            </div>
        </div>
        <mu-toast v-if="toast" :message="message" @close="hideToast" />
    </div>
</template>
<script>
import staticList from '../data/Global.js'
export default {
    created() {
        this.$http.jsonp(
            'http://' + this.regUrl + '/php/session.php',
            {
                jsonp: 'callback'
            }
        ).then((res) => {
            if (res.ok) {
                res.json().then((res) => {
                    // console.log(res)
                    this.username = res.status

                    //查询待发货的商品
                    this.$http.jsonp(
                        'http://' + this.regUrl + '/php/myorder/paying/selectpaying.php',
                        {
                            params: {
                                name: this.username
                            },
                            jsonp: 'callback'
                        }
                    ).then((res) => {
                        if (res.ok) {
                            res.json().then((res) => {
                                // console.log(res)
                                this.list = res
                            })
                        }
                    })
                })
            }
        })
    },
    data() {
        return {
            username: '',
            list: [],
            toast: false,        //是否显示toast
            message: '',         //显示toast信息
            regUrl: staticList.staticList[0],
        }
    },
    methods: {
        receive(index) {
            // console.log(this.list[index].id)

            //将该商品购买数量加入销售量中
            this.$http.jsonp(
                'http://' + this.regUrl + '/php/myorder/payed/figureplus.php',
                {
                    params: {
                        ids: Number(this.list[index].goodid),
                        shopnum: Number(this.list[index].shopnum)
                    },
                    jsonp: 'callback'
                }
            ).then((res) => {
                if (res.ok) {
                    res.json().then((res) => {
                        console.log(res)
                    })
                }
            })

            //点击支付更新ispay状态为1
            this.$http.jsonp(
                'http://' + this.regUrl + '/php/myorder/paying/updatereceive.php',
                {
                    params: {
                        thisId: this.list[index].id
                    },
                    jsonp: 'callback'
                }
            ).then((res) => {
                if (res.ok) {
                    res.json().then((res) => {
                        // console.log(res)
                        this.toast = true
                        this.message = '确认收货成功'
                        const _this = this
                        setTimeout(function () {
                            _this.$router.go(0)
                        }, 800);
                    })
                }
            })
            if (this.toastTimer) clearTimeout(this.toastTimer) //toast状态
            this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        }
    }
}
</script>
<style lang="less">
.myreceive {

    .one-order {
        width: 100%;
        height: 120px;
        display: flex;
        background-color: rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid #fff;
        .noorder-image {
            height: 80px;
            width: 80px;
            margin-left: 20px;
            margin-top: 20px;
            background-color: #f00;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .noorder-right {
            margin-left: 20px;
            margin-top: 25px;
            margin-right: 20px;
            width: 220px;
            display: flex;
            flex-direction: column;
            .noorder-title {
                // background: #f00;
                display: block;
                width: 220px;
                word-wrap: break-word;
                flex: 1;
            }
            .noorder-btn {
                flex: 1;
                span {
                    display: inline-block;
                }
                span:nth-child(2) {
                    width: 15px;
                    margin-left: 1px;
                }
                span:nth-child(3) {
                    margin-left: 5px;
                    color: #f00;
                }
                span:nth-child(4) {
                    width: 55px;
                    margin-left: 1px;
                    color: #f00;
                }
                input {
                    background-color: #7e57c2;
                    color: #fff;
                    border: none;
                    outline: none;
                }
            }
        }
    }
    .mu-toast {
        width: 136px;
        height: 80px;
        top: 280px;
        border-radius: 5px;
        line-height: 79px;
        background-color: rgba(0, 0, 0, 0.45);
        left: 50%;
        margin-left: -68px; // color: #f00;
    }
}
</style>
