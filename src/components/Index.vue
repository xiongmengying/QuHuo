<template>
  <div class="Index">
    <!-- 导航栏 -->
    <div class="navBar">
      <div class="bar clearfix">
        <div class="logo">
          <img src="static/images/logo.png" @click="jumpTo()"/>
        </div>
        <div class="nav">
          <ul class="clearfix">
            <li @mouseover="secondShow = true" @mouseout="secondShow = false">
              <router-link to="/quhuo" active-class="selected">趣活介绍</router-link>
              <ul class="second" @mouseover="secondShow = true" @mouseout="secondShow = false" v-show="secondShow">
                <li><router-link :to="{path:'/quhuo',query: { from: 'about' }}">关于趣活</router-link></li>
                <li><router-link :to="{path:'/quhuo',query: { from: 'business'}}">服务范围</router-link></li>
                <li><router-link :to="{path:'/quhuo',query: { from: 'architecture'}}">公司架构</router-link></li>
                <li><router-link :to="{path:'/quhuo',query: { from: 'resource'}}">趣活资源</router-link></li>
              </ul>
            </li>
            <li><router-link to="/clients" active-class="selected">趣活客户</router-link></li>
            <li><router-link to="/case" active-class="selected">精品案例</router-link></li>
            <li style="padding: 0 0 0 20px;"><router-link to="/contact" active-class="selected">联系我们</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="content_index">
      <router-view />
    </div>
    <!-- 底部 -->
    <div class="bottom">
      <div class="contact">
        <p class="title">CONTACT US</p>
        <p class="mail"><img src="static/images/mail.png" />邮箱： william.zhang@lfalways.com</p>
        <p class="phone"><img src="static/images/phone.png" />电话： 021-54960936</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      secondShow: false,
      windowHeight: '',
    }
  },
  mounted() {
    this.$router.push('quhuo');
  },
  methods: {
    jumpTo() {
      this.$router.push('/quhuo');
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@heaH: 100px;
.Index{
  a{
    color: #333333;
  }
  .selected{
    color: #f39800;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  // 导航条开始
  .navBar{
    width: 100%;
    height: 100px;
    background-color: #ffffff;
    .bar{
      width: 1200px;
      margin: 0 auto;
      .logo{
        height: 100px;
        line-height: 100px;
      }
      .logo{
        float: left;
        img{
          display: inline-block;
          width: 125px;
          height: auto;
          vertical-align: middle;
          cursor: pointer;
        }
      }
      .nav{
        float: right;
        height:@heaH;
        ul{
          position: relative;
          li{
            float: left;
            padding: 0 45px;
            font-size: 18px;
            font-weight: bold;
            height: @heaH;
            line-height:  @heaH;
            padding: 0 20px;
            .second{
              z-index: 999;
              background-color: #ffffff;
              border-left: 1px solid #efefef;
              border-bottom: 1px solid #efefef;
              border-right: 1px solid #efefef;
              position: absolute;
              left: 0;
              bottom: -125px;
              width: 115px;
              height: auto;
              li{
                height: 40px;
                line-height: 40px;
              }
            }
          }
        }
      }
    }
  }
  // 内容部分开始
  .content_index{
    // flex: 1;
    height: calc(100% - 200px);    
  }
  // 底部开始
  .bottom{
    width: 100%;
    height: 100px;
    border-top: 1px solid #f39a00;
    background-color: #ffd13d;
    font-size: 14px;
    color: #333333;
    .contact{
      width: 300px;
      padding-top: 20px;
      margin: 0 auto;
      text-align: center;
      .title{
        margin-bottom: 10px;
        font-weight: bold;
      }
      .mail, .phone{
        margin-bottom: 5px;
        img{
          width: 15px;
          height: 15px;
          position: relative;
          top: 3px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
