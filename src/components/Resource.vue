<template>
  <div class="Resource" style="background: url('static/images/back/resource.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <p class="title">趣活结构</p>
    </div>
  </div>
</template>

<script>
// require('echarts/lib/chart/pie');
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');

export default {
    name: 'Resource',
    data() {
        return {
        }
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
  }
}
</style>
