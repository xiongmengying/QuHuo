import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/components/Index'], resolve),
      children: [
        {
          path: '/business',
          name: 'Business',
          component: resolve => require(['@/components/Business'], resolve)
        },
        {
          path: '/case',
          name: 'Case',
          component: resolve => require(['@/components/Case'], resolve)
        },
        {
          path: '/clients',
          name: 'Clients',
          component: resolve => require(['@/components/Clients'], resolve)
        },
        {
          path: '/contact',
          name: 'Contact',
          component: resolve => require(['@/components/Contact'], resolve)
        },
        {
          path: '/quhuo',
          name: 'Quhuo',
          component: resolve => require(['@/components/Quhuo'], resolve)
        }
      ]
    }
  ]
})
