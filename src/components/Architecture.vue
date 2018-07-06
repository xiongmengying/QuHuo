<template>
  <div class="Architecture" style="background: url('static/images/back/Architecture.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <p class="title">服务范围</p>
      <p class="desc">为品牌提供一站式的游戏/电竞人群传播解决方案</p>
      <ul></ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Architecture',
    data() {
        return {
        }
    }
}
</script>

<style lang="less" scoped>
.Architecture{
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
  }
}
</style>
