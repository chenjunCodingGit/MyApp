<template>
    <div class="myevaluate">
        <TopBar title="评论"></TopBar>
        <div class="score">
            <mu-radio label="差评" name="group" nativeValue="1" v-model="value" class="demo-radio" />
            <mu-radio label="中评" name="group" nativeValue="2" v-model="value" class="demo-radio" />
            <mu-radio label="好评" name="group" nativeValue="3" v-model="value" class="demo-radio" />
        </div>
        <p>说说你的使用心得吧！</p>
        <textarea v-model="content">dddddddddddddddd</textarea>
        <mu-raised-button @click='sublime' label="提交订单" class="demo-raised-button" primary/>
    </div>
</template>
<script>
import staticList from '../data/Global.js'
import TopBar from '../public/TopBar.vue'
import Bus from '../data/bus.js'

export default {
    components: {
        TopBar
    },
    created() {
        // this.$http.jsonp(
        //     'http://' + this.regUrl + '/php/session.php',
        //     {
        //         jsonp: 'callback'
        //     }
        // ).then((res)=>{
        //     if(res.ok){
        //         res.json().then((res)=>{
        //             this.username = res.status
        //         })
        //     }
        // })

        Bus.$on('getTarget', (target) => {
            console.log(target);
        });
    },
    data() {
        return {
            username: '',
            value: '3',
            content: '',
            goodid: 0,
            regUrl: staticList.staticList[0],
        }
    },
    methods: {
        sublime() {
            console.log(this.goodid)
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
        .mu-radio {}
    }
    p {
        width: 80%;
        margin-left: 10%;
    }
    textarea {
        margin-top: 1px;
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
}
</style>
