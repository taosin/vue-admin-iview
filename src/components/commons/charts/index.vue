<template>
	<div>
		<canvas :ref="ref" style="width:100%;height:100%"></canvas>
	</div>
</template>
<script>
const Chart = require('chart.js')
export default{
	props: {
		ref: {
			Type: String,
			default: 'chartCavans'
		},
		opt: {
			type: Object,
			default : {}
		}
	},
	data () {
		return {

		}
	},
	methods: {
		init () {
			const self = this
			let cavans = self.$refs.ref
			let ctx = canvas.getContext('2d')
			let myChart = new Chart(ctx, {

			})
		}
	}
}
</script>
