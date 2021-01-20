import Vue from 'vue'
import VueRouter from 'vue-router'

// 按组分块懒加载
const Home = ()=> import(/*webpackChunkName: "home_home"*/'../page/Home/Home.vue')


Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/home'},
  { path: '/home',component: Home },
]

const router = new VueRouter({
  routes
})

export default router
