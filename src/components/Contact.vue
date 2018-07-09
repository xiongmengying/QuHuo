<template>
  <div class="swiper-container Intro" style="background: url('static/images/back/contact.jpg') no-repeat center center;background-size: cover;">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <Intro></Intro>
      </div>
      <div class="swiper-slide">
        <div class="content">
          <transition name="fade">
            <ul>
              <li style="background: url('static/images/back/contact-1.png') no-repeat center center;background-size: cover;">
                <p>上海</p>
                <p>邮箱：william.zhang@lfalways.com</p>
              </li>
              <li style="background: url('static/images/back/contact-2.png') no-repeat center center;background-size: cover;">
                <p>深圳</p>
                <p>邮箱：hannah.han@lfalways.com</p>
              </li>
              <li style="background: url('static/images/back/contact-3.png') no-repeat center center;background-size: cover;">
                <p>北京</p>
                <p>邮箱：dana.xie@lfalways.com</p>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'contact',
  mounted() {
    this.liShow = true;
    new Swiper ('.swiper-container', {
      initialSlide: this.initialSlide,
      mousewheel: true,
      direction: 'vertical',
    })
  }
}
</script>

<style lang="less" scoped>
.Intro{
  position: relative;
  width: 100%;
  height: 97%;
  margin-bottom: 3%;
  .content{
    width: auto;
    padding-top: 5%;
    z-index: 99;
    text-align: center;
    margin: 0 auto;
    ul{
      width: 100%;
      height: 40%;
      margin-top: 3%;
      li{
        float: left;
        width: 32%;
        height: 42%;
        padding: 6% 0;
        margin-left: 1%;
        background-color: rgba(0,0,0,.3);
        p{
          line-height: 28px;
          font-size: 24px;
          color: #ffffff;
          font-weight: bold;
          margin-bottom: 5%;
        }
      }
    }
  }
}
</style>
