<template>
    <div class='about'>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">option A</mt-tab-item>
            <mt-tab-item id="2">option B</mt-tab-item>
            <mt-tab-item id="3">option C</mt-tab-item>
        </mt-navbar>
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :key = 'n.id'
                         :title="'content ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :key = 'n.id'
                         :title="'content ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :key = 'n.id'
                         :title="'content ' + n" />
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
.is-selected {
    background-color:#ff5c00;

}
</style>