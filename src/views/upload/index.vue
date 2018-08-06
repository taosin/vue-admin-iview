<template>
	<div class="index-view">
		<Row>
			<Col span="12">
				<uploaded :multiple="multiple" :draggable="draggable">
				</uploaded>
			</Col>
		</Row>
		<div class="magin-div">
			多/单选：<i-switch v-model="multiple" style="margin-right: 5px"></i-switch>
		</div>
		<div class="magin-div">
			是否拖拽：<i-switch v-model="draggable" style="margin-right: 5px"></i-switch>
		</div>
	</div>
</template>

<script>
import uploaded from './../../components/commons/upload/index'
export default{
	name: 'upload',
	components: {
		uploaded
	},
	data () {
		return {
			multiple: true,
			draggable: true
		}
	}
}
</script>
