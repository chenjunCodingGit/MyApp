<template>
    <div>
        <TopBar title="注册"></TopBar>
        <mu-text-field class="register-name" hintText="用户名" type="email" icon="account_circle" />
        <mu-text-field hintText="密码(不能超过10位)" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10" type="password" icon="https" />
        <br/>
        <mu-raised-button label="注册" class="demo-raised-button" primary/>
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
            value: '默认文字',
            input: '',
            inputErrorText: '', //输入错误后显示的状态
            multiLineInput: '', //输入错误后显示的状态
            multiLineInputErrorText: '' //输入错误后显示的状态
        }
    },
    computed: {

    },
    methods: {
        handleInputOverflow(isOverflow) { //输入错误后显示的状态
            this.inputErrorText = isOverflow ? '超过啦！！！！' : ''
        }
    }
}   
</script>
<style lang="css">
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
</style>