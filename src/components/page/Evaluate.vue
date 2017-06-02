<template>
    <div class="myevaluate">
        <TopBar title="评论"></TopBar>
        <div class="score">
            <mu-radio label="差评" name="group" nativeValue="1" v-model="shopstar" class="demo-radio" />
            <mu-radio label="中评" name="group" nativeValue="2" v-model="shopstar" class="demo-radio" />
            <mu-radio label="好评" name="group" nativeValue="3" v-model="shopstar" class="demo-radio" />
        </div>
        <p>说说你的使用心得吧！</p>
        <textarea v-model="content"></textarea>
        <mu-raised-button @click='sublime' label="提交订单" class="demo-raised-button" primary/>
        <mu-toast v-if="toast" :message="message" @close="hideToast" />
    
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
import staticList from '../data/Global.js'
// import Bus from '../data/bus.js'

export default {
    components: {
        TopBar
    },

    data() {
        return {
            username: '',
            shopstar: '3',
            content: '',
            goodid: '0',
            toast: false,        //是否显示toast
            message: '',         //显示toast信息
            regUrl: staticList.staticList[0]
        }
    },
    created() {
        this.$http.jsonp(
            'http://' + this.regUrl + '/php/session.php',
            {
                jsonp: 'callback'
            }
        ).then((res) => {
            if (res.ok) {
                res.json().then((res) => {
                    this.username = res.status

                    //查询最后一条数据id
                    this.$http.jsonp(
                        'http://' + this.regUrl + '/php/myorder/selectlast.php',
                        {
                            jsonp: 'callback'
                        }
                    ).then((res) => {
                        if (res.ok) {
                            res.json().then((res) => {
                                console.log(res[0].id)
                                this.goodid = res[0].id


                            })
                        }
                    })
                })
            }
        })

        // Bus.$on('id-selected', function (ids) {
        //     this.goodid = ids
        //     console.log(this.goodid)
        // })
    },
    methods: {
        sublime() {
            //插入评论
            if (this.content != '') {
                this.$http.jsonp(
                    'http://' + this.regUrl + '/php/evaluate/updateevulate.php',
                    {
                        params: {
                            id: this.goodid,
                            contents: this.content,
                            shopstar: this.shopstar
                        },
                        jsonp: 'callback'
                    }
                ).then((res) => {
                    if (res.ok) {
                        res.json().then((res) => {
                            console.log(res)
                            if (res.msg == 'success') {
                                this.toast = true
                                this.message = '评论成功'
                                setTimeout(()=>{
                                    this.$router.push({ path: '/home' })
                                },1000)
                            }
                        })
                    }
                })
            } else {
                this.toast = true
                this.message = '评论为空'
            }
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
.myevaluate {
    .score {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #aaa;
    }
    p {
        width: 80%;
        margin-left: 10%;
    }
    textarea {
        margin-top: 2px;
        width: 80%;
        height: 100px;
        margin-left: 10%;
        outline: none;
    }
    .mu-raised-button.mu-raised-button-inverse {
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
        letter-spacing: 1px;
    }
    .mu-toast {
        width: 108px;
        height: 80px;
        top: 200px;
        border-radius: 5px;
        line-height: 79px;
        background-color: rgba(0, 0, 0, 0.45);
        left: 50%;
        margin-left: -54px; // color: #f00;
    }
}
</style>
