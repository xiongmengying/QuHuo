<template>
  <div class="swiper-container Clients" style="background: url('static/images/back/clients.jpg') no-repeat center center;background-size: cover;">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <Intro></Intro>
      </div>
      <div class="swiper-slide">
        <p class="title">服务过的客户</p>
        <!-- <el-carousel class="carousel" height="400px"> -->
        <el-carousel class="carousel" :height="clientHeight">
          <el-carousel-item  class="first">
            <p>IT客户</p>
            <div class="grass">
              <div v-for="(item, index) in ITLists" :key="index" :title="item.name">
                <img :src="item.imgUrl" alt="">
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item class="second">
            <p>快消及其他客户</p>
            <div class="grass">
              <div v-for="(item, index) in fastLists" :key="index" :title="item.name">
                <img :src="item.imgUrl" alt="">
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item class="first">
            <p>赛事商务服务客户</p>
            <div class="grass">
              <div v-for="(item, index) in otherLists" :key="index" :title="item.name">
                <img :src="item.imgUrl" alt="">
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';

export default {
  name: 'Clients',
  data() {
    return {
      clientHeight: '',
      // IT客户
      ITLists: [
        { name: '英特尔', imgUrl: 'static/images/clients/IT/intel.png' },
        { name: '惠普', imgUrl: 'static/images/clients/IT/hp.png' },
        { name: '罗技', imgUrl: 'static/images/clients/IT/logitech.png' },
        { name: '三星', imgUrl: 'static/images/clients/IT/samsung.png' },
        { name: '努比亚狂魔', imgUrl: 'static/images/clients/IT/nubiya.png' },
        { name: '戴尔', imgUrl: 'static/images/clients/IT/dell.png' },
        { name: '航嘉', imgUrl: 'static/images/clients/IT/huntkey.png' },
        { name: '达尔优', imgUrl: 'static/images/clients/IT/dareu.png' }
      ],
      // 快销客户
      fastLists: [
        { name: '来伊份', imgUrl: 'static/images/clients/FAST/laiyifen.png' },
        { name: '东鹏特饮', imgUrl: 'static/images/clients/FAST/dongpeng.png' },
        { name: '乐虎', imgUrl: 'static/images/clients/FAST/lehu.png' },
        { name: '永久', imgUrl: 'static/images/clients/FAST/forever.png' },
        { name: '公牛', imgUrl: 'static/images/clients/FAST/bull.png' }
      ],
      // 其他客户
      otherLists: [
        { name: '奔驰', imgUrl: 'static/images/clients/OTHER/benchi.png' },
        { name: '吉普', imgUrl: 'static/images/clients/OTHER/jeep.png' },
        { name: '招商银行', imgUrl: 'static/images/clients/OTHER/zhaoshang.png' },
        { name: '浦发银行', imgUrl: 'static/images/clients/OTHER/pufa.png' },
        { name: '多乐多滋 ', imgUrl: 'static/images/clients/OTHER/doritos.png' },
        { name: '伊利', imgUrl: 'static/images/clients/OTHER/yili.png' },
        { name: '迪锐克斯', imgUrl: 'static/images/clients/OTHER/dxracer.png' },
        { name: '欧莱雅 ', imgUrl: 'static/images/clients/OTHER/oulaiya.png' }
      ]
    }
  },
  mounted() {
    this.clientHeight = (document.body.clientHeight * 0.5) + 'px';
    new Swiper ('.swiper-container', {
      initialSlide: this.initialSlide,
      mousewheel: true,
      direction: 'vertical',
    })
  },
}
</script>

<style lang="less" scoped>
.Clients{
  width: 100%;
  height: 97%;
  margin-bottom: 3%;
  text-align: center;
  .swiper-container {
    width: 100%;
    height: 100%;
    margin-bottom: 1%;
  }
  .title{
    font-size: 48px;
    font-weight: bold;
    color: #ffffff;
    margin: 2% 0 1% 0;
  }
  .carousel{
    width:80%;
    height: 80%;
    margin: 0 auto;
    z-index: 999;
    text-align: center;
    overflow: hidden;
    .el-carousel__container{
      position: relative;
      height: 70%;
    }
    .first, .second, .third{
      text-align: center;
      p{
        font-size: 1.8em;
        color: #ffffff;
        margin-bottom: 1%;
      }
      .grass{
        width: 100%;
        height: 100%;
      }
    }
    .first{
      .grass{
        div{
          display: inline-block;
          width: 20%;
          // height:30%;
          // margin-bottom: 1%;
          margin-left: 1%;
          img{
            width: 100%;
          }
        }
        div:hover{
          transform: scale(1.08);
        }
      }
    }
    .second{
      p{
        margin-bottom: 10%;
      }
      .grass{
        div{
          display: inline-block;
          width: 18%;
          // height: 32%;
          margin-bottom: 1%;
          margin-left: 1%;
          img{
            width: 100%;
          }
        }
        div:hover{
          transform: scale(1.08);
        }
      }
    }
  }
}
</style>
