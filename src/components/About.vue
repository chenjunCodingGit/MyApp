<template>
	<div class='about'>
		<div class="person">
			<router-link v-show="isShowName" to="/register" class="register">注册</router-link>
			<router-link v-show="isShowName" to="/login" class="login">登录</router-link>
			<div class="user-header-img" :class="{headerImgBc:isHeader}">
	
			</div>
			<div class="username">
				<div>
					{{username}}
				</div>
			</div>
		</div>
		<mu-list>
			<mu-list-item class="list-item-order" title="我的订单" icon="keyboard_arrow_right">
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
			<mu-list-item title="个人资料" @click='personInfo' class="list-top-one">
				<mu-icon slot="left" value="person_outline" />
				<mu-icon slot="right" value="keyboard_arrow_right" />
			</mu-list-item>
			<mu-list-item title="收货地址" @click='address'>
				<mu-icon slot="right" value="keyboard_arrow_right" />
				<mu-icon slot="left" value="location_on" />
			</mu-list-item>
			<mu-list-item title="帐号设置" @click='setAccount'>
				<mu-icon slot="right" value="keyboard_arrow_right" />
				<mu-icon slot="left" value="settings" />
			</mu-list-item>
			<mu-list-item title="我的收藏" @click='setFavorite'>
				<mu-icon slot="right" value="keyboard_arrow_right" />
				<mu-icon slot="left" value="grade" />
			</mu-list-item>
		</mu-list>
		<mu-raised-button v-show="quitBtn" label="退出当前帐号" fullWidth @click='quitAcount' />
	</div>
</template>
<script>
import staticList from './data/Global.js'

export default {
	components: {
	},
	created() {
		this.$http.jsonp(
			'http://' + this.regUrl + '/php/session.php',
			{
				jsonp: 'callback'
			}
		).then((res) => {
			if (res.ok) {
				res.json().then((res) => {
					//console.log(res.status)
					if (res.status) {
						this.isHeader = true
						this.username = res.status
						this.isShowName = false
						this.quitBtn = true
					}
				}, (err) => {
					console.log(err)
				})
			} else {
				console.log(9)
			}
		}, (error) => {
			//console.log(error)
		})
	},
	name: 'app',
	data: function () {
		return {
			bottomNav: 'recents', //当前选中的nav,
			username: '',
			isShowName: true,
			quitBtn: false,
			isHeader: false,
			regUrl: staticList.staticList[0]
		}
	},
	methods: {
		handleChange(val) {
			this.bottomNav = val
			//console.log(val)
		},
		setAccount() {
			this.$router.push({ path: '/account' }) //跳转到搜索页 
		},
		quitAcount() { //退出当前账号
			this.$http.jsonp(
				'http://' + this.regUrl + '/php/session_destroy.php',
				{
					jsonp: 'callback'
				}
			).then((res) => {
				if (res.ok) {
					res.json().then((res) => {
						//console.log(res.status)
						if (res.status == 1) {
							this.isHeader = false
							this.username = ''
							this.isShowName = true
							this.quitBtn = false
							this.$router.push({ path: '/about' }) //跳转到搜索页
						}
					}, (err) => {
						console.log(err)
					})
				} else {
					console.log(9)
				}
			}, (error) => {
				//console.log(error)
			})


		},
		address() {
			this.$router.push({ path: '/address' })
		},
		personInfo(){
			this.$router.push({ path: '/personInfo' })
		},
		setFavorite(){
			this.$router.push({ path: '/favorite' })
		}
	}
}
</script>

<style lang="less">
.about {
	.list-item-order {
		border-top: 1px solid #ececec;
	}
	.list-top-one {
		border-top: 1px solid #ececec;
	}
	.mu-item-wrapper {
		border-bottom: 1px solid #ececec;
	}
	.person {
		.username,
		.user-header-img {
			position: absolute;
		}
		.user-header-img {
			left: 50%;
			height: 60px;
			width: 60px;
			line-height: 60px;
			border-radius: 50%;
			margin-left: -30px;
			top: 5rem; // background-color: #f00;
		}
		.user-header-img.headerImgBc {
			background-color: #f00;
		}
		.username {
			top: 10.5rem;
			width: 100%;
			display: flex;
			height: 26px;
			font-size: 18px;
			color: #fff;
			justify-content: center;
			align-items: center;
		}
	}
}

.person {
	width: 100%;
	height: 18rem;
	background-color: #7e57c2;
	position: relative;
}

.is-selected {
	background-color: #7e57c2;
}

.mu-list {
	padding: 4px 0;
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

.mu-raised-button {
	height: 40px;
}
</style>