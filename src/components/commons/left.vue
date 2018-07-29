<template>
	<div class="layout">
		<Menu theme="dark" width="auto" name="1" :active-name="active">
			<template v-for="(m, index) in menus">
				<MenuItem :name="m.url" :key="index" v-if="!m.children">
					<Icon :type="m.icon" :key="index"></Icon>
					{{m.title}}
				</MenuItem>
				<Submenu :name="m.url" v-if="m.children && m.children.length > 1" :key="index">
					<template slot="title">
						<Icon :type="m.icon" :key="index"></Icon>
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
	props: [ 'menus' ],
	data () {
		return {
			theme3: 'dark',
			active: '/'
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
