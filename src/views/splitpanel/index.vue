<template>
	<div class="index-view">
		<div class="split-panel">
			<Split v-model="split3">
				<div slot="left" class="demo-split-pane no-padding">
					<Split v-model="split4" mode="vertical">
						<div slot="top" class="demo-split-pane">
							Top Pane
						</div>
						<div slot="bottom" class="demo-split-pane bottom-panel">
							Bottom Pane
						</div>
					</Split>
				</div>
				<div slot="right" class="demo-split-pane" style="background:#8addcd">
					Right Pane
				</div>
			</Split>
		</div>
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
	width: 100%;
	height: 100%;
	border: 1px solid;
}
.demo-split{
	height: 200px;
	border: 1px solid #dcdee2;
}
.demo-split-pane{
	padding: 10px;
}
.demo-split-pane.no-padding{
	height: 200px;
	padding: 0;
	width: 100%;
	height: 100%;
}
.bottom-panel{
	background:#fcdf7f
}
.pane{
    width: 100%;
    height: 100%;
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
      background: palevioletred;
    }
  }
</style>