// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Carousel, CarouselItem } from 'element-ui';
import Intro from '@/components/Intro'
import About from '@/components/About'
import Architecture from '@/components/Architecture'
import Resource from '@/components/Resource'
import Business from '@/components/Business'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false

Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.component('Intro', Intro)
Vue.component('About', About)
Vue.component('Architecture', Architecture)
Vue.component('Resource', Resource)
Vue.component('Business', Business)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
