<template>
	<div>
		<layout>
			<div slot="top">
				<top></top>
			</div>
			<div slot="left">
				<side-menu></side-menu>
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
import sideMenu from './components/commons/left.vue'
export default {
	name: 'dashboard',
	components: {
		layout, sideMenu, top
	},
	data () {
		return {
			title: '欢迎回来'
		}
	}
}
</script>
