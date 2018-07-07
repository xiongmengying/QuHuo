<template>
  <div class="Resource" style="background: url('static/images/back/resource.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <p class="title">趣活架构</p>
      <transition name="fade">
        <div class="pie" v-show="isShow">
          <div class="outer">
            <div class="zeroDeg"></div>
            <div class="sixtyDeg"></div>
            <div class="twelveDeg"></div>
            <ul class="list">
              <li v-for="(item, index) in list" :key="index" :style="`left: ${item.left}; top: ${item.top};`" :title="item.title">
                {{item.name}}
              </li>
            </ul>
            <div class="inner">CEO</div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Resource',
  data() {
    return {
      isShow: false,
      list: [
        {name: '内容', left: '42%', top: '5%', title: '资深团队，专业内容'},
        {name: '设计', left: '76%', top: '28%', title: '专注专向，追求真美'},
        {name: '运营', left: '73%', top: '65%', title: '活动组织、赛事管理'},
        {name: '策划', left: '42%', top: '82%', title: '客户至上，定制方案'},
        {name: '销售', left: '9%', top: '65%', title: '联络客户，把握需求'},
        {name: '媒介', left: '8%', top: '27%', title: '把控资源，挖掘价值'}
      ]
    }
  },
  mounted() {
    this.isShow = true;
  }
}
</script>

<style lang="less" scoped>
.Resource{
  position: relative;
  width: 100%;
  height: 709px;
  .fade-enter-active, .fade-leave-active {
    transition: rotate(360deg);
  }
  .fade-enter, .fade-leave-active {
    transition: rotate(0);
  }
  .content{
    padding-top: 45px;
    text-align: center;
    .title{
      font-size: 60px;
      font-weight: bold;
      color: #ffffff;
    }
    .pie{
      width: 100%;
      height: 400px;
      margin-top: 50px;
      text-align: center;
      .outer{
        display: inline-block;
        width: 450px;
        height: 450px;
        border-radius: 50%;
        background-color: #e2b036;
        position: relative;
        .inner{
          display: inline-block;
          width: 250px;
          height: 250px;
          line-height: 250px;
          border-radius: 50%;
          font-size: 95px;
          font-weight: bold;
          background-color: #f8cf2c;
          position: absolute;
          top: 22%;
          left: 22%;
          transition: All 1s ease-in-out;
          -webkit-transition: All 1s ease-in-out;
          -moz-transition: All 1s ease-in-out;
          -o-transition: All 1s ease-in-out;
        }
        .inner:hover{
          transform: rotate(360deg);
        }
        .zeroDeg, .sixtyDeg, .twelveDeg{
          width: 450px;
          height: 1px;
          background-color: #ff8e28;
          position: absolute;
          top: 50%;
        }
        .sixtyDeg{
          transform: rotate(60deg);
        }
        .twelveDeg{
          transform: rotate(120deg);
        }
        .list li{
          position: absolute;
          font-size: 40px;
        }
        .list li:hover{
          color: #ffffff;
        }
      }
    }
  }
}
</style>
