<template>
	<div>
		<Upload action="//jsonplaceholder.typicode.com/posts/" :multiple="multiple">
			<Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
		</Upload>
	</div>
</template>
<script>
export default{
	name: 'upload',
	data () {
		return {
			multiple: true
		}
	}
}
</script>
