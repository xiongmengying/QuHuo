<template>
  <div class="About" style="background: url('static/images/back/about.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <p class="contentAbout">关于趣活</p>
      <p class="detail"><span>英雄联盟头部赛事唯一商务执行团队</span></p>
      <ul class="breif">
        <li style="margin-right: 40px;" @mouseover="breif_li_one = true" @mouseout="breif_li_one = false">
          <div class="breif_li_one" v-show="!breif_li_one">111</div>
          <div class="breif_li_one" v-show="breif_li_one">222</div>
        </li>
        <li style="margin-right: 40px;"></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
      return {
        breif_li_one: false,
        breif_li_two: false,
        breif_li_three: false
      }
    }
}
</script>

<style lang="less" scoped>
.About{
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  height: 709px;
  .content{
    width: auto;
    padding-top: 50px;
    z-index: 99;
    text-align: center;
    margin: 0 auto;
    .contentAbout{
      font-size: 60px;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 15px;
    }
    .detail span{
      display: inline-block;
      padding: 0 25px;
      background-color: #ffa030;
      color: #ffffff;
      font-size: 36px;
      line-height: 55px;
    }
    .breif{
      li{
        display: inline-block;
        width: 490px;
        height: 465px;
        margin-top: 25px;
        background-color: rgba(0, 0, 0, .6);
        border-radius: 15px;
        .breif_li_one{

        }
      }
    }
  }
}
</style>
