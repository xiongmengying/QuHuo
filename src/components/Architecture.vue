<template>
  <div class="Resource">
    <div class="content">
      <p class="title">趣活架构</p>
      <div class="pic" style="background: url('static/images/intro/artic.png') no-repeat center center; background-size: cover;">
        <ul class="list">
          <li v-for="(item, index) in list" :key="index" :style="`left: ${item.left}; top: ${item.top};`" :title="item.title">
            {{item.name}}
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
        {name: '内容', left: '42%', top: '23%', title: '资深团队，专业内容'},
        {name: '设计', left: '66%', top: '37%', title: '专注专向，追求真美'},
        {name: '运营', left: '68%', top: '63%', title: '活动组织、赛事管理'},
        {name: '策划', left: '42%', top: '80%', title: '客户至上，定制方案'},
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
  .content{
    padding-top: 45px;
    text-align: center;
    .title{
      font-size: 60px;
      font-weight: bold;
      color: #ffffff;
    }
    .pic{
      display: inline-block;
      width: 500px;
      height: 500px;
      position: relative;
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
</style>
