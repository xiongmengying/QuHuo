<template>
  <div class="Architecture">
    <div class="content">
      <p class="title">服务范围</p>
      <transition name="move">
        <div class="image">
          <img src="static/images/deal/3.png" />
        </div>
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
  position: relative;
  width: 100%;
  height: 100%;
  .content{
    width: 100%;
    //新加的高度
    height: 100%; 
    text-align: center;
    border-radius: 10px;
    .title{
      font-size: 60px;
      margin: 2% 0;
      font-weight: bold;
      color: #ffffff;
    }
    .image{
      width: 98%;
      padding: 0 1%;
      background-color: rgba(0,0,0,.8);
      height: 68%;
      margin: 0 auto;
      img{
        // width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
