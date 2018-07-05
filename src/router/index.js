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
          path: '/about',
          name: 'About',
          component: resolve => require(['@/components/About'], resolve)
        },
        {
          path: '/architecture',
          name: 'Architecture',
          component: resolve => require(['@/components/Architecture'], resolve)
        },
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
          path: '/intro',
          name: 'Intro',
          component: resolve => require(['@/components/Intro'], resolve)
        },
        {
          path: '/resource',
          name: 'Resource',
          component: resolve => require(['@/components/Resource'], resolve)
        },
      ]
    }
  ]
})
