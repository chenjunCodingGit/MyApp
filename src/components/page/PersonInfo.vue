<template>
    <div class="myperson-info">
        <TopBar title="个人资料"></TopBar>
        <div class="perinfo-flex">
            <div class="info-input">
                <p>用户名</p>
                <div>{{username}}</div>
            </div>
            <div class="info-input">
                <p class="email">邮箱</p>
                <div>{{usereamil}}</div>
            </div>
            <div class="info-input">
                <p>联系电话</p>
                <div>{{usertel}}</div>
            </div>
        </div>
        <mu-raised-button @click='goAccount' label="修改资料" class="demo-raised-button" primary/>
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
import staticList from '../data/Global.js'

export default {
    components: {
        TopBar
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
                    // console.log(res.status)
                    if (res.status) {
                        this.username = res.status

                        this.$http.jsonp( //-------------
                            'http://' + this.regUrl + '/php/personInfo.php',
                            {
                                params: {
                                    name: this.username
                                },
                                jsonp: 'callback'
                            }
                        ).then((res) => {
                            if (res.ok) {
                                res.json().then((res) => {
                                    // console.log(res[0])
                                    this.usereamil = res[0].email
                                    this.usertel = res[0].tel
                                }, (err) => {

                                })
                            }
                        }, (error) => {

                        })               //----------------

                    }
                }, (err) => {
                    console.log(err)
                })
            } else {
                console.log(9)
            }
        }, (error) => {
            //console.log(error)
        })

    },
    data() {
        return {
            username: '',
            usereamil: '',
            usertel: '',
            regUrl: staticList.staticList[0]
        }
    },
    methods: {
        goAccount() {
            this.$router.push({ path: '/account' })      //注册成功后跳转到home
        }
    }
}

</script>
<style lang="less">
.myperson-info {
    .topbar {
        .top-title {
            margin-left: 122px;
        }
    }
    .perinfo-flex {

        .info-input {
            display: flex;
            margin-top: 40px;
            align-items: center;
            p {
                margin-left: 50px;
                margin-right: 33px; // letter-spacing: 1px;
            }
            p.email {
                letter-spacing: 24px;
            }
            div {
                height: 30px;
                line-height: 30px;
                width: 150px;
                border-bottom: 1px solid #aaa;
                padding-left: 5px;
            }
        }
        .info-input:nth-child(1) p {
            letter-spacing: 6px;
        }
        .info-input:nth-child(2) div {
            margin-left: -15px;
        }
        .info-input:nth-child(3) div {
            margin-left: 5px;
        }
    }
    .mu-raised-button.mu-raised-button-inverse {
        letter-spacing: 1px;
        width: 190px;
        margin-top: 60px;
        margin-left: 105px;
    }
}
</style>