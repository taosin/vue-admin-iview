<template>
	<div>
		<Table :columns="columns" :data="datas" editable searchable search-place="top"></Table>
		<br>
		<Button @click="handleAllCureentRecords" :type="transTab.btnType">{{transTab.btnText}}</Button>
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
				title: '姓名',
				key: 'title',
				sortable: true,
				render: (h, params) => {
					return h('div', [
						h('a', {
							style: {
								color: '#333',
								textDecoration: 'underline',
								textUnderlinePosition: 'under'
							}
						}, params.row.title)
						])
				}
			},
			{	
				title: '年龄',
				key: 'age'
			},
			{	
				title: '性别',
				key: 'sex',
				align: 'center'
			},
			{	
				title: '操作',
				key: 'status',
				align: 'center',
				render: (h, params) => {
					return h('div', [
						h('Button', {
							props: {
								size: 'small',
								type: 'primary'
							},
							on: {
								click: () => {
									this.changeStatus(params)
								}
							}
						}, '编辑')
						])
				}
			}
			],
			datas: [
			{
				title: 'Tom',
				age: 19,
				sex: 1,
				status: 1
			},
			{
				title: 'Angle',
				age: 29,
				sex: 0,
				status: 1
			},
			{
				title: 'Sam',
				age: 21,
				sex: 0,
				status: 1
			},
			{
				title: 'Jimmiy',
				age: 34,
				sex: 1,
				status: 1
			},
			{
				title: 'Lisa',
				age: 9,
				sex: 0,
				status: 1
			}
			]
		}
	},
	computed: {
		filterDatas () {
			const self = this
			return self.datas.filter(data => {
				return data.status === 1
			})
		},
		transTab () {
			return {
				unread: { btnText: '全部标为已读', btnType: 'primary' },
				read: { btnText: '全部删除', btnType: 'error' },
				trash: { btnText: '全部还原', btnType: 'default' }
			}[this.currentTab]
		}
	},
	filters: {
	},

	watch: {
		datas (val) {
		}
	},
	methods: {
		changeStatus (params, afterStatus) {
			let index = params.index
			this.filterDatas[index].status = afterStatus
		},
		handleAllCureentRecords () {
			let afterStatus = ''
			switch (this.currentTab) {
				case 'unread':
				afterStatus = 'read'
				break
				case 'read':
				afterStatus = 'trash'
				break
				case 'trash':
				afterStatus = 'unread'
				break
			}
			return this.filterDatas.forEach(data => {
				data.status = afterStatus
			})
		}
	}
}
</script>
