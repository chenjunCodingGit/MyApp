<template>
    <div class='myreg'>
        <TopBar title="注册"></TopBar>
        <mu-text-field v-model="regName" @blur='checkName' class="register-name" hintText="用户名" type="text" icon="account_circle" />
        <mu-text-field v-model="regPsw" hintText="密码(不能超过10位)" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10" type="password" icon="https" />
        <br/>
        <mu-raised-button @click='registerBtn' label="注册" class="demo-raised-button" primary/>
    
        <mu-toast v-if="toast" :message="message" :class="{emptyInput:isEmptyInput}" @close="hideToast" />
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
export default {
    components: {
        TopBar
    },
    data() {
        return {
            regName: '',        //注册name
            regPsw: '',         //注册password
            checkUserName: false,//检查用户是否存在
            isOverflow: false,  //密码没有超过规定范围
            inputErrorText: '', //输入错误后显示的状态
            multiLineInput: '', //输入错误后显示的状态
            multiLineInputErrorText: '', //输入错误后显示的状态
            toast: false,       //是否显示toast
            message: '',        //显示toast信息
            isEmptyInput: false, //密码或name为空时class状态
            regUrl: '192.168.155.2'

        }
    },
    computed: {

    },
    methods: {
        handleInputOverflow(isOverflow) {        //输入错误后显示的状态
            //isOverflow为true时，显示错误状态
            this.isOverflow = isOverflow         //密码超过规定范围是置为true
            this.inputErrorText = isOverflow ? '超过啦！！！！' : ''
        },//http://'+this.regUrl+'/php/register.php
        registerBtn() {
            if (!this.checkUserName) {
                if (this.regName == '' || this.regPsw == '') {
                    this.toast = true                //显示toast提示
                    this.message = '用户名或密码为空'
                    this.isEmptyInput = true         //添加密码或name为空时class
                } else if (this.isOverflow) {        //密码长度超过规定
                    this.toast = true                //显示toast提示
                    this.message = '注册失败'
                    this.regPsw = ''
                } else {
                    this.$http.get(
                        'http://' + this.regUrl + '/php/register.php',
                        {
                            params: {
                                name: this.regName,
                                password: this.regPsw
                            }
                        }
                    ).then(function (res) {
                        this.toast = true                 //显示toast提示
                        this.isEmptyInput = false         //emptyInput置为初始class
                        this.message = '注册成功'
                        setTimeout(() => {
                            this.$router.push({ path: '/home' })      //注册成功后跳转到home
                        }, 500)

                        this.regName = ''
                        this.regPsw = ''
                    }, function (err) {
                        console.log(err)
                    })
                }
                if (this.toastTimer) clearTimeout(this.toastTimer) //toast状态
                this.toastTimer = setTimeout(() => { this.toast = false }, 1000)
            } else {
                this.checkUserName = true        //标记该用户已经存在                  
                this.toast = true                //显示toast提示
                this.isEmptyInput = true         //emptyInput置为初始class
                this.message = '该用户已经存在'
                this.regName = ''
                this.regPsw = ''
            }


        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        },
        checkName() {
            this.$http.get(
                'http://' + this.regUrl + '/php/checkRegName.php',
                {
                    params: {
                        name: this.regName
                    }
                }
            ).then(function (res) {
                if (res.ok) {
                    res.json().then((res) => {
                        if (res.status == 0) {
                            this.checkUserName = true        //标记该用户已经存在                  
                            this.toast = true                //显示toast提示
                            this.isEmptyInput = true         //emptyInput置为初始class
                            this.message = '该用户已经存在'
                        } else {
                            this.checkUserName = false       //标记该用户不存在
                        }
                    }, (err) => {

                    })
                }

            }, function (error) {
                console.log(error)
            })
        }
    }
}   
</script>
<style lang="less">
.myreg {
    .mu-text-field.has-icon.register-name {
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