<template>
	<div>
		<template v-for="(color, index) in colors">
			<Row :gutter="30" :key="index">
				<div class="color-title">
					<Icon type="paintbrush"></Icon>
					<span>{{color.title}}</span>
				</div>
				<template v-for="(c,i) in color.children">
					<Col span="8" :key="i">
					<div class="color-card" :style="{background:c.rgb}" :key="i">
						<div class="card-body">
							<div class="color-name">
								{{c.title}}
							</div>
							<div class="color-desc">
								{{c.hex}}
							</div>
						</div>
					</div>
				</Col>
			</template>
		</Row>
	</template>
</div>
</template>

<script>
import './colors.scss'
export default{
	name: 'colors',
	components: {
	},
	data () {
		return {
			colors: [{
				'title': 'Theme colors',
				'children': [{
					title: 'Primary Color',
					hex: '#2d8cf0',
					rgb: 'rgb(45,140,240)'
				},
				{
					title: 'Light Primary Color',
					hex: '#5cadff',
					rgb: 'rgb(92,172,255)'
				},
				{
					title: 'Dark Primary Color',
					hex: '#2b85e4',
					rgb: 'rgb(43,133,228)'
				},
				{
					title: 'Brand Primary Color',
					'hex': '#20a8d8',
					'rgb': 'rgb(32, 168, 216)'
				},
				{
					'title': 'Brand Secondary Color',
					'hex': '#c8ced3',
					'rgb': 'rgb(200, 206, 211)'
				},
				{
					'title': 'Brand Success Color',
					'hex': '#4dbd74',
					'rgb': 'rgb(77, 189, 116)'
				},
				{
					'title': 'Brand Danger Color',
					'hex': '#f86c6b',
					'rgb': 'rgb(248, 108, 107)'
				},
				{
					'title': 'Brand Warning Color',
					'hex': '#ffc107',
					'rgb': 'rgb(255, 193, 7)'
				},
				{
					'title': 'Brand Info Color',
					'hex': '#63c2de',
					'rgb': 'rgb(99, 194, 222)'
				},
				{
					'title': 'Brand Light Color',
					'hex': '#f0f3f5',
					'rgb': 'rgb(240, 243, 245)'
				},
				{
					'title': 'Brand Dark Color',
					'hex': '#2f353a',
					'rgb': 'rgb(47, 53, 58)'
				}
				]
			},
			{
				'title': 'Grays',
				'children': [{
					'title': 'Gray 100 Color',
					'hex': '#f0f3f5',
					'rgb': 'rgb(240, 243, 245)'
				},
				{
					'title': 'Gray 200 Color',
					'hex': '#e4e7ea',
					'rgb': 'rgb(228, 231, 234)'
				},
				{
					'title': 'Gray 300 Color',
					'hex': '#c8ced3',
					'rgb': 'rgb(200, 206, 211)'
				},
				{
					'title': 'Gray 400 Color',
					'hex': '#acb4bc',
					'rgb': 'rgb(172, 180, 188)'
				},
				{
					'title': 'Gray 500 Color',
					'hex': '#8f9ba6',
					'rgb': 'rgb(143, 155, 166)'
				},
				{
					'title': 'Gray 600 Color',
					'hex': '#73818f',
					'rgb': 'rgb(115, 129, 143)'
				},
				{
					'title': 'Gray 700 Color',
					'hex': '#5c6873',
					'rgb': 'rgb(92, 104, 115)'
				},
				{
					'title': 'Gray 800 Color',
					'hex': '#2f353a',
					'rgb': 'rgb(47, 53, 58)'
				},
				{
					'title': 'Gray 900 Color',
					'hex': '#23282c',
					'rgb': 'rgb(35, 40, 44)'
				}
				]
			},
			{
				'title': 'Additional colors',
				'children': [{
					'title': 'Blue Color',
					'hex': '#20a8d8',
					'rgb': 'rgb(32, 168, 216)'
				},
				{
					'title': 'Indigo Color',
					'hex': '#6610f2',
					'rgb': 'rgb(102, 16, 242)'
				},
				{
					'title': 'Purple Color',
					'hex': '#6f42c1',
					'rgb': 'rgb(111, 66, 193)'
				},
				{
					'title': 'Pink Color',
					'hex': '#e83e8c',
					'rgb': 'rgb(232, 62, 140)'
				},
				{
					'title': 'Red Color',
					'hex': '#f86c6b',
					'rgb': 'rgb(248, 108, 107)'
				},
				{
					'title': 'Orange Color',
					'hex': '#f8cb00',
					'rgb': 'rgb(248, 203, 0)'
				},
				{
					'title': 'Yellow Color',
					'hex': '#ffc107',
					'rgb': 'rgb(255, 193, 7)'
				},
				{
					'title': 'Green Color',
					'hex': '#4dbd74',
					'rgb': 'rgb(77, 189, 116)'
				},
				{
					'title': 'Teal Color',
					'hex': '#20c997',
					'rgb': 'rgb(32, 201, 151)'
				},
				{
					'title': 'Cyan Color',
					'hex': '#17a2b8',
					'rgb': 'rgb(23, 162, 184)'
				}
				]
			}
			]
		}
	}
}
</script>
