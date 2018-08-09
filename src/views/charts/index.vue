<template>
	<div class="index-view">
		<Alert banner>使用<a href="">Chart.js</a>的图表组件。</Alert>
		<Row :gutter="30">
			<template v-for="(data, n) in datas">
				<Col span="12" :key="n">
				<Card :key="n" :style="{marginBottom: '30px'}">
					<p slot="title">
						<Icon :type="data.icon"></Icon>
						{{data.title}}
					</p>
					<a href="http://www.chartjs.org/" slot="extra" target="_blank">
						<Icon type="document-text"></Icon>
						doc
					</a>
					<div class="chart-body">
						<chart :type="data.type" :data="dataList" :options="options" :chart-ref="'chart_'+n"></chart>
					</div>
				</Card>
			</Col>
		</template>
	</Row>
</div>
</template>
<script>
import chart from './../../components/commons/charts/index.vue'
export default{
	components: {
		chart
	},
	data () {
		return {
			dataList: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
							beginAtZero: true
						}
					}]
				}
			},
			datas: [
			{ title: 'Bar Chart', type: 'bar', icon: 'stats-bars' },
			{ title: 'Line Chart', type: 'line', icon: 'steam' },
			{ title: 'Pie Chart', type: 'pie', icon: 'pie-graph' }
			]
		}
	},
	methods: {

	},
	mounted () {
	}
}
</script>
<style>
.chart-body{
	height: 320px;
}
</style>
