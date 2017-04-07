<template>
  <div id="app">
    <Search></Search>
  
    <FooterView></FooterView>
  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import FooterView from './components/Footer.vue'

  export default {
    components: {
      Search,
      FooterView
    },
    mounted() {
      this.slider()
    },
    name: 'app',
    data() {
      return {
        
      }
    },
    methods: {
      slider() {
  
      }
    }
  }
</script>

<style>
  @import './assets/css/base.css'
</style>
