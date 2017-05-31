<template>
    <div class='myorderbay'>
        <TopBar title="我的订单"></TopBar>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">待付款</mt-tab-item>
            <mt-tab-item id="2">待发货</mt-tab-item>
            <mt-tab-item id="3">待收货</mt-tab-item>
            <mt-tab-item id="4">已完成</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" class="sort1">
                <Noorder></Noorder>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" class="sort2">
                <Paying></Paying>
            </mt-tab-container-item>
            <mt-tab-container-item id="3" class="sort3">
                <Receivnote></Receivnote>
            </mt-tab-container-item>
            <mt-tab-container-item id="4" class="sort4">
                <Payed></Payed>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'

import Noorder from '../myorder/Noorder.vue'
import Paying from '../myorder/Paying.vue'
import Payed from '../myorder/Payed.vue'
import Receivnote from '../myorder/Receivnote.vue'

export default {
    components: {
        TopBar,
        Noorder,
        Paying,
        Payed,
        Receivnote
    },
    data: function () {
        return {
            selected: '1',
        }
    },
    methods: {

    }
}
</script>

<style lang='less' >
.myorderbay {
    .topbar {
        background-color: #7e57c2;
        border-bottom: 1px solid #fff;
        .mu-icon,
        i {
            color: #7e57c2;
        }
        .top-title {
            margin-left: 122px;
        }
    }
    .mint-navbar .mint-tab-item {
        color: #7e57c2;
    }
    .mint-navbar .mint-tab-item.is-selected {
        color: #fff;
    }
    .sort1 {}
    .sort2 {}
    .sort3 {}
    .sort4 {}
}
</style>