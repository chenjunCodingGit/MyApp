<template>
    <div>
        <TopBar></TopBar>
        <mu-text-field hintText="用户名" type="email" icon="account_circle"/>        
        <mu-text-field hintText="密码" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10" type="password" icon="https"/>
        <br/>
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
export default {
    ready(){
        const _this = this;
        this.$parent.$children[0].$children[0]._data.title = "图片"
      console.log(_this.$parent.$children[0].$children[0]._data.title)
     console.log(this.$parent._uid)
    },
    components:{
        TopBar
    },
    data() {
        return {
            value: '默认文字',
            input: '',
            inputErrorText: '',
            multiLineInput: '',
            multiLineInputErrorText: ''
        }
    },
    computed:{
        
    },
    methods: {
        handleInputOverflow(isOverflow) {
            this.inputErrorText = isOverflow ? '超过啦！！！！' : ''
        }
    }
}   
</script>
<style lang="css">

</style>