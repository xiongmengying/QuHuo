<template>
  <div class="Intro">
    <div class="content">
      <p>懂游戏  懂电竞  懂用户</p>
      <p>游戏/电竞 整合营销专家</p>
      <p>帮助品牌精准触达游戏/电竞用户</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Intro{
  position: relative;
  width: 100%;
  height: 100%;
  .content{
    position: absolute;
    left: 0;
    right:0;
    margin:auto;
    width: auto;
    padding-top: 10%;
    z-index: 99;
    text-align: center;
    overflow: hidden;
    animation:myfirst 2s;
    -webkit-animation:myfirst 2s;
    animation-fill-mode: forwards;/*当动画完成时，动画会停留在最后一帧。*/
    @-webkit-keyframes myfirst {
      0%   { bottom:0%; display: none;}
      100% { bottom:20%; display: block;}
    }
    @-moz-keyframes myfirst {
      0%   { bottom:0%; display: none;}
      100% { bottom:20%; display: block;}
    }
    @-ms-keyframes myfirst {
      0%   { bottom:0%; display: none;}
      100% { bottom:20%; display: block;}
    }
    @-o-keyframes myfirst {
      0%   { bottom:0%; display: none;}
      100% { bottom:20%; display: block;}
    }
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
