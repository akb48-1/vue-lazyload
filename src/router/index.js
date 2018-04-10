import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import child from '@/components/child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    }, {
      path: '/a',
      name: 'child',
      component: child,
      redirect: '/page1'
    }, {
      path: '/page1',
      name: 'page1',
      component: resolve => require(['../components/router-view/page1'], resolve).default
    }
  ]
})