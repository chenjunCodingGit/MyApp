<template>
  <div class="topbar">
		<mu-list>
			<mu-list-item :title="title">
				<mu-icon slot="left" value="keyboard_arrow_left" />
			</mu-list-item>
		</mu-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
			title:'登录'
    }
  },
  methods: {
  }
}
</script>

<style > 

</style>
