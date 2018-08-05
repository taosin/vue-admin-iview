<template>
	<div>
		<div style="margin: 10px">
			显示边框 <i-switch v-model="showBorder" style="margin-right: 5px"></i-switch>
			显示斑马纹 <i-switch v-model="showStripe" style="margin-right: 5px"></i-switch>
			显示索引 <i-switch v-model="showIndex" style="margin-right: 5px"></i-switch>
			显示多选框 <i-switch v-model="showCheckbox" style="margin-right: 5px"></i-switch>
			显示表头 <i-switch v-model="showHeader" style="margin-right: 5px"></i-switch>
			表格滚动 <i-switch v-model="fixedHeader" style="margin-right: 5px"></i-switch>
			<br>
			<br>
			表格尺寸
			<Radio-group v-model="tableSize" type="button">
				<Radio label="large">大</Radio>
				<Radio label="default">中</Radio>
				<Radio label="small">小</Radio>
			</Radio-group>
		</div>
		<Table :columns="tableColumns" :data="datas" ref="selection" :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize"></Table>
		<div class="magin-div text-right">
			<Page :total="datas.length" show-sizer show-total :page-size-opts="[5,10,20]" @on-change="changeCurrent" @on-page-size-change="changeSize"></Page>
		</div>
		<br>
		<Button @click="handleSelectAll">{{isSelectedAll?'取消全选':'设置全选'}}</Button>
	</div>
</template>
<script>
export default{
	name: 'tabs',
	data () {
		return {
			datas: [
			{
				name: 'John Brown',
				age: 18,
				address: 'New York No. 1 Lake Park',
				date: '2016-10-03'
			},
			{
				name: 'Jim Green',
				age: 24,
				address: 'London No. 1 Lake Park',
				date: '2016-10-01'
			},
			{
				name: 'Joe Black',
				age: 30,
				address: 'Sydney No. 1 Lake Park',
				date: '2016-10-02'
			},
			{
				name: 'Jon Snow',
				age: 26,
				address: 'Ottawa No. 2 Lake Park',
				date: '2016-10-04'
			},
			{
				name: 'John Brown',
				age: 18,
				address: 'New York No. 1 Lake Park',
				date: '2016-10-03'
			},
			{
				name: 'Jim Green',
				age: 24,
				address: 'London No. 1 Lake Park',
				date: '2016-10-01'
			},
			{
				name: 'Joe Black',
				age: 30,
				address: 'Sydney No. 1 Lake Park',
				date: '2016-10-02'
			},
			{
				name: 'Jon Snow',
				age: 26,
				address: 'Ottawa No. 2 Lake Park',
				date: '2016-10-04'
			}
			],
			isSelectedAll: false,
			showBorder: false,
			showStripe: false,
			showHeader: true,
			showIndex: true,
			showCheckbox: false,
			fixedHeader: false,
			tableSize: 'default'
		}
	},
	computed: {
		tableColumns () {
			let columns = []
			if (this.showCheckbox) {
				columns.push({
					type: 'selection',
					width: 60,
					align: 'center'
				})
			}
			if (this.showIndex) {
				columns.push({
					type: 'index',
					width: 60,
					align: 'center'
				})
			}
			columns.push({
				title: 'Date',
				key: 'date',
				sortable: true
			})
			columns.push({
				title: 'Name',
				key: 'name'
			})
			columns.push({
				title: 'Age',
				key: 'age',
				sortable: true,
				filters: [
				{
					label: 'Greater than 25',
					value: 1
				},
				{
					label: 'Less than 25',
					value: 2
				}
				],
				filterMultiple: false,
				filterMethod (value, row) {
					if (value === 1) {
						return row.age > 25
					} else if (value === 2) {
						return row.age < 25
					}
				}
			})
			columns.push({
				title: 'Address',
				key: 'address',
				filters: [
				{
					label: 'New York',
					value: 'New York'
				},
				{
					label: 'London',
					value: 'London'
				},
				{
					label: 'Sydney',
					value: 'Sydney'
				}
				],
				filterMethod (value, row) {
					return row.address.indexOf(value) > -1
				}
			})
			return columns
		}
	},
	filters: {
	},

	watch: {
		datas (val) {
		}
	},
	methods: {
		handleSelectAll () {
			this.isSelectedAll = !this.isSelectedAll
			this.$refs.selection.selectAll(this.isSelectedAll)
		},
		changeCurrent (e) {
			console.log(e)
		},
		changeSize (e) {
			console.log(e)
		}
	}
}
</script>
