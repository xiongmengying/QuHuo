<template>
  <div class="Intro" style="background: url('static/images/back/contact.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <ul>
        <li style="background: url('static/images/back/contact-1.jpg') no-repeat center center;background-size: cover;">
          <p>上海</p>
          <p>邮箱：william.zhang@lfalways.com</p>
        </li>
        <li style="background: url('static/images/back/contact-2.jpg') no-repeat center center;background-size: cover;">
          <p>深圳</p>
          <p>邮箱：hannah.han@lfalways.com</p>
        </li>
        <li style="background: url('static/images/back/contact-3.jpg') no-repeat center center;background-size: cover;">
          <p>北京</p>
          <p>邮箱：dana.xie@lfalways.com</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.Intro{
  position: relative;
  width: 100%;
  height: 709px;
  .content{
    width: auto;
    z-index: 99;
    padding-top: 150px;
    text-align: center;
    margin: 0 auto;
    ul{
      width: 100%;
      height: 420px;
      li{
        display: inline-block;
        width: 600px;
        height: 420px;
        padding-top: 150px;
        background-color: red;
        margin-right: 10px;
        p{
          line-height: 28px;
          font-size: 28px;
          color: #ffffff;
          font-weight: bold;
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
