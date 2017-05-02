<template>
    <div class='about'>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">上新</mt-tab-item>
            <mt-tab-item id="2">孕婴</mt-tab-item>
            <mt-tab-item id="3">童装</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                
                <div v-for="n in 30" :key = 'n.id'
                         :title="'content ' + n" >
                    sdd
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 0" :key = 'n.id'
                         :title="'content ' + n" />
                <div>
                    11111111111111
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 0" :key = 'n.id'
                         :title="'content ' + n" />
                <div>
                    sdddsddsddddddddddd 
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            selected: '1',
            value:5
        }
    }
}
</script>

<style type='text/css' >
.about .is-selected {
    background-color:#7e57c2;
}
.mint-navbar{
    position: relative;
    top: 0px;
    border-bottom: 3px solid #ececec;
}
.mint-navbar .mint-tab-item-label{
    font-size: 18px;
}
.mint-navbar .mint-tab-item{
    padding: 13px 0;
}
.about .mint-navbar .mint-tab-item.is-selected{
    color: #fff;
}
.about .mint-navbar .mint-tab-item{
    color: #7e57c2; 
}
.mt-tab-container{
    overflow: scroll;
    flex: 1;
}
</style>