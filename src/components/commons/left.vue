<template>
	<div class="layout">
		<Menu theme="dark" width="auto" name="1" :active-name="activeName" @on-select="handleSelect" :class="className">
			<template v-for="(m, index) in menus">
				<MenuItem :name="m.url" :key="index" v-if="!m.children">
					<Icon :type="m.icon" :key="index"></Icon>
					<span>{{m.title}}</span>
				</MenuItem>
				<Submenu v-if="m.children && m.children.length > 1" :key="index" :name="m.url">
					<template slot="title">
						<Icon :type="m.icon" :key="index"></Icon>
						<span>{{m.title}}</span>
					</template>
					<template v-for="(ch,i) in m.children">
						<MenuItem :name="ch.url" :key="i">
							<span>{{ch.title}}</span>
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
	props: {
		menus: {
			type: Array,
			default () {
				return []
			}
		},
		activeName: {
			type: String,
			default: '/'
		},
		className: {
			type: Array,
			default: () => {
				return []
			}
		},
		collapsed: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			theme3: 'dark',
			active: '/'
		}
	},
	methods: {
		handleSelect (name) {
			this.$emit('on-select', name)
		}
	},
	watch: {
		className (val) {
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
