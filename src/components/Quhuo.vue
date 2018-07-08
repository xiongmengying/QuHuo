<template>
  <div class="swiper-container" style="background: url('static/images/back/intro1.jpg') no-repeat center center;background-size: cover;">
    <div class="swiper-wrapper">
        <div id="Intro" class="swiper-slide">
          <Intro></Intro>
        </div>
        <div id="About" class="swiper-slide">
          <About></About>
        </div>
        <div id="Architecture" class="swiper-slide">
          <Architecture></Architecture>
        </div>
        <div id="Resource" class="swiper-slide">
          <Resource></Resource>
        </div>
        <div id="Business" class="swiper-slide">
          <Business></Business>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'quhuo',
  data() {
    return {
      initialSlide: 0,
      queryList: ['about', 'resource', 'business', 'architecture']
    }
  },
  mounted() {
    new Swiper ('.swiper-container', {
      initialSlide: this.initialSlide,
      mousewheel: true,
      direction: 'vertical',
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
    //   nextButton: '.swiper-button-next',
    //   prevButton: '.swiper-button-prev',
      // 如果需要滚动条
    //   scrollbar: '.swiper-scrollbar',
    })
  },
  updated() {
    this.Swiper();
  },
  watch: {
    $route(to, from) {
      console.log(this.$route.query);
      this.initialSlide = this.queryList.indexOf(this.$route.query.from);
      console.log(this.initialSlide);
    }
  },
  methods: {
    Swiper() {
      new Swiper ('.swiper-container', {
        initialSlide: this.initialSlide,
        mousewheel: true,
        direction: 'vertical',
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        //   nextButton: '.swiper-button-next',
        //   prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        //   scrollbar: '.swiper-scrollbar',
      })
    }
  }
}
</script>

<style>
.swiper-container {
  width: 100%;
  height: 709px;
}
</style>
