<template>
  <div class="nav2">

    <mu-paper style="max-width: 420px; ">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="home" :size="26" title="首页" icon="home" />
        <mu-bottom-nav-item value="sort" :size="26" title="分类" icon="sort" />
        <mu-bottom-nav-item value="shopcar" :size="26" title="购物车" icon="shopping cart"   />
        <mu-bottom-nav-item value="about" :size="26" title="我的" icon="person pin"  />
      </mu-bottom-nav>
    </mu-paper>


  </div>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'home',
      bottomNavColor: 'home'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
      this.$router.push('/'+val)
    }
  }
}
</script>

<style > 
.nav2{
        position:fixed;
        width: 100%;
        max-width: 420px;
        bottom: 0px;
        left: 0px;
        box-shadow: 0px -2px 8px rgba(0, 0, 0, 0.2);
        z-index: 999999999;
        background: #fff;
    }
.mu-bottom-item-active .mu-bottom-item-text{
  color: #ff5500;
}
</style>
