<template>
    <div class="detail">
        <TopBar title="详情"></TopBar>
    
        <div class="page-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item :class="{slide1:true}">
                    <img src="../../assets/images/1.jpg" />
                </mt-swipe-item>
                <mt-swipe-item :class="{slide2:true}">
                    <img src="../../assets/images/2.jpg" />
                </mt-swipe-item>
                <mt-swipe-item :class="{slide3:true}">
                    <img src="../../assets/images/3.jpg" />
                </mt-swipe-item>
            </mt-swipe>
        </div>
    
        <mu-appbar title="¥169"></mu-appbar>
        <mu-sub-header>a2 白金婴幼儿配方奶粉3段900g (新西兰)</mu-sub-header>
        <mu-content-block>
            新西兰原装进口奶粉，精选上等优质原料。更精准分阶段配方,以专利技术使配方更贴合人体自然营养图谱,有助宝宝更好吸收珍贵营养。
        </mu-content-block>
    
        <div class='detail-footer'>
            <mu-float-button @click='decrease' icon="remove" mini class="demo-float-button float-button-btn" />
            <span class="detail-goods-num">{{goodsNum}}</span>
            <mu-float-button @click='add' icon="add" mini class="demo-float-button float-button-btn float-button-add" />
            <mu-raised-button @click='showToast()' label="加入购物车" class="demo-raised-button" primary/>
        </div>
    
        <mu-toast v-if="toast" message="成功加入购物车" @close="hideToast" />
    </div>
</template>
<script>
import TopBar from '../public/TopBar.vue'
export default {
    created() {

    },
    components: {
        TopBar
    },
    data() {
        return {
            goodsNum: 0,
            toast: false
        }
    },
    computed: {

    },
    methods: {
        add() {
            if (this.goodsNum >= 0) {
                this.goodsNum++
            }
        },
        decrease() {
            if (this.goodsNum > 0) {
                this.goodsNum--
            }
        },
        showToast() {
            this.toast = true
            if (this.toastTimer) clearTimeout(this.toastTimer)
            this.toastTimer = setTimeout(() => { this.toast = false }, 800)
        },
        hideToast() {
            this.toast = false
            if (this.toastTimer) clearTimeout(this.toastTimer)
        }
    }
}   
</script>
<style lang="less">
.detail {
    background-color: #dfdfdf;
    .page-swipe .mint-swipe {
        height: 300px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .page-swipe .mint-swipe-item {
        line-height: 330px;
    }
    .page-swipe .mint-swipe-item img {
        width: 100%;
        height: 100%;
    }
    .page-swipe .slide1 {
        background-color: #0089dc;
        color: #fff;
    }
    .page-swipe .slide2 {
        background-color: #ffd705;
        color: #000;
    }
    .page-swipe .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }
    .page-swipe-desc {
        text-align: center;
        color: #666;
        margin-bottom: 5px;
    }
    .mu-appbar.mu-paper-1 {
        margin-top: 5px;
        color: #f00;
        background-color: #fff;
    }

    .detail-footer {
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #eee;
        .detail-goods-num {
            position: absolute;
            left: 37px;
        }
        .float-button-add {
            margin-left: 24px;
        }
        .mu-float-button-mini {
            margin-top: 9px;
        }
        .mu-float-button-mini {
            width: 32px;
            height: 32px;
        }
        .mu-raised-button.mu-raised-button-inverse {
            margin-top: 0px;
            top: -9px;
            margin-left: 120px;
        }
    }
    .mu-toast {
        width: 146px;
        height: 80px;
        top: 296px;
        border-radius: 5px;
        line-height: 79px;
        background-color: rgba(0, 0, 0, 0.45);
        left: 50%;
        margin-left: -73px;
    }
}
</style>