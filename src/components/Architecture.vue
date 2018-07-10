<template>
  <div class="Resource">
    <div class="content">
      <p class="title">趣活架构</p>
      <div class="pic" style="background: url('static/images/intro/artic.png') no-repeat center center; background-size: cover;">
        <ul class="list">
          <li @click="showTitle(item)" v-for="(item, index) in list" :key="index" :style="`left: ${item.left}; top: ${item.top};`" :title="item.title">
            {{item.name}}
          </li>
          <div class="titleShow" v-for="(val, num) in list" :key="val.name" :style="`left: ${val.titleLeft}; top: ${val.titleTop};`" v-show="val.titleShow">
            {{val.title}}
          </div>
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
        {name: '内容', left: '48%', top: '18%', title: '资深团队专业内容', titleLeft: '46%', titleTop: '-1%', titleShow: false },
        {name: '设计', left: '58%', top: '33%', title: '专注专向追求真美', titleLeft: '66%', titleTop: '31%', titleShow: false },
        {name: '运营', left: '58%', top: '62%', title: '活动组织赛事管理', titleLeft: '65%', titleTop: '62%', titleShow: false },
        {name: '策划', left: '48%', top: '76%', title: '客户至上定制方案', titleLeft: '47%', titleTop: '87%', titleShow: false },
        {name: '销售', left: '37%', top: '62%', title: '联络客户把握需求', titleLeft: '25%', titleTop: '62%', titleShow: false },
        {name: '媒介', left: '37%', top: '33%', title: '把控资源挖掘价值', titleLeft: '25%', titleTop: '33%', titleShow: false }
      ]
    }
  },
  mounted() {
    this.isShow = true;
  },
  methods: {
    showTitle(item) {
      item.titleShow = true;
      setTimeout(function() {
        item.titleShow = false;
      }, 2500);
    }
  }
}
</script>

<style lang="less" scoped>
.Resource{
  position: relative;
  width: 100%;
  height:100%;
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
      font-size: 1.2em;
      color: #ffffff;
    }
    .list li:hover{
      font-size: 1.3em;
      color: #ffffff;
    }
    .titleShow{
      position: absolute;
      font-size: 1.3em;
      width: 4em;
      top: 43%;
      left: 44%;
      color: #ffffff;
      font-weight: bold;
    }
  }
}
</style>
