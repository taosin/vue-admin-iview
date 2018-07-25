<template>
	<div>
		<p>首页</p>
		<h1>
			{{title}}
		</h1>
		<layout>
			<div slot="left">
				大大大
			</div>
		</layout>
	</div>
</template>

<script>
import layout from './../components/commons/layout.vue'
export default {
	name: 'dashboard',
	components: {
		'layout': layout
	},
	data () {
		return {
			title: '欢迎回来'
		}
	}
}
</script>
