<template>
  <div>
    <div class="main">
      <NavBar></NavBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components:{
    NavBar
  }
}
</script>

<style> 
</style>
