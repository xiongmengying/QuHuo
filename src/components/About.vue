<template>
  <div class="About" style="background: url('static/images/back/about.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <p class="contentAbout">关于趣活</p>
      <p class="detail"><span>英雄联盟头部赛事唯一商务执行团队</span></p>
      <ul class="breif">
        <li style="margin-right: 40px;" @mouseover="breif_li_one = true" @mouseout="breif_li_one = false">
          <div class="breif_li_one" v-show="!breif_li_one">
            游戏营销
          </div>
          <div class="breif_li_two" v-show="breif_li_one">
            第一时间对接最新最热的游戏资源，通过游戏IP合作、游戏植入、游戏
            联合运营、游戏定制活动等合作形式，帮助品牌和优质游戏进行深度结合，触达亿万游戏玩家。
          </div>
        </li>
        <li style="margin-right: 40px;" @mouseover="breif_li_two = true" @mouseout="breif_li_two = false">
          <div class="breif_li_one" v-show="!breif_li_two">
            趣活介绍动画
          </div>
          <div class="breif_li_two" v-show="breif_li_two">
            <video id="video" width="320" height="240" controls>
              <source src="static/images/video/about.mp4" type="video/mp4">
            您的浏览器不支持Video标签。
            </video>
          </div>
        </li>
        <li @mouseover="breif_li_three = true" @mouseout="breif_li_three = false">
          <div class="breif_li_one" v-show="!breif_li_three">
            电竞营销
          </div>
          <div class="breif_li_two" v-show="breif_li_three">
            把握电竞流量入口，通过合作优质电竞赛事、电竞俱乐部、
            电竞直播平台、电竞KOL、电竞优质内容等头部资源，帮助
            客户高效触达电竞人群。
          </div>
        </li>
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
          float: left;
          color: #f89b2e;
          font-size: 66px;
          padding-top: 190px;
        }
        .breif_li_two{
          float: left;
          color: #f89b2e;
          font-size: 20px;
          padding-top: 50px;
          video{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
