<template>
  <div class="Intro">
    <img src="static/images/back/intro.jpg" />
    <div class="content">
      <p>懂游戏  懂电竞  懂用</p>
      <p>游戏/电竞 整合营销专家</p>
      <p>帮助品牌精准触达电竞丶游戏用户</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Intro{
  position: relative;
  width: 100%;
  height: 709px;
  img{
    z-index: 9;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .content{
    width: auto;
    padding-top: 230px;
    background-color: red;
    z-index: 99;
    text-align: center;
    margin: 0 auto;
    p:nth-child(1){
      font-family: '宋体';
      font-size: 60px;
      color: #ffffff;
      margin-bottom: 35px;
    }
    p:nth-child(2){
      font-size: 90px;
      font-weight: bold;
      color: #f39800;
      margin-bottom: 30px;
    }
    p:nth-child(3){
      font-size: 36px;
      color: #ffffff;
    }
  }
}
</style>
