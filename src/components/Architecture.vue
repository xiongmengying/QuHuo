<template>
  <div class="Resource">
    <div class="content">
      <p class="title">趣活架构</p>
      <div class="pic" style="background: url('static/images/intro/artic.png') no-repeat center center; background-size: cover;">
        <ul class="list">
          <li @mouseover="showTitle(item)" v-for="(item, index) in list" :key="index" :style="`left: ${item.left}; top: ${item.top};`">
            {{item.name}}
          </li>
          <transition-group name="fade">
            <div class="titleShow" v-for="(val, num) in list" :key="val.name" :style="`left: ${val.titleLeft}; top: ${val.titleTop};background-color: ${val.titleColor};`" v-show="val.titleShow">
              {{val.title}}
            </div>
          </transition-group>
        </ul>
      </div>
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
        {name: '内容', left: '47%', top: '10%', title: '资深团队专业内容', titleLeft: '41%', titleTop: '-1%', titleColor: '#e91d60', titleShow: false },
        {name: '设计', left: '58%', top: '29%', title: '专注专向追求真美', titleLeft: '66%', titleTop: '31%', titleColor: '#f29dff', titleShow: false },
        {name: '运营', left: '58%', top: '58%', title: '活动组织赛事管理', titleLeft: '65%', titleTop: '62%', titleColor: '#58d6c9', titleShow: false },
        {name: '策划', left: '47%', top: '74%', title: '客户至上定制方案', titleLeft: '41%', titleTop: '87%', titleColor: '#ffbd41', titleShow: false },
        {name: '销售', left: '36%', top: '60%', title: '联络客户把握需求', titleLeft: '13%', titleTop: '62%', titleColor: '#2541be', titleShow: false },
        {name: '媒介', left: '36%', top: '29%', title: '把控资源挖掘价值', titleLeft: '13%', titleTop: '33%', titleColor: '#0da6fe', titleShow: false }
      ]
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    showTitle(item) {
      let timer = setTimeout(function () {
        item.titleShow = true;
        setTimeout(function() {
          item.titleShow = false;
        }, 2500);
      }, 500);
    }
  }
}
</script>

<style lang="less" scoped>
.Resource{
  position: relative;
  width: 100%;
  height:100%;
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .content{
    text-align: center;
    height: 100%;
    font-size: 16px;
    .title{
      font-size: 60px;
      font-weight: bold;
      color: #ffffff;
      margin: 2% 0;
    }
    .pic{
      display: inline-block;
      width: 60%;
      height: 65%;
      position: relative;
    }
    .list li{
      position: absolute;
      width: 3rem;
      height: 3em;
      line-height: 3em;
      font-size: 1.2em;
      color: #ffffff;
      cursor: pointer;
    }
    .list li:hover{
      font-size: 1.3em;
      color: #ffffff;
    }
    .titleShow{
      position: absolute;
      font-size: 1.3em;
      width: 9em;
      height: 2em;
      line-height: 2em;
      text-align: center;
      top: 43%;
      left: 44%;
      color: #ffffff;
      font-weight: bold;
    }
  }
}
</style>
