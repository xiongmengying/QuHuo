<template>
  <div class="Business" style="background: url('static/images/back/business.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <p class="title">电 竞 + 游 戏</p>
      <p class="desc">营 销 资 源</p>
      <div class="detail">
        <div class="listOne">
          <ul>
            <li v-for="(item, index) in listOne" :key="index" :style="`left: ${item.left};top: ${item.top}`">
              {{item.name}}
            </li>
          </ul>
        </div>
        <div class="imge">

        </div>
        <div class="listTwo">
          <ul>
            <li v-for="(item, index) in listTwo" :key="index" :style="`left: ${item.left};top: ${item.top}`">
              {{item.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Business',
    data() {
      return {
        listOne: [
          {
            name: '电竞活动',
            left: '1%',
            top: '1%'
          },
          {
            name: '电竞媒体',
            left: '5%',
            top: '5%'
          },
          {
            name: '电竞赛事',
            left: '25%',
            top: '25%'
          },
          {
            name: '电竞俱乐部',
            left: '55%',
            top: '55%'
          },
          {
            name: '游戏直播平台',
            left: '70%',
            top: '70%'
          },
          {
            name: '电竞媒体',
            left: '95%',
            top: '95%'
          },
        ],
        listTwo: [
          {
            name: '游戏开发商',
            left: '1%',
            top: '1%'
          },
          {
            name: '游戏代理商',
            left: '5%',
            top: '5%'
          },
          {
            name: '游戏周边',
            left: '25%',
            top: '25%'
          },
          {
            name: '游戏媒体',
            left: '55%',
            top: '55%'
          },
          {
            name: '游戏直播平台',
            left: '70%',
            top: '70%'
          },
          {
            name: '游戏KOL',
            left: '95%',
            top: '95%'
          },
        ]
      }
    }
}
</script>

<style lang="less" scoped>
.Business{
  position: relative;
  width: 100%;
  padding-bottom: 20px;
  height: 709px;
  .content{
    padding-top: 45px;
    text-align: center;
    .title, .desc{
      color: #ffffff;
      font-size: 40px;
      font-weight: bold;
    }
    .title{
      margin-bottom: 15px;
    }
    .detail{
      width: 100%;
      text-align: center;
      margin-top: 100px;
      .listOne, .imge, .listTwo{
        display: inline-block;
        height: 230px;
      }
      .listOne, .listTwo{
        width: 300px;
        height: 300px;
        position: relative;
        ul{
          width: 100%;
          height: 100%;
          float: left;
          li{
            position: absolute;
            width: 100px;
            height: 100px;
            line-height: 100px;
            border-radius: 50%;
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
      .listOne{
        ul{
          li{
            border: 4px solid #fdf535;
            box-shadow: 0 0 30px #a61912, inset 0 0 30px #a61912;
          }
        }
      }
      .listTwo{
        ul{
          li{
            border: 4px solid #1e4ffd;
            box-shadow: 0 0 30px #1e4ffd, inset 0 0 30px #1e4ffd;
          }
        }
      }
    }
  }
}
</style>
