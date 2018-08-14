<template>
	<div class="layout">
		<div class="user-info">
			<Badge class="badge">
				<Icon type="ios-notifications-outline" size="26"></Icon>
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
			this.$router.push('/login')
		}
	}
}
</script>

<style scoped lang="less">
.layout{
	width:100%;
	display: flex;
	flex: 1;
	.user-info{
		width:100%;
		.badge{
		}
		.avatar{
			margin: 0 20px;
		}
	}
}
</style>
