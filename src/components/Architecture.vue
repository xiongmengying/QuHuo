<template>
  <div class="Architecture" style="background: url('static/images/back/Architecture.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <p class="title">服务范围</p>
      <p class="desc">为品牌提供一站式的游戏/电竞人群传播解决方案</p>
      <transition name="move">
        <ul class="step" v-show="isShow">
          <li>
            <div></div>
            <span>需 求 拆 解</span>
          </li>
          <li>
            <div></div>
            <span>用 户 分 析</span>
          </li>
          <li>
            <div></div>
            <span>定 制 方 案</span>
          </li>
          <li style="width: 200px;height: 200px;">
            <div></div>
            <span>执 行 运 营</span>
          </li>
          <li>
            <div></div>
            <span>达 成 目 的</span>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Architecture',
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    this.isShow = true;
  }
}
</script>

<style lang="less" scoped>
.Architecture{
  .move-enter-active{
    transition: all 0.5s linear;
    transform: translate3d(0, 0, 0);
  }
  .move-enter{
    transform: translate3d(100%, 0, 0);
  }
  min-width: 1200px;
  position: relative;
  width: 100%;
  padding: 20px 30px;
  height: 709px;
  .content{
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 10px;
    .title{
      font-size: 48px;
      font-weight: bold;
      color: #f9bf00;
      margin-bottom: 50px;
    }
    .desc{
      font-size: 26px;
      font-weight: bold;
      color: #333333;
    }
    .step{
      width: 100%;
      height: auto;
      margin-top: 200px;
      li{
        display: inline-block;
        width: 150px;
        height: 150px;
        margin-right:100px;
        position: relative;
        div{
          width: 100%;
          height: 100%;
          border: 5px solid #f6aa27;
          transform:rotate(45deg);
          -ms-transform:rotate(45deg); /* Internet Explorer */
          -moz-transform:rotate(45deg); /* Firefox */
          -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
          -o-transform:rotate(45deg); /* Opera */
        }
        span{
          position: absolute;
          left: 11%;
          top: 38%;
          font-size: 24px;
        }
      }
      li:nth-child(4){
        position: relative;
        div{
          position: relative;
          top: 12%;
          width: 100%;
          height: 100%;
          border: 8px solid #f6aa27;
        }
        span{
          position: absolute;
          left: 21%;
          top: 53%;
          font-size: 24px;
        }
      }
    }
  }
}
</style>
