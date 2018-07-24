<template>
	<div>
		<p>首页</p>
		<h1>
			{{title}}
		</h1>
		<div>
			<Page :current="1" :total="100"></Page>
		</div>
		<layout>
			<slot name="left">
				大大大
			</slot>
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
