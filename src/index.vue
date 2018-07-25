<template>
	<div>
		<layout>
			<div slot="top">
				<top></top>
			</div>
			<div slot="left">
				<left></left>
			</div>
			<div slot="main">
				<router-view/>
			</div>
		</layout>
	</div>
</template>
<script>
import layout from './components/commons/layout.vue'
import top from './components/commons/top.vue'
import left from './components/commons/left.vue'
export default {
	name: 'dashboard',
	components: {
		layout, left, top
	},
	data () {
		return {
			title: '欢迎回来'
		}
	}
}
</script>
