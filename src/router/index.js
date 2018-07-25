import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/',
		redirect: '/index'
	}, {
		path: '/index',
		component: resolve => require(['../index.vue'], resolve),
		meta: { title: '首页' },
		children: [
		{
			path: '/',
			redirect: '/dashboard'
		}, {
			path: '/dashboard',
			component: resolve => require(['../views/dashboard.vue'], resolve),
			meta: { title: '首页' }
		}
		]
	}
	]
})
