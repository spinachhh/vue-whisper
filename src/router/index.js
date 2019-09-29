import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
	{
		path: '/',
		redirect: '/index'
		// 路由重定向redirect
	},
	{
		name: 'index',
		path: '/index',
		component: () => import('@/pages/index/index')
		// 懒加载引入
	},
	{
		name: 'detail',
		path: '/detail',
		component: () => import('@/pages/detail/detail')
	}
]

export default new Router({
  routes,   //  routes为routes: routes 的简写
  //自定义路由切换时页面如何滚动
  scrollBehavior(to, from, savedPosition) {   
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
