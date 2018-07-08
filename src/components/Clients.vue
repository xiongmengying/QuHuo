<template>
  <div class="Clients" style="background: url('static/images/back/clients.jpg') no-repeat center center;background-size: cover;">
    <p class="title">服务过的客户</p>
    <el-carousel class="carousel" height="400px">
      <el-carousel-item  class="first">
        <p>IT客户</p>
        <div class="grass">
          <div v-for="(item, index) in ITLists" :key="index" :title="item.name">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item class="second">
        <p>快销客户</p>
        <div class="grass">
          <div v-for="(item, index) in fastLists" :key="index" :title="item.name">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item class="third">
        <p>其他客户</p>
        <div class="grass">
          <div v-for="(item, index) in otherLists" :key="index" :title="item.name">
            <img :src="item.imgUrl" alt="">
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  name: 'Clients',
  data() {
    return {
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
        { name: '多乐多滋', imgUrl: 'static/images/clients/FAST/duoleduozi.png' },
        { name: '伊利', imgUrl: 'static/images/clients/FAST/yili.png' },
        { name: '乐虎', imgUrl: 'static/images/clients/FAST/lehu.png' }
      ],
      // 其他客户
      otherLists: [
        { name: '奔驰', imgUrl: 'static/images/clients/OTHER/benchi.png' },
        { name: '吉普', imgUrl: 'static/images/clients/OTHER/jeep.png' },
        { name: '招商银行', imgUrl: 'static/images/clients/OTHER/zhaoshang.png' },
        { name: '浦发银行', imgUrl: 'static/images/clients/OTHER/pufa.png' },
        { name: '迪瑞克斯 ', imgUrl: 'static/images/clients/OTHER/dxracer.png' },
        { name: '公牛', imgUrl: 'static/images/clients/OTHER/bull.png' },
        { name: '上海永久', imgUrl: 'static/images/clients/OTHER/forever.png' },
        { name: '杰克琼斯', imgUrl: 'static/images/clients/OTHER/jack.png' },
        { name: '马克华菲', imgUrl: 'static/images/clients/OTHER/fairwhale.png' },
        { name: '欧莱雅 ', imgUrl: 'static/images/clients/OTHER/oulaiya.png' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.Clients{
  width: 100%;
  height: 709px;
  padding-top: 100px;
  text-align: center;
  .title{
    font-size: 48px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 25px;
  }
  .carousel{
    width: auto;
    height: 500px;
    margin: 0 auto;
    z-index: 999;
    text-align: center;
    overflow: hidden;
    .el-carousel__container{
      position: relative;
      height: 400px;
    }
    .first, .second, .third{
      width: 100%;
      text-align: center;
      p{
        font-size: 32px;
        color: #ffffff;
        margin-bottom: 20px;
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
          height: 150px;
          margin-bottom: 20px;
          margin-left: 20px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        div:hover{
          transform: scale(1.08);
        }
      }
    }
    .second{
      p{
        margin-bottom: 100px;
      }
      .grass{
        div{
          display: inline-block;
          width: 15%;
          height: 150px;
          margin-bottom: 20px;
          margin-left: 20px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        div:hover{
          transform: scale(1.08);
        }
      }
    }
    .third{
      .grass{
        width: 100%;
        height: 100%;
        div{
          display: inline-block;
          width: 18%;
          height: 150px;
          margin-bottom: 20px;
          margin-left: 20px;
          img{
            width: 100%;
            height: 100%;
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
