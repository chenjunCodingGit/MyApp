<template>
    <div class="mylogin">
        <TopBar title="登录"></TopBar>
        <mu-text-field v-model='logName' class="login-name" hintText="用户名" type="email" icon="account_circle" />
        <mu-text-field v-model='logPsw' hintText="密码(不能超过10位)" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10" type="password" icon="https" />
        <br/>
        <mu-raised-button @click='loginBtn' label="登录" class="demo-raised-button" primary/>
    
        <mu-toast v-if="toast" :message="message" :class="{emptyInput:isEmptyInput}" @close="hideToast" />
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
import staticList from '../data/Global.js'

export default {
    created() {
        //const _this = this;

    },
    components: {
        TopBar
    },
    data() {
        return {
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

            if (this.logName == '' || this.logPsw == '') {
                this.toast = true                //显示toast提示
                this.message = '用户名或密码为空'

                this.isEmptyInput = true         //添加密码或name为空时class
            } else if (this.isOverflow) {
                this.toast = true                //显示toast提示
                this.message = '密码超过规定范围'
                this.logPsw = ''
            } else {
                this.$http.jsonp(
                    'http://' + this.regUrl + '/php/login.php', {
                        params: {
                            name: this.logName,
                            password: this.logPsw
                        },
                        jsonp: 'callback'
                    }).then(function (res) {
                        if (res.ok) {
                            res.json().then((res) => {
                                if (res.status == 0) {
                                    this.toast = true                 //显示toast提示
                                    this.isEmptyInput = false         //emptyInput置为初始class
                                    this.message = '登录成功'
                                    setTimeout(() => {

                                        this.$router.push({ path: '/home' })
                                    }, 500)
                                    //this.$router.push({ path: '/home' })
                                } else {
                                    this.toast = true
                                    this.message = '账号或密码错误'
                                    this.isEmptyInput = true         //添加密码或name为空时class
                                }
                            }, (err) => {
                                console.log(err)
                            })

                        }
                        this.logName = ''
                        this.logPsw = ''
                    }, function (error) {
                        //console.log(error)
                    })
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
.mylogin {
    .mu-text-field.has-icon.login-name {
        margin-top: 100px;
    }

    .mu-text-field.has-icon {
        margin-left: 50px;
    }

    .mu-raised-button.mu-raised-button-inverse {
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