<template>
    <div class='about'>
       <div class="person" >

       </div>
        <mt-cell
            title="标题文字"
            href="//github.com"
            is-link
            value="带链接">
        </mt-cell>
        <mt-cell title="标题文字">
            <span>icon 是图片</span>
            <img slot="icon" src="../assets/img/about.png" width="24" height="24">
        </mt-cell>
        <mt-cell title="标题文字" icon="search" value="带 icon"></mt-cell>
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
.person{
    width: 100%;
    height: 15rem;
    background-color: #ff5c00;
}
.is-selected {
    background-color:#ff5c00;
}
</style>