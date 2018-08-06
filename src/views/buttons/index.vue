<template>
	<div>
		<div>
			示例：<Button :type="btnType" :icon="showIcon?'ios-search':''" :size="size" :disabled="disabled" :loading="loading" :long="long" v-show="!shape">{{loading?'加载中':btnText}}</Button>
			<Button :type="btnType" shape="circle" :icon="showIcon?'ios-search':''" :size="size" :disabled="disabled" :loading="loading" :long="long" v-show="shape">{{loading?'加载中':btnText}}</Button>
			<Button :type="btnType" shape="circle" icon="ios-search" v-show="shape" :size="size" :disabled="disabled" :loading="loading"></Button>
		</div>
		<br />
		<div>
			类型：
			<Radio-group v-model="btnType" type="button" >
				<template v-for="btn in buttons">
					<Radio :label="btn.type" :key="btn.type">{{btn.text}}</Radio>
				</template>
			</Radio-group>
		</div>
		<br />
		<div>
			图标：<i-switch v-model="showIcon"></i-switch>
		</div>
		<br />
		<div>
			形状：<i-switch v-model="shape"></i-switch>
		</div>
		<br />
		<div>
			尺寸：
			<Radio-group v-model="size" type="button" >
				<Radio label="large" >大</Radio>
				<Radio label="default" >中</Radio>
				<Radio label="small" >小</Radio>
			</Radio-group>
		</div>
		<br />
		<div>
			禁用：<i-switch v-model="disabled"></i-switch>
		</div>
		<br />
		<div>
			加载中状态：<i-switch v-model="loading"></i-switch>
		</div>
		<br />
		<div>
			长按钮：<i-switch v-model="long"></i-switch>
		</div>
		<br>
		<hr>
		<br>
		<div>
			按钮组：
			<ButtonGroup :vertical="vertical">
				<Button type="ghost" icon="social-facebook"></Button>
				<Button type="ghost" icon="social-twitter"></Button>
				<Button type="ghost" icon="social-googleplus"></Button>
				<Button type="ghost" icon="social-tumblr"></Button>
			</ButtonGroup>
		</div>
		<br />
		<div>
			横/纵向：<i-switch v-model="vertical"></i-switch>
		</div>
	</div>
</template>
<script>
export default{
	name: 'upload',
	data () {
		return {
			multiple: true,
			btnType: 'default',
			buttons: [
			{ type: 'default', text: 'Default' },
			{ type: 'primary', text: 'Primary' },
			{ type: 'ghost', text: 'Ghost' },
			{ type: 'dashed', text: 'Dashed' },
			{ type: 'text', text: 'Text' },
			{ type: 'info', text: 'Success' },
			{ type: 'warning', text: 'Warning' },
			{ type: 'error', text: 'Error' }
			],
			showIcon: true,
			shape: false,
			size: 'default',
			disabled: false,
			loading: false,
			long: false,
			vertical: false
		}
	},
	computed: {
		btnText () {
			return this.buttons.filter(btn => {
				return btn.type === this.btnType
			})[0].text
		}
	},
	methods: {
	}
}
</script>
