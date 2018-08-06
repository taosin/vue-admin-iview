<template>
	<div>
		<Upload action="//jsonplaceholder.typicode.com/posts/" :multiple="multiple" :type="type">
			<div style="padding: 20px 0" v-show="draggable">
				<Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
				<p>Click or drag files here to upload</p>
			</div>
			<Button type="ghost" icon="ios-cloud-upload-outline" v-show="!draggable">Upload files</Button>
		</Upload>
	</div>
</template>
<script>
export default{
	props: {
		multiple: {
			type: Boolean,
			default: false
		},
		draggable: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			type: this.draggable ? 'drag' : 'select'
		}
	},
	watch: {
		draggable (val) {
			this.type = this.draggable ? 'drag' : 'select'
		}
	},
	methods: {

	}
}
</script>
