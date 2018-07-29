<template>
	<div class="dashboard">
		<div class="today-counts">
			<Row :gutter="30">
				<Col span="6">
					<div class="count-box">
						<div class="left eye">
							<Icon type="eye" size="64"></Icon>
						</div>
						<div class="right eye-text">
							<h2>123334</h2>
							<p>用户访问量</p>
						</div>
					</div>
				</Col>
				<Col span="6">
					<div class="count-box">
						<div class="left message">
							<Icon type="chatbubble-working" size="64"></Icon>
						</div>
						<div class="right message-text">
							<h2>123334</h2>
							<p>系统消息</p>
						</div>
					</div>
				</Col>
				<Col span="6">
					<div class="count-box">
						<div class="left order">
							<Icon type="bag" size="64"></Icon>
						</div>
						<div class="right order-text">
							<h2>123334</h2>
							<p>今日订单量</p>
						</div>
					</div>
				</Col>
				<Col span="6">
					<div class="count-box">
						<div class="left cash">
							<Icon type="social-yen" size="64"></Icon>
						</div>
						<div class="right cash-text">
							<h2>123334</h2>
							<p>今日交易额</p>
						</div>
					</div>
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
