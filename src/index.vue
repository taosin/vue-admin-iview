<template>
	<div class="index">
		<Layout :style="{height: '100%'}">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                    </div>
                    <div class="layout-nav">
                        <top></top>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#4a505e'}">
                    <side-menu :menus="menus"></side-menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>首页</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                         <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
	</div>
</template>
<script>
// import layout from './components/commons/layout.vue'
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
			],
			isCollapsed: false,
			active: '/'
		}
	},
	computed: {
		rotateIcon () {
			return [
			'menu-icon',
			this.isCollapsed ? 'rotate-icon' : ''
			]
		},
		menuitemClasses () {
			return [
			'menu-item',
			this.isCollapsed ? 'collapsed-menu' : ''
			]
		}
	},
	methods: {
		collapsedSider () {
			this.$refs.side1.toggleCollapse()
		}
	}
}
</script>
