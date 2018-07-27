<template>
	<div class="index">
		<layout>
			<div slot="top">
				<top></top>
			</div>
			<div slot="left">
				<side-menu></side-menu>
			</div>
			<div slot="main">
				<div class="tags">
					<i-tag></i-tag>
				</div>
				<transition name="move" mode="out-in">
					<keep-alive >
						<router-view class="view"></router-view>
					</keep-alive>
				</transition>
			</div>
		</layout>
	</div>
</template>
<script>
import layout from './components/commons/layout.vue'
import top from './components/commons/top.vue'
import sideMenu from './components/commons/left.vue'
import iTag from './components/commons/tag.vue'

import './../static/css/index.scss'
export default {
	name: 'dashboard',
	components: {
		layout, sideMenu, top, iTag
	},
	data () {
		return {
			title: '欢迎回来'
		}
	}
}
</script>
