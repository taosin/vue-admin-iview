<template>
	<div>
		<Tabs :animated="true" v-model="currentTab">
			<template v-for="tab in tabs" >
				<TabPane :label="tab.title" :key="tab.val" :name="tab.val">
					<Table :columns="columns" :data="filterDatas" :show-header="false"></Table>
				</TabPane>
			</template>
		</Tabs>
	</div>
</template>
<script>
export default{
	name: 'tabs',
	data () {
		return {
			animated: true,
			tabs: [
			{ title: '未读消息', val: 'unread' },
			{ title: '已读消息', val: 'read' },
			{ title: '回收站', val: 'trash' }
			],
			currentTab: 'unread',
			columns: [
			{
				key: 'title'
			},
			{
				key: 'date',
				align: 'right',
				width: 180
			},
			{
				key: 'status',
				align: 'right',
				width: 100,
				render: (h, params) => {
					let text = '标为已读'
					let type = 'default'
					let status = params.row.status
					switch (status) {
						case 'unread':
						text = '标为已读'
						type = 'default'
						break
						case 'read':
						text = '删除'
						type = 'error'
						break
						case 'trash':
						text = '还原'
						type = 'primary'
						break
					}
					return h('div', [
						h('Button', {
							props: {
								size: 'small',
								type: type
							},
							on: {
								click: () => {
									this.changeStatus(params)
								}
							}
						}, text)
						])
				}
			}
			],
			datas: [
			{
				title: '【系统通知】该系统将于今晚凌晨2点进行维护',
				date: '2016-10-03 12:12:12',
				status: 'unread'
			},
			{
				title: '【系统通知】该系统将于今晚凌晨2点进行维护',
				date: '2016-10-03',
				status: 'read'
			},
			{
				title: '【系统通知】该系统将于今晚凌晨2点进行维护',
				date: '2016-10-03',
				status: 'trash'
			},
			{
				title: '【系统通知】该系统将于今晚凌晨2点进行维护',
				date: '2016-10-03',
				status: 'unread'
			},
			{
				title: '【系统通知】该系统将于今晚凌晨2点进行维护',
				date: '2016-10-03',
				status: 'unread'
			},
			{
				title: '【系统通知】该系统将于今晚凌晨2点进行维护',
				date: '2016-10-03',
				status: 'unread'
			},
			{
				title: '今晚有红包哦',
				date: '2016-10-03',
				status: 'unread'
			}
			]
		}
	},
	computed: {
		filterDatas (val) {
			const self = this
			return self.datas.filter(data => {
				return data.status === self.currentTab
			})
		}
	},
	methods: {
		changeStatus (params) {
			let status = params.row.status
			let index = params.index
			switch (status) {
				case 'unread':
				this.filterDatas[index].status = 'read'
				break
				case 'read':
				this.filterDatas[index].status = 'trash'
				break
				case 'trash':
				this.filterDatas[index].status = 'unread'
				break
			}
		}
	}
}
</script>
