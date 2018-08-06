<template>
	<div class="pagination">
		<Page
		:total="total"
		:current="current"
		:page-size="pageSize"
		:show-sizer="showSizer"
		:show-total="showTotal"
		:page-size-opts="pageSizeOpts"
		@on-change="changeCurrent"
		@on-page-size-change="changeSizer"></Page>
	</div>
</template>
<script>
export default{
	props: {
		total: {
			type: Number,
			default: 0
		},
		showSizer: {
			type: Boolean,
			default: true
		},
		showTotal: {
			type: Boolean,
			default: true
		},
		pageSizeOpts: {
			type: Array,
			default: () => {
				return [10, 20, 50, 100]
			}
		},
		current: {
			type: Number,
			default: 1
		},
		pageSize: {
			type: Number,
			default: 10
		}
	},
	data () {
		return {
			page: {
				currentPage: this.current,
				pageSize: this.pageSize,
				total: this.total
			}
		}
	},
	methods: {
		// 改变当前页
		changeCurrent (currentPage) {
			this.page.currentPage = currentPage
			this.$emit('change', this.page)
		},

		// 改变当前每页数
		changeSizer (size) {
			this.page.pageSize = size
			this.$emit('change', this.page)
		}
	}
}
</script>
<style>
	.pagination{
		width: 100%;
		height: 100%;
	}
</style>
