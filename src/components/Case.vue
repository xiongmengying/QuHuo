<template>
  <div class="swiper-container Case" style="background: url('static/images/back/case.jpg') no-repeat center center;background-size: cover;">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <Intro></Intro>
        </div>
        <div class="swiper-slide">
          <div class="content">
            <p class="title">精品案例</p>
              <transition name="fade">
                <ul class="list" v-show="liShow">
                    <li v-for="(item ,index) in imgLits" :key="index" @mouseover="item.isShow = true"
                    @mouseout="item.isShow = false" :style="`left: ${item.left};top: ${item.top};`">
                        <img :src="`static/images/business/${index + 1}.jpg`"  v-show="!item.isShow"/>
                        <div class="detail" v-show="item.isShow">
                            <p>{{item.detail1}}</p>
                            <p>{{item.detail2}}</p>    
                        </div>    
                    </li>
                </ul>
              </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'Case',
  data() {
    return {
      liShow: false,
      imgLits: [
        {detail1: '英特尔', detail2: '合作英雄联盟全球总决赛S7', isShow: false, left: '0', top: '0'},
        {detail1: '公牛', detail2: 'FIFA online4/FIFA足球世界游戏合作', isShow: false, left: '5px', top: '5px'},
        {detail1: '罗技', detail2: '合作英雄联盟全球总决赛S7', isShow: false, left: '0', top: '0'},
        {detail1: '东鹏特饮', detail2: '合作2017全国电子竞技公开赛', isShow: false, left: '-5px', top: '0'},
        {detail1: '来伊份', detail2: '合作AG超玩会王者荣耀战队', isShow: false, left: '10px', top: '-5px'},
        {detail1: '三星存储', detail2: '定制活动-SSG水友秀合作', isShow: false, left: '-10px', top: '0'},
        {detail1: '努比亚', detail2: '合作2018腾讯TGA大奖赛', isShow: false, left: '0', top: '4px'},
        {detail1: '2018英雄联盟职业联赛', detail2: '服务奔驰', isShow: false, left: '-4px', top: '0'}
      ]
    }
  },
  mounted() {
    this.liShow = true;
    new Swiper ('.swiper-container', {
      initialSlide: this.initialSlide,
      mousewheel: true,
      direction: 'vertical',
    })
  },
}
</script>

<style lang="less" scoped>
.Case{
  position: relative;
  width: 100%;
  height: 689px;
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .content{
    width: auto;
    height: 100%;
    padding-top: 15px;
    z-index: 99;
    background-color: rgba(0, 0, 0, .3);
    text-align: center;
    .title{
      font-size: 48px;
      font-weight: bold;
      color: #ffffff;
    }
    .list{
      width: 100%;
      height: auto;
      margin-top: 100px;
      li{
        position: relative;
        display: inline-block;
        width: 25%;
        height: 200px;
        margin-bottom: 20px;
        img{
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 9;
        }
        .detail{
          float: left;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, .3);
          z-index: 999;
          p{
            color: #fcd400;
            margin-bottom: 20px;
          }
          p:nth-child(1){
            margin-top: 10%;
            font-size: 30px;
            font-weight: bold;
          }
          p:nth-child(2){
            font-size: 24px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
