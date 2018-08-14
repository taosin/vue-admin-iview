<template>
	<div class="index">
		<Layout :style="{height: '100%'}">
			<Sider hide-trigger :style="{background: '#515a6e'}">
				<div class="layout-logo">
					<div class="logo"></div>
				</div>
				<side-menu :menus="menus"  @on-select="handleSelect" :active-name="active"></side-menu>
			</Sider>
			<Layout>
				<Layout :style="{padding:'20px'}">
					<Header :style="{background: '#fff',margin:'-20px',marginBottom:'10px'}">
						<Breadcrumb :style="{margin: '4px 0'}">
							<template v-for="(bread, index) in breads">
								<BreadcrumbItem :key="index">{{bread.name}}</BreadcrumbItem>
							</template>
						</Breadcrumb>
						<!-- <div class="layout-nav">
							<top></top>
						</div> -->
					</Header>
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
			{ title: '色彩', url: '/colors', icon: 'ios-pricetag' },
			{ title: 'Tabs', url: '/tabs', icon: 'ios-pricetag' },
			{ title: '表格', url: '/tables', icon: 'ios-grid' },
			{ title: '上传', url: '/upload', icon: 'md-cloud-upload' },
			{ title: '按钮', url: '/button', icon: 'logo-youtube' },
			{ title: '表单', url: '/forms', icon: 'ios-list-box' },
			{ title: '图表',
			url: '10',
			icon: 'ios-aperture',
			children: [
			{ title: 'Chart.js', url: '/charts', icon: 'ios-aperture' },
			{ title: '饼图', url: '2', icon: 'document-text' }
			] },
			{ title: '组件',
			url: '7',
			icon: 'ios-hammer',
			children: [
			{ title: '窗口分割', url: '/split', icon: 'ios-square' },
			{ title: '富文本编辑器', url: '2', icon: 'logo-markdown' },
			{ title: 'markdown', url: '3', icon: 'logo-markdown' },
			{ title: '文件上传', url: '4', icon: 'ios-document' }
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
