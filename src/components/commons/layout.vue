<template>
	<div class="layout">
		<slot name="top">
		</slot>
		<slot name="left">
		</slot>
		<slot name="main">
		</slot>
	</div>
</template>
<script>
export default{
	name: 'layout',
	data () {
		return {
			name: '233132'
		}
	}
}
</script>

<style scoped lang="less">
</style>
