<template>
    <div>
        <ul>
            <li v-for="item in list">
                <img v-lazy="item">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:['https://github.com/chenjunCodingGit/MyApp/blob/master/src/assets/images/img_1.jpg?raw=true','https://github.com/chenjunCodingGit/MyApp/blob/master/src/assets/images/img_1.jpg?raw=true','https://github.com/chenjunCodingGit/MyApp/blob/master/src/assets/images/img_1.jpg?raw=true']
        }
    }
}
</script>

<style lang="css">
ul,li,ol{
    list-style: none;
}
image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
}
</style>