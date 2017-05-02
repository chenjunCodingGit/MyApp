<template>
	<div class='about'>
		<div class="person">
			<router-link to="/register" class="register">注册</router-link>
			<router-link to="/login" class="login">登录</router-link>
		</div>
		<mu-list>
			<mu-list-item title="个人资料" icon="keyboard_arrow_right">
				<mu-icon slot="left" value="person_outline" />
				<mu-icon slot="right" value="keyboard_arrow_right" />
			</mu-list-item>
		</mu-list>
		<mu-paper>
			<mu-bottom-nav :value="bottomNav" @change="handleChange">
				<mu-bottom-nav-item value="recents" title="待付款" icon="credit_card" />
				<mu-bottom-nav-item value="favorites" title="待发货" icon="send" />
				<mu-bottom-nav-item value="nearby" title="待收货" icon="description" />
				<mu-bottom-nav-item value="over	" title="已完成" icon="assignment_turned_in" />
			</mu-bottom-nav>
		</mu-paper>
		<mu-list>
			<mu-list-item title="个人资料">
				<mu-icon slot="left" value="person_outline" />
				<mu-icon slot="right" value="keyboard_arrow_right" />
			</mu-list-item>
			<mu-list-item title="收货地址">
				<mu-icon slot="right" value="keyboard_arrow_right" />
				<mu-icon slot="left" value="location_on" />
			</mu-list-item>
			<mu-list-item title="密码管理" toggleNested>
				<mu-icon slot="left" value="inbox" />
				<mu-list-item slot="nested" title="我的推荐">
					<mu-icon slot="right" value="keyboard_arrow_right" />
					<mu-icon slot="left" value="grade" />
				</mu-list-item>
				<mu-list-item slot="nested" title="邀请礼包" toggleNested>
					<mu-icon slot="left" value="inbox" />
					<mu-list-item title="我的订单" slot="nested">
						<mu-icon slot="right" value="keyboard_arrow_right" />
						<mu-icon slot="left" value="drafts" />
					</mu-list-item>
					<mu-list-item title="我的订单" slot="nested">
						<mu-icon slot="right" value="keyboard_arrow_right" />
						<mu-icon slot="left" value="drafts" />
					</mu-list-item>
				</mu-list-item>
			</mu-list-item>
		</mu-list>
		<!--
					<mobile-tear-sheet>
						
					</mobile-tear-sheet>-->
	</div>
</template>
<script>
//import mobileTearSheet from '../../../components/mobileTearSheet'
export default {
	components: {
		//'mobile-tear-sheet': mobileTearSheet
	},
	name: 'app',
	data: function () {
		return {
			bottomNav: 'recents' //当前选中的nav
		}
	},
	methods: {
		handleChange(val) {
			this.bottomNav = val
			//console.log(val)
		}
	}
}
</script>

<style type='text/css' >
.person {
	width: 100%;
	height: 16rem;
	background-color: #7e57c2;
}

.is-selected {
	background-color: #7e57c2;
}

.person .login,
.person .register {
	color: #fff;
	font-size: 18px;
	padding: 6px;
	float: left;
}

.person .login {
	float: right;
}
</style>