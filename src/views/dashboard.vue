<template>
	<div class="dashboard">

		<!-- 展示台 -->
		<div class="today-counts">
			<Row :gutter="30">
				<Col span="6">
					<div class="box eye">
						<div class="left">
							<Icon type="eye" size="64"></Icon>
						</div>
						<div class="right">
							<h2>123334</h2>
							<p>用户访问量</p>
						</div>
					</div>
				</Col>
				<Col span="6">
					<div class="box message">
						<div class="left">
							<Icon type="chatbubble-working" size="64"></Icon>
						</div>
						<div class="right">
							<h2>123334</h2>
							<p>系统消息</p>
						</div>
					</div>
				</Col>
				<Col span="6">
					<div class="box order">
						<div class="left">
							<Icon type="bag" size="64"></Icon>
						</div>
						<div class="right">
							<h2>123334</h2>
							<p>今日订单量</p>
						</div>
					</div>
				</Col>
				<Col span="6">
					<div class="box cash">
						<div class="left">
							<Icon type="social-yen" size="64"></Icon>
						</div>
						<div class="right">
							<h2>123334</h2>
							<p>今日交易额</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>

		<div class="middle-content">
			<Row :gutter="30">
				<Col span="12">
					div.content-box
				</Col>
			</Row>
		</div>
	</div>
</template>

<script>
import './../../static/css/dashboard.scss'

export default {
	name: 'dashboard',
	components: {
	},
	data () {
		return {
			title: 'This is dashboard'
		}
	}
}
</script>
