<template>
    <div class='about' >
        这是{{about}}页面
    </div>
</template>
<script>
    export default  {
          data: function () {
            return {
                about: 'about'
            }
        }
    }
</script>

<style type='text/css' >
  .about{
    color:#f00;
  }
</style>