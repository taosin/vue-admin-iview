<template>
	<div class="layout">
		<div class="top-left">
			<h1>iView后台管理系统</h1>
		</div>
		<div class="top-right">
			<div class="user-info">
				eqeq
				<img src="http://blog.gdfengshuo.com/example/work/static/img/img.jpg" alt="">
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
	}
}
</script>

<style scoped lang="less">
.layout{
	padding-left:20px;
	line-height: 80px;
	.top-left{
		border: 1px solid;
		width: 200px;
	}
	.top-right{
		float: right;
		width:400px;
		background: red;
	}
}
</style>
