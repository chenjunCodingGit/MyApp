<template>
    <div class="myorder">
        <TopBar title="确定订单"></TopBar>
        <div class="address-title">收货地址</div>
        <div class="address-con" @click='address'>
            <div class="myaddress">
                <div class="myaddress-per">
                    <p>收货人</p>
                    <p>：</p>
                    <p>{{recivename}}</p>
                </div>
                <div class="myaddress-tel">
                    <p>电话</p>
                    <p>：</p>
                    <p>{{recivetel}}</p>
                </div>
                <div class="myaddress-add">
                    <p>地址</p>
                    <p>：</p>
                    <p>{{reciveadd}}</p>
                </div>
            </div>
            <mu-icon slot="right" value="keyboard_arrow_right" />
        </div>
        <div class="pay-model">支付方式</div>
        <mu-radio class="demo-radio" label="货到付款" name="group" nativeValue="simple2" labelLeft/>
        <div class="total1">
            <p>合计：</p><p>¥</p><p>{{total}} </p><p>运费：¥0</p>
        </div>
        <div class="total2">
            <p>应付金额：</p><p>¥</p><p>{{total}} </p>
        </div>
        <mu-raised-button @click='sublime' label="提交订单" class="demo-raised-button" primary/>
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
import staticList from '../data/Global.js'

export default {
    components: {
        TopBar
    },
    data() {
        return {
            recivename: '陈俊',
            recivetel: 13033315454,
            reciveadd: '重庆市大学城',
            total:1110,
            regUrl: staticList.staticList[0]
        }
    },
    methods:{
        address(){
            console.log(33)            
        },
        sublime(){
            console.log(3)
        }
    }
}
</script>
<style lang="less">
.myorder {
    .topbar .top-title {
        margin-left: 122px;
    }
    .address-title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        border-bottom: 1px solid #aaa;
    }
    .address-con {
        display: flex;
        .myaddress {
            width: 100%;
            display: flex;
            align-content: center;
            flex-direction: column;
            flex: 10;
            div {
                padding-left: 20px;
                height: 30px;
                line-height: 5px;
                display: flex;
                align-content: center;
                p:nth-child(3) {
                    padding-left: 5px;
                }
            }
            .myaddress-tel {
                height: 25px;
                line-height: -10px;
                margin-top: -6px;
                p:nth-child(1) {
                    letter-spacing: 12px;
                    margin-right: -12px;
                }
            }
            .myaddress-add {
                border-bottom: 1px solid #aaa;
                p:nth-child(1) {
                    letter-spacing: 12px;
                    margin-right: -12px;
                }
            }
        }
        .mu-icon {
            line-height: 78px;
            font-size: 26px;
            text-align: center;
            flex: 1;
            align-items: center;
            border-bottom: 1px solid #aaa;
        }
    }
    .pay-model{
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
    }
    .demo-radio{
        width: 90%;
        margin-left: 20px;
        margin-right: 20px;
        height: 36px;
        border-bottom: 1px solid #aaa;
    }
    .total1{
        margin-top: 100px;
    }
    .total1,.total2{
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
        height: 26px;
    }
    .total1 p:nth-child(2){
        color: #f00;
    }
    .total1 p:nth-child(3){
        color: #f00;
        margin-right: 15px;
    }
    .total2{
        height: 60px;
    }
    .total2 p{
        font-size: 20px;
    }
    .total2 p:nth-child(2),p:nth-child(3){
        color: #f00;
    }
    .mu-raised-button.mu-raised-button-inverse{
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
        letter-spacing: 1px;
    }
}
</style>