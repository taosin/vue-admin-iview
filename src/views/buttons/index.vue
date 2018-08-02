<template>
	<div>
		<Button :type="btnType">{{btnText}}</Button>
		<br />
		<Radio-group v-model="btnType" type="button">
			<template v-for="btn in buttons">
				<Radio :label="btn.type" :key="btn.type" :on-change="change(btn)">{{btn.text}}</Radio>
			</template>
		</Radio-group>	
	</div>
</template>
<script>
export default{
	name: 'upload',
	data () {
		return {
			multiple: true,
			btnType: 'default',
			btnText: 'Default',
			buttons: [
			{ type: 'default', text: 'Default' },
			{ type: 'primary', text: 'primary' },
			{ type: 'ghost', text: 'Ghost' },
			{ type: 'dashed', text: 'Dashed' },
			{ type: 'text', text: 'Text' },
			{ type: 'info', text: 'Success' },
			{ type: 'warning', text: 'Warning' },
			{ type: 'error', text: 'Error' },
			]
		}
	},
	methods: {
		change (btn) {
			// this.btnText = btn.text
		}
	}
}
</script>
