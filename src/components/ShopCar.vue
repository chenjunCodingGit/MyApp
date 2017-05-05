<template>
    <div>
        <mu-raised-button label="toggle drawer" @click="toggle()" />
        <mu-raised-button label="undocked drawer" @click="toggle(true)" />
        <mu-drawer :open="open" :docked="docked" @close="toggle()" width="130">
            <mu-list @itemClick="docked ? '' : toggle()">
                <mu-list-item title="Menu Item 1" />
                <mu-list-item title="Menu Item 2"/>
                <mu-list-item title="Menu Item 3"/>
                <mu-list-item v-if="docked" @click.native="open = false" title="Close" />
            </mu-list>
        </mu-drawer>
        <div v-for="list in 10">{{list}}</div>
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

<style lang="css">
ul,
li,
ol {
    list-style: none;
}

image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
}
</style>