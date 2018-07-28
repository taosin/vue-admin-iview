<template>
	<div class="layout">
		<div class="top-left">
			<h1>iView后台管理系统</h1>
		</div>
		<div class="top-right">
			<div class="user-info">
				<Badge count="3" class="badge">
					<Icon type="ios-bell-outline" size="30"></Icon>
				</Badge>
				<Avatar src="http://blog.gdfengshuo.com/example/work/static/img/img.jpg" class="avatar" size="large"/>
				<Dropdown class="name">
					<a>
						admin
						<Icon type="arrow-down-b"></Icon>
					</a>
					<DropdownMenu slot="list">
						<DropdownItem>个人信息</DropdownItem>
						<DropdownItem :on-click="logout">退出</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'top',
	data () {
		return {
			name: '233132'
		}
	},
	methods: {
		logout () {
			debugger
			this.$router.push('/login')
		}
	}
}
</script>

<style scoped lang="less">
.layout{
	padding: 0 20px;
	line-height: 80px;
	.top-left{
		width: 220px;
		float:left;
	}
	.top-right{
		float: right;
		width:400px;
		text-align: right;
		padding-right:20px;
		.user-info{
			.avatar{
				margin:0 20px;
			}
			.name{
				float: right;
			}
			.badge{
				margin-top: 10px;
			}
		}
	}
}
</style>
