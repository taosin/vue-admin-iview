<template>
	<div class="layout">
		<div class="top">
			<slot name="top">
			</slot>
		</div>
		<div class="main">
			<div class="left">
				<slot name="left">
				</slot>
			</div>
			<div class="right">
				<slot name="main">
				</slot>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	name: 'layout',
	props: [],
	data () {
		return {
			name: '233132'
		}
	}
}
</script>

<style scoped lang="less">
.layout{
	.top{
		border-bottom: 1px solid #ddd;
		position: absolute;
		width: 100%;
		height: 80px;
		left: 0;
		right: 0;
		top: 0;
	}
	.main{
		position: absolute;
		width: 100%;
		left: 0;
		right: 0;
		top: 80px;
		bottom: 0;

		.left{
			width: 200px;
			border-right: 1px solid #ddd;
			position: absolute;
			height: 100%;
		}
		.right{
			left: 200px;
			position: absolute;
			height: 100%;
			right:0;
		}
	}
}
</style>
