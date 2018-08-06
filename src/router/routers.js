/*
* @Author: iMocco
* @Date:   2018-08-01 11:12:14
* @Last Modified by:   iMocco
* @Last Modified time: 2018-08-06 15:16:38
*/

const routes = [
{
	path: '/',
	redirect: '/index'
}, {
	path: '/login',
	component: resolve => require(['@/views/login.vue'], resolve),
	meta: { title: '登录' }
}, {
	path: '/index',
	component: resolve => require(['@/index.vue'], resolve),
	meta: { title: '首页' },
	children: [
	{
		path: '/',
		redirect: '/dashboard'
	}, {
		path: '/dashboard',
		component: resolve => require(['@/views/dashboard/index.vue'], resolve),
		meta: { title: '首页' }
	}, {
		path: '/tabs',
		component: resolve => require(['@/views/tabs/index.vue'], resolve),
		meta: { title: 'Tabs' }
	}, {
		path: '/tables',
		component: resolve => require(['@/views/tables/index.vue'], resolve),
		meta: { title: 'Tables' }
	}, {
		path: '/upload',
		component: resolve => require(['@/views/upload/index.vue'], resolve),
		meta: { title: 'Upload' }
	}, {
		path: '/button',
		component: resolve => require(['@/views/buttons/index.vue'], resolve),
		meta: { title: 'Button' }
	}, {
		path: '/forms',
		component: resolve => require(['@/views/form/index.vue'], resolve),
		meta: { title: 'Forms' }
	}, {
		path: '/charts',
		component: resolve => require(['@/views/charts/index.vue'], resolve),
		meta: { title: 'Charts' }
	}, {
		path: '/colors',
		component: resolve => require(['@/views/color/index.vue'], resolve),
		meta: { title: 'Color' }
	}
	]
}, {
	path: '/*',
	component: resolve => require(['@/views/404.vue'], resolve),
	meta: { title: '404' }
}
]
export default routes
