/**
 * @description: 路由
 * @author: Andy Burns
 */

import Vue from 'vue';
import Router from 'vue-router';

const Hello = () => import(/* webpackChunkName: "hello" */ '@/views/hello');
const view = () => import(/* webpackChunkName: "view" */ '@/views/view');

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'hello',
    component: Hello,
    meta: {
      title: '首页',
      requireAuth: false // 登录权限
    }
  },
  {
    path: '/view',
    name: 'view',
    component: view,
    meta: {
      title: 'vue默认页'
    }
  }
];

const router = new Router({
  mode: 'history',
  // mode: 'hash',
  routes
})

export default router;
