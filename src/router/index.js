import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers.js'
import iView from 'iview'
Vue.use(Router)

const routers = new Router({
	routes,
	mode: 'history'
})

routers.beforeEach((to, from, next) => {
	iView.LoadingBar.start()
	next()
})

routers.afterEach(to => {
	iView.LoadingBar.finish()
	window.scrollTo(0, 0)
})
export default routers
