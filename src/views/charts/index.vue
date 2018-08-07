<template>
	<div class="index-view">
		<Row :gutter="30">
			<Col span="12">
				<Card>
					<p slot="title">
						<Icon type="stats-bars"></Icon>
						Bar Chart
					</p>
					<a href="http://www.chartjs.org/" slot="extra" target="_blank">
						<Icon type="document-text"></Icon>
						doc
					</a>
					<div class="chart-body">
						<canvas id="myChart" style="width:100%;height:100%"></canvas>
					</div>
				</Card>
			</Col>
		</Row>
	</div>
</template>
<script>
const Chart = require('chart.js')
export default{
	data () {
		return {

		}
	},
	methods: {

	},
	mounted () {
		var ctx = document.getElementById("myChart")
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [{
					label: '# of Votes',
					data: [102, 19, 3, 5, 2, 3],
					backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		})
	}
}
</script>
<style>
	.chart-body{
		height: 320px;
	}
</style>