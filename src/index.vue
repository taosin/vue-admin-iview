<template>
  <div>
    <router-view/>
  </div>
</template>
<script>
import layout from './components/commons/layout.vue'
export default {
	name: 'dashboard',
	components: {
		'layout': layout
	},
	data () {
		return {
			title: '欢迎回来'
		}
	}
}
</script>
