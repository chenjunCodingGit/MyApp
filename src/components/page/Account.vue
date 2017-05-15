<template>
    <div class="myaccount">
        <TopBar title="信息设置"></TopBar>
        <mu-text-field v-model='logName' class="login-name" hintText="设置邮箱" type="email" icon="email" />
        <mu-text-field v-model='logPsw' hintText="设置联系电话" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="11" icon="phone" />
        <br/>
        <mu-raised-button @click='loginBtn' label="设置" class="demo-raised-button" primary/>
    
        <mu-toast v-if="toast" :message="message" :class="{emptyInput:isEmptyInput}" @close="hideToast" />
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
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
                    // console.log(res.status)
                    if (res.status) {
                        this.username = res.status
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
    components: {
        TopBar
    },
    data() {
        return {
            username: '',         //用户name
            logName: '',         //登录name  
            logPsw: '',          //登录password
            toast: false,        //是否显示toast
            message: '',         //显示toast信息
            isOverflow: false,   //密码没有超过规定范围
            isEmptyInput: false, //密码或name为空时class状态
            inputErrorText: '',           //输入错误后显示的状态
            multiLineInput: '',           //输入错误后显示的状态
            multiLineInputErrorText: '',  //输入错误后显示的状态
            regUrl: staticList.staticList[0]
        }
    },
    computed: {

    },
    methods: {
        handleInputOverflow(isOverflow) {        //输入错误后显示的状态
            this.inputErrorText = isOverflow ? '超过啦！！！！' : ''

            this.isOverflow = isOverflow         //密码超过规定范围是置为true
        },
        loginBtn() {
            // console.log(this.username+'--------')

            if (this.logName == '' || this.logPsw == '') {
                this.toast = true                //显示toast提示
                this.message = '邮箱或电话为空'

                this.isEmptyInput = true         //添加密码或name为空时class
            } else if (this.isOverflow) {
                this.toast = true                //显示toast提示
                this.message = '密码超过规定范围'
                this.logPsw = ''
            } else if (this.username) {
                this.$http.jsonp(
                    'http://' + this.regUrl + '/php/addAccountInfo.php',
                    {
                        params: {
                            name: this.username,
                            email: this.logName,
                            tel: this.logPsw
                        },
                        jsonp: 'callback'
                    }
                ).then((res) => {
                    if (res.ok) {
                        res.json().then((res) => {
                            // console.log(res.status)
                            if (res.status) {
                                this.toast = true                    //显示toast提示
                                this.message = '添加用户信息成功'

                                this.isEmptyInput = true            //添加密码或name为空时class
                                setTimeout(() => {
                                    this.$router.push({ path: '/home' }) //跳转到搜索页
                                }, 800)

                            }
                        }, (err) => {
                            console.log(err)
                        })
                    } else {
                        console.log(9)
                    }
                }, (error) => {
                    console.log(error)
                })
            } if (!this.username) {
                this.toast = true                    //显示toast提示
                this.message = '请先登陆'
                this.isEmptyInput = false
            }
            else {
                // console.log(333)
            }


            if (this.toastTimer) clearTimeout(this.toastTimer) //toast状态
            this.toastTimer = setTimeout(() => { this.toast = false }, 500)
        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        }
    }
}   
</script>
<style lang="less">
.myaccount {
    .topbar {
        .top-title {
            margin-left: 122px;
        }
    }
    .mu-text-field.has-icon.login-name {
        margin-top: 100px;
    }

    .mu-text-field.has-icon {
        margin-left: 50px;
    }

    .mu-raised-button.mu-raised-button-inverse {
        letter-spacing: 2px;
        margin-top: 50px;
        width: 180px;
        height: 40px;
        line-height: 40px;
        margin-left: 100px;
    }
    .mu-toast {
        width: 110px;
        height: 80px;
        top: 100px;
        border-radius: 5px;
        line-height: 79px;
        background-color: rgba(0, 0, 0, 0.45);
        left: 50%;
        margin-left: -55px; // color: #f00;
    }
    .mu-toast.emptyInput {
        width: 160px;
        margin-left: -80px;
    }
}
</style>