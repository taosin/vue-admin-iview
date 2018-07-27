<template>
	<div class="layout">
		<Menu theme="dark" width="auto">
			<template v-for="(m, index) in menus">
				<MenuItem :name="m.url" :key="index" v-if="!m.children">
					{{m.title}}
				</MenuItem>
				<Submenu :name="m.url" v-if="m.children && m.children.length > 1" :key="index">
					<template slot="title">
						<Icon :type="m.icon"></Icon>
						{{m.title}}
					</template>
					<template v-for="(ch,i) in m.children">
						<MenuItem :name="ch.url" :key="i">
							{{ch.title}}
						</MenuItem>
					</template>
				</Submenu>
			</template>
		</Menu>
	</div>
</template>
<script>
export default{
	name: 'left',
	data () {
		return {
			theme3: 'dark',
			menus: [
			{ title: '系统首页', url: '1', icon: 'document-text' },
			{ title: '表格', url: '5', icon: 'document-text' },
			{ title: '权限', url: '6', icon: 'document-text' },
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

<style scoped lang="less">
.layout{
	.top{
		border: 1px solid #333;
		width:100%;
		height:100%;

	}
}
</style>
