<template>
  <div class="swiper-container" id="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in detail" :key="index">
        <a v-on:click="showPreview(index,detail,swiperObj)">
          <figure class="wp-avatar banner">
            <img v-cloak :src="item"/>
          </figure>
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

export default {
  name: 'quhuo',
  data() {
    return {
      detail: [
        'static/images/clients/IT/intel.png',
        'static/images/clients/IT/dareu.png',
        'static/images/clients/IT/hp.png'
      ]
    }
  },
  mounted() {
    setTimeout(function () {
      state.swiperObj =  new Swiper('#swiper', {
        loop: true,
        pagination: '.swiper-pagination',
        autoplay: 2000,
        paginationClickable: true
      });
    }, 100)
  }
}
</script>
