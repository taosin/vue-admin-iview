<template>
	<div>
		<p>首页</p>
		<h1>
			{{title}}
		</h1>
		<div>
			<Page :current="1" :total="100"></Page>
		</div>
	</div>
</template>

<script>
export default {
	name: 'dashboard',
	data () {
		return {
			title: '欢迎回来'
		}
	}
}
</script>
