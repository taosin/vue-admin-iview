<template>
	<div class="index">
		<layout>
			<div slot="top">
				<top></top>
			</div>
			<div slot="left">
				<side-menu :menus="menus"></side-menu>
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
			title: '欢迎回来',
			menus: [
			{ title: '系统首页', url: '/', icon: 'document-text' },
			{ title: '表格', url: '5', icon: 'document-text' },
			{ title: '权限', url: '6', icon: 'document-text' },
			{ title: '图表',
			url: '10',
			icon: 'stats-bars',
			children: [
			{ title: '折线图', url: '2', icon: 'document-text' },
			{ title: '饼图', url: '2', icon: 'document-text' }
			] },
			{ title: '表单相关',
			url: '7',
			icon: 'share',
			children: [
			{ title: '富文本编辑器', url: '2', icon: 'document-text' },
			{ title: 'markdown', url: '3', icon: 'document-text' },
			{ title: '文件上传', url: '4', icon: 'document-text' }
			] }
			]
		}
	}
}
</script>
