<template>
  <div id="app">
    
  <router-view></router-view>
   <!--<FooterView></FooterView>-->
  </div>
</template>

<script>
  import FooterView from './components/public/NavBar.vue'
  export default {
    components:{
      FooterView
    },
    name: 'app',
    mounted() {
      //this.slider()
    },
   
    data() {
      return {
        
      }
    },
    methods: {
      // slider() {
  
      // }
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  html{
    margin: 0;
    padding: 0;
  }
</style>
