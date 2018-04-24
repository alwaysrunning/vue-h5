import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [{
    path: '*',
    redirect: '/404',
    hidden: true
  }, {
    path: '/404',
    component: resolve => require(['@/components/common/404/404.vue'], resolve),
    hidden: true
  },{
    path: '/index',
    component: resolve => require(['@/components/conf/index/HelloWorld.vue'], resolve),
    hidden: true
  }]
})

export default router
