<template>
  <div class="Resource">
    <div class="content">
      <p class="title">趣活架构</p>
      <div class="pic" style="background: url('static/images/intro/artic.png') no-repeat center center; background-size: cover;">
        <ul class="list">
          <li v-for="(item, index) in list" :key="index" :style="`left: ${item.left}; top: ${item.top};`" :title="item.name">
            {{item.name}}
            <div @click="item.titleShow = !item.titleShow" v-show="item.titleShow">
              {{item.title}}
            </div>
          </li>
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
        {name: '内容', left: '42%', top: '23%', title: '资深团队，专业内容', titleShow: false},
        {name: '设计', left: '66%', top: '37%', title: '专注专向，追求真美', titleShow: false},
        {name: '运营', left: '67%', top: '63%', title: '活动组织、赛事管理', titleShow: false},
        {name: '策划', left: '42%', top: '80%', title: '客户至上，定制方案', titleShow: false},
        {name: '销售', left: '18%', top: '65%', title: '联络客户，把握需求', titleShow: false},
        {name: '媒介', left: '18%', top: '37%', title: '把控资源，挖掘价值', titleShow: false}
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
  // height: 709px;
  height:100%;
  .content{
    text-align: center;
    height: 100%;
    font-size: 16px;
    .title{
      font-size: 60px;
      font-weight: bold;
      color: #ffffff;
    }
    .pic{
      display: inline-block;
      // width: 500px;
      // height: 500px;
      width: 70%;
      height: 90%;
      position: relative;
    }
    .list li{
      position: absolute;
      // font-size: 36px;
      font-size: 1em;
      color: #ffffff;
    }
    .list li:hover{
      // font-size: 40px;
      font-size: 2em;
      color: #ffffff;
    }
  }
}
</style>
