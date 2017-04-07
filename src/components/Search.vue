<template>
    <div>
        <div>
            <mt-search v-model="value"
                       cancel-text="取消"
                       placeholder="搜索">
            </mt-search>
        </div>
    
        <div class="page-swipe">
            <mt-swipe :auto="1500">
                <mt-swipe-item :class="{slide1:true}">1</mt-swipe-item>
                <mt-swipe-item :class="{slide2:true}">2</mt-swipe-item>
                <mt-swipe-item :class="{slide3:true}">3</mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>
<style lang="css">
.mint-searchbar {
    background-color: #ff5c00;
}
.mint-search{
    height: 100%;
}
.mint-searchbar-cancel {
    color: #fff;
}

.page-swipe .mint-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 20px;
}

.page-swipe .mint-swipe-item {
    line-height: 200px;
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
</style>