<template>
  <div class="About">
    <transition name="fade">
      <div class="content" v-show="isShow">
        <p class="contentAbout">关于趣活</p>
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
          <li style="margin-right: 40px;" @mouseover="show()" @mouseout="hide()">
            <div class="breif_li_one" v-show="!breif_li_two">
              趣活介绍动画
            </div>
            <div class="breif_li_two" v-show="breif_li_two">
              <video id="video" width="420" height="240" ref="video">
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
              <p>把握电竞流量入口，通过合作优质电竞赛事、电竞俱乐部、
              电竞直播平台、电竞KOL、电竞优质内容等头部资源，帮助
              客户高效触达电竞人群。</p>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'About',
    data() {
      return {
        isShow: false,
        isPlaying: false,
        breif_li_one: false,
        breif_li_two: false,
        breif_li_three: false
      }
    },
    mounted() {
      this.isShow = true;
    },
    methods: {
      show() {
        const _that = this;
        this.breif_li_two = true;
        this.$refs.video.pause();
        setTimeout(function() {
          _that.$refs.video.play();
        }, 100);
      },
      hide() {
        const _that = this;
        this.breif_li_two = false;
        this.$refs.video.play();
        setTimeout(function() {
          _that.$refs.video.pause();
        }, 100);
      }
    }
}
</script>

<style lang="less" scoped>
.About{
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  height:100%;
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .content{
    width: auto;
    height:100%;
    z-index: 99;
    text-align: center;
    margin: 0 auto;
    .contentAbout{
      font-size: 60px;
      font-weight: bold;
      color: #ffffff;
      margin: 2% 0;
    }
    .breif{
      height:100%;
      li{
        display: inline-block;
        width: 30%;
        height: 70%;
        background-color: rgba(0, 0, 0, .6);
        border-radius: 8px;
        .breif_li_one, .breif_li_two{
          float: left;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .breif_li_one{
          width: 100%;
          height: 100%;
          color: #f89b2e;
          font-size: 3.5em;
        }
        .breif_li_two{
          width: 98%;
          height: 100%;
          padding: 0 2%;
          text-align: left !important;
          color: #f89b2e;
          font-size: 20px;
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
