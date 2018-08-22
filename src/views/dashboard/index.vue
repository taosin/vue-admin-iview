<template>
	<div class="dashboard">

		<!-- 展示台 -->
		<div class="today-counts">
			<Row :gutter="30">
				<Col span="6">
				<div class="box eye">
					<div class="left">
						<Icon type="ios-eye" size="64"></Icon>
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
					<Icon type="ios-chatbubbles" size="64"></Icon>
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
				<Icon type="ios-paper" size="64"></Icon>
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
			<Icon type="logo-yen" size="64"></Icon>
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
		<Col span="6">
		<div class="box user">
			<div class="user-info">
				<img src="http://blog.gdfengshuo.com/example/work/static/img/img.jpg" class="avator" />
				<div class="user-name">
					<h1>Admin</h1>
					<h3>超级管理员</h3>
				</div>
			</div>
			<div class="login-log">
				<div>
					<span>上次登录时间：</span>
					<span>2010-12-12 12:12:12</span>
				</div>
				<div>
					<span>上次登录地点：</span>
					<span>上海</span>
				</div>
			</div>
		</div>
	</Col>
	<Col span="6">
	<div class="box todolist">
		<todo></todo>
	</div>
</Col>
<Col span="12">
<div class="box">
	<Table :columns="columns" :data="datas" style="width:100%;border:none"></Table>
</div>
</Col>

</Row>
</div>
</div>
</template>

<script>
import './dashboard.scss'
import todo from './components/todolist/index.vue'
export default {
	name: 'dashboard',
	components: {
		todo
	},
	data () {
		return {
			title: 'This is dashboard',
			columns: [
			{
				title: '订单号',
				key: 'name'
			},
			{
				title: '金额',
				key: 'age',
				align: 'center',
				render: (h, params) => {
					return h('div', [
						h('Icon', {
							props: {
								type: 'social-yen'
							}
						}),
						h('strong', params.row.age)
						])
				}
			},
			{
				title: '状态',
				key: 'status',
				align: 'center',
				render: (h, params) => {
					return h('div', [
						h('Tag', {
							props: {
								color: params.row.status ? 'green' : 'red'
							}
						}, params.row.status ? '已完成' : '待付款')
						])
				}
			}
			],
			datas: [
			{
				name: '1532941050304',
				age: 18,
				status: 1
			},
			{
				name: '1532941050304',
				age: 18,
				status: 0
			},
			{
				name: '1532941050304',
				age: 18,
				status: 0
			},
			{
				name: '1532941050304',
				age: 18,
				status: 1
			},
			{
				name: '1532941050304',
				age: 18,
				status: 1
			},
			{
				name: '1532941050304',
				age: 24,
				status: 0
			},
			{
				name: '1532941050304',
				age: 30,
				status: 1
			},
			{
				name: '1532941050304',
				age: 26,
				status: 1
			}
			]
		}
	},
	mounted () {
		// this.$Notice.error({
		// 	title: '标题标题',
		// 	desc: 'Here is the notification description. Here is the notification description. ',
		// 	duration: 0
		// })
	}
}
</script>
