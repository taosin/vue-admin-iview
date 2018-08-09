<template>
	<div class="chart">
		<canvas :ref="chartRef" style="width:100%;height:100%"></canvas>
	</div>
</template>
<script>
const Chart = require('chart.js')
export default{
	props: {
		chartRef: {
			Type: String,
			default: 'chartCavans'
		},
		type: {
			Type: String,
			default: 'bar'
		},
		data: {
			type: Object,
			default: () => {
				return {
					labels: [],
					datasets: []
				}
			}
		},
		options: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	data () {
		return {
		}
	},
	methods: {
		init () {
			const self = this
			let cavans = self.$refs[self.chartRef]
			let ctx = cavans.getContext('2d')
			var chart = new Chart(ctx, {
				type: self.type,
				data: self.data,
				options: self.options
			})
		}
	},
	mounted(){
		this.init()
	}
}
</script>
<style>
	.chart{
		width: 100%;
		height: 100%;
	}
</style>