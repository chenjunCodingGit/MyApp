<template>
  <div id="app">
    
  
   <FooterView></FooterView>
  </div>
</template>

<script>
  import FooterView from './components/Footer.vue'
  export default {
    components:{
      FooterView
    },
    name: 'app',
    mounted() {
      this.slider()
    },
   
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
  
</style>
