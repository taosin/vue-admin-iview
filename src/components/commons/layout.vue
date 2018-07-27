<template>
	<div class="layout">
		<div class="top">
			<slot name="top">
			</slot>
		</div>
		<div class="main">
			<div class="left" @click="setHide" :style="{width:hide? 50+'px': 200+'px'}">
				<slot name="left">
				</slot>
			</div>
			<div class="right" :style="{left:hide? 50+'px': 200+'px'}">
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
			name: '233132',
			hide: false
		}
	},
	methods: {

		// 控制导航菜单的展开和收缩
		setHide () {
			// this.hide = !this.hide
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
		left: 0;
		right: 0;
		top: 80px;
		bottom: 0;

		.left{
			width: 200px;
			border-right: 1px solid #ddd;
			position: absolute;
			height: 100%;
			transition: .5s;
			background:#404655;
		}
		.right{
			left: 200px;
			position: absolute;
			right:0;
			top:0;
			bottom: 0;
			transition: .5s;
		}
	}
}
</style>
