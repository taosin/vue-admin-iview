<template>
	<div>
		<Upload action="//jsonplaceholder.typicode.com/posts/" :multiple="multiple" :type="type">
			<Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
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
		draggable:{
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			type: this.draggable ? 'drag' : 'select'
		}
	},
	methods: {

	}
}
</script>