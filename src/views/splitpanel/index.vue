<template>
	<div class="index-view split-panel">
		<Split v-model="split3" style="height:100%">
			<div slot="left" class="demo-split-pane no-padding">
				<Split v-model="split4" mode="vertical" class="left-pane">
					<div slot="top" class="top-pane">
						Top Pane
					</div>
					<div slot="bottom" class="bottom-pane">
						Bottom Pane
					</div>
				</Split>
			</div>
			<div slot="right" class="right-pane">
				Right Pane
			</div>
		</Split>
	</div>
</template>
<script>
export default{
	data () {
		return {
			split3: 0.5,
			split4: 0.5
		}
	}
}
</script>
<style lang="less">
.split-panel{
	border: 1px solid;
	background:red;
	min-height:600px;
}
.demo-split-pane.no-padding{
	height: 580px;
	padding: 0;
	width: 100%;
}
.bottom-panel{
	background:#fcdf7f
}
&.left-pane{
	background: sandybrown;
}
&.right-pane{
	background: palevioletred;
}
&.top-pane{
	background: sandybrown;
}
&.bottom-pane{
	background: orange;
}
</style>
