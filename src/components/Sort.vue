<template>
    <div class='sort'>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">上新</mt-tab-item>
            <mt-tab-item id="2">孕婴</mt-tab-item>
            <mt-tab-item id="3">童装</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1" class="sort1">
                <Sort1></Sort1>
            </mt-tab-container-item>
            <mt-tab-container-item id="2" class="sort2">
                <Sort3></Sort3>
            </mt-tab-container-item>
            <mt-tab-container-item id="3" class="sort3">
                <Sort2></Sort2>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import Sort1 from './sort/Sort01.vue'
import Sort2 from './sort/Sort02.vue'
import Sort3 from './sort/Sort03.vue'
export default {
    components: {
        Sort1,
        Sort2,
        Sort3
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
.sort {
    .sort1 {
        .gridlist-demo-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 50px;
        }

        .gridlist-demo {
            width: 500px;
            height: 566px;
            overflow-y: auto;
        }
    }
    .sort2 {
        .gridlist-demo-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 50px;
        }

        .gridlist-demo {
            width: 500px;
            height: 566px;
            overflow-y: auto;
        }
    }
    .sort3 {
        .gridlist-demo-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin-top: 50px;
        }

        .gridlist-demo {
            width: 500px;
            height: 566px;
            overflow-y: auto;
        }
    }


    .is-selected {
        background-color: #7e57c2;
    }

    .mint-navbar {
        position: fixed;
        top: 0px;
        z-index: 444;
        width: 100%;
        height: 50px;
        border-bottom: 3px solid #ececec;
    }

    .mint-navbar .mint-tab-item-label {
        font-size: 18px;
    }

    .mint-navbar .mint-tab-item {
        padding: 13px 0;
    }

    .mint-navbar .mint-tab-item.is-selected {
        color: #fff;
    }

    .mint-navbar .mint-tab-item {
        color: #7e57c2;
    }

    .mt-tab-container {
        overflow: scroll;
        flex: 1;
    }
}
</style>