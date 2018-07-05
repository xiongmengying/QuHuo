import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Architecture from '@/components/Architecture'
import Business from '@/components/Business'
import Case from '@/components/Case'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Index from '@/components/Index'
import Intro from '@/components/Intro'
import Resource from '@/components/Resource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/architecture',
          name: 'Architecture',
          component: Architecture
        },
        {
          path: '/business',
          name: 'Business',
          component: Business
        },
        {
          path: '/case',
          name: 'Case',
          component: Case
        },
        {
          path: '/clients',
          name: 'Clients',
          component: Clients
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: '/intro',
          name: 'Intro',
          component: Intro
        },
        {
          path: '/resource',
          name: 'Resource',
          component: Resource
        },
      ]
    }
  ]
})
