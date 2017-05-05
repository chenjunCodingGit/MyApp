<template>
  <div class="topbar" >
    <mu-icon color='#fff' value="keyboard_arrow_left" @click='back()' />
    <p class="top-title">{{title}}</p>
  </div>
</template>

<script>
export default {
  props: ['title'],//父组件向子组件传值
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    back() {
      this.$router.push({ path: '/home' })
      //this.$router.go(-1)
      //window.history.go(-1)
    }
  }
}
</script>

<style lang="less">
 .topbar {
   padding: 0;
   height: 44px;
   background-color: #7e57c2;
   display: flex;
  //  justify-content: center;
   align-items: center;
   .mu-icon {
     height: 44px;
     line-height: 44px;
     flex: 2;
     text-align: center;
     font-size: 28px;
   }
   .top-title {
     flex: 20;
     margin-left: 140px;
     color: #fff;
     font-size: 16px;
     letter-spacing: 4px;
   }
 }
</style>
