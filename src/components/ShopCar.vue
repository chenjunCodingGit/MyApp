<template>
    <div class="shopcar">
        <!--<mu-raised-button label="toggle drawer" @click="toggle()" />
                <mu-raised-button label="undocked drawer" @click="toggle(true)" />
                <mu-drawer :open="open" :docked="docked" @close="toggle()" width="130">
                    <mu-list @itemClick="docked ? '' : toggle()">
                        <mu-list-item title="Menu Item 1" />
                        <mu-list-item title="Menu Item 2"/>
                        <mu-list-item title="Menu Item 3"/>
                        <mu-list-item v-if="docked" @click.native="open = false" title="Close" />
                    </mu-list>
                </mu-drawer>
                <div v-for="list in 10">{{list}}</div>-->
        <mu-appbar title="购物车">
            <mu-flat-button label="清空购物车" slot="right" />
        </mu-appbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //list:['https://github.com/chenjunCodingGit/MyApp/blob/master/src/assets/images/img_1.jpg?raw=true','https://github.com/chenjunCodingGit/MyApp/blob/master/src/assets/images/img_1.jpg?raw=true','https://github.com/chenjunCodingGit/MyApp/blob/master/src/assets/images/img_1.jpg?raw=true']
            open: true,
            docked: true
        }
    },
    methods: {
        toggle(flag) {
            this.open = !this.open
            this.docked = !flag
        }
    }
}
</script>

<style lang="less">
.shopcar {
    .mu-appbar {
        padding: 0px;
        height: 50px;
        line-height: 50px;
        .right span{
            font-family: "Microsoft YaHei";
            font-size: 13px;
            // letter-spacing: 1px;
        }
        .mu-appbar-title span {
            font-size: 16px;
            letter-spacing: 1px;
            margin-left:157px;
        }
        .mu-flat-button-label {
            padding-right: 7px;
            padding-left: 7px;
        }
    }
}
</style>