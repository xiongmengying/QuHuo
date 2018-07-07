<template>
  <div class="Resource" style="background: url('static/images/back/resource.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <p class="title">趣活结构</p>
      <div class="pie">
        <div id="myChart" style="width: 400px;height: 400px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export default {
  name: 'Resource',
  data() {
      return {
      }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        series: [
          {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '20',
                      fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:60, name:'直接访问'},
                {value:60, name:'邮件营销'},
                {value:60, name:'联盟广告'},
                {value:60, name:'视频广告'},
                {value:60, name:'搜索引擎'}
            ]
          }
        ]
      });
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
    .pie{
      width: 100%;
      height: 400px;
      margin-top: 50px;
      text-align: center;
      #myChart{
        display: inline-block;
      }
    }
  }
}
</style>
