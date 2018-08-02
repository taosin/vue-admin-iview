<template>
	<div class="index">
		<Layout :style="{height: '100%'}">
			<Header>
				<div class="layout-logo">
				</div>
				<div class="layout-nav">
					<top></top>
				</div>
			</Header>
			<Layout>
				<Sider hide-trigger :style="{background: '#4a505e'}">
					<side-menu :menus="menus"  @on-select="handleSelect" :active-name="active"></side-menu>
				</Sider>
				<Layout :style="{padding: '0 14px 24px'}">
					<Breadcrumb :style="{margin: '14px 0'}">
						<template v-for="(bread, index) in breads">
							<BreadcrumbItem :key="index">{{bread.name}}</BreadcrumbItem>
						</template>
					</Breadcrumb>
					<Content :style="{padding: '10px', minHeight: '280px', background: '#fff', height:'100%', overflow: 'auto'}">
						<transition name="slide-fade">
							<router-view/>
						</transition>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	</div>
</template>
<script>
import top from './components/commons/top.vue'
import sideMenu from './components/commons/left.vue'
import iTag from './components/commons/tag.vue'

import './../static/css/index.scss'
export default {
	name: 'dashboard',
	components: {
		sideMenu, iTag, top
	},
	data () {
		return {
			title: '欢迎回来',
			menus: [
			{ title: '系统首页', url: '/', icon: 'ios-home' },
			{ title: 'Tabs', url: '/tabs', icon: 'ios-pricetag' },
			{ title: '表格', url: '/tables', icon: 'ios-list' },
			{ title: '上传', url: '/upload', icon: 'upload' },
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
			],
			isCollapsed: false,
			active: '/',
			breads: [
			{ name: '首页' },
			{ name: 'Dashboard' }
			]
		}
	},
	watch: {
		'$route' (to, from) {
		}
	},
	computed: {
	},
	mounted () {
		this.active = this.$route.path
	},
	methods: {
		handleSelect (name) {
			this.gotoPage(name)
		},

		gotoPage (path) {
			this.$router.push(path)
		}
	}
}
</script>
