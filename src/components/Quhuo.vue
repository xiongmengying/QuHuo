<template>
  <div class="swiper-container" style="background: url('static/images/back/intro.jpg') no-repeat center center;background-size: cover;">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Intro></Intro>
        </div>
        <div class="swiper-slide">
          <About></About>
        </div>
        <div class="swiper-slide">
          <Business></Business>  
        </div>
        <div class="swiper-slide">
          <Architecture></Architecture>  
        </div>
        <div class="swiper-slide">
          <Resource></Resource>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'quhuo',
  data() {
    return {
      mySwiper: '',
      initialSlide: 0,
      queryList: ['about', 'business', 'architecture', 'resource']
    }
  },
  mounted() {
    this.Swiper();
    this.mySwiper.slideTo(this.queryList.indexOf(this.$route.query.from) +1, 1000, false);
    // this.mySwiper = new Swiper ('.swiper-container', {
    //   initialSlide: this.initialSlide,
    //   mousewheel: {
    //     releaseOnEdges: true, // 当Swiper处于边缘位置时，Swiper释放鼠标滚轮事件，鼠标可以控制页面滚动
    //   },
    //   direction: 'vertical',
    //   // 如果需要分页器
    //   pagination: '.swiper-pagination',
    //   // 如果需要前进后退按钮
    //   // nextButton: '.swiper-button-next',
    //   // prevButton: '.swiper-button-prev',
    //   // 如果需要滚动条
    //   scrollbar: {el: '.swiper-scrollbar',hide:true},
    // })
  },
  watch: {
    $route(to, from) {
      this.initialSlide = this.queryList.indexOf(this.$route.query.from);
      this.mySwiper.slideTo(this.initialSlide + 1, 1000, false);
    }
  },
  methods: {
    Swiper() {
      this.mySwiper = new Swiper ('.swiper-container', {
      initialSlide: this.initialSlide,
      mousewheel: {
        releaseOnEdges: true, // 当Swiper处于边缘位置时，Swiper释放鼠标滚轮事件，鼠标可以控制页面滚动
      },
      direction: 'vertical',
      // 如果需要分页器
      pagination: '.swiper-pagination',
      // 如果需要前进后退按钮
      // nextButton: '.swiper-button-next',
      // prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      scrollbar: {el: '.swiper-scrollbar',hide:true},
    })
    }
  }
}
</script>

<style>
.swiper-container {
  width: 100%;
  height: 97%;
  margin-bottom: 3%;
}
</style>
