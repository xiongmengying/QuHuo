<template>
  <div class="Business">
    <div class="content">
      <p class="title">电 竞 + 游 戏</p>
      <p class="desc">营 销 资 源</p>
      <transition name="fade">
      <div class="detail" v-show="isShow">
        <div class="listOne">
          <ul>
            <li v-for="(item, index) in listOne" :key="index" :style="`left: ${item.left}%;top: ${item.top}%`" :title="item.name">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
        <div class="imge">
          <img src="static/images/back/about.jpg" />
        </div>
        <div class="listTwo">
          <ul>
            <li v-for="(item, index) in listTwo" :key="index" :style="`left: ${item.left}%;top: ${item.top}%`" :title="item.name">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Business',
  data() {
    return {
      isShow: false,
      listOne: [
        {
          name: '电竞活动',
          left: '50',
          top: '0'
        },
        {
          name: '电竞媒体',
          left: '50',
          top: '50'
        },
        {
          name: '电竞赛事',
          left: '50',
          top: '100'
        },
        {
          name: '电竞俱乐部',
          left: '0',
          top: '15'
        },
        {
          name: '游戏直播平台',
          left: '0',
          top: '70'
        },
        {
          name: '电竞媒体',
          left: '-50',
          top: '50'
        },
      ],
      listTwo: [
        {
          name: '游戏开发商',
          left: '20',
          top: '0'
        },
        {
          name: '游戏代理商',
          left: '20',
          top: '50'
        },
        {
          name: '游戏周边',
          left: '20',
          top: '100'
        },
        {
          name: '游戏媒体',
          left: '70',
          top: '20'
        },
        {
          name: '游戏直播平台',
          left: '70',
          top: '70'
        },
        {
          name: '游戏KOL',
          left: '100',
          top: '50'
        },
      ]
    }
  },
  mounted() {
    this.isShow = true;
  }
}
</script>

<style lang="less" scoped>
.Business{
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
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
      .imge{
        line-height: 230px;
        img{
          width: 230px;
          height: 230px;
          border-radius: 50%;
        }
      }
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
            width: 120px;
            height: 120px;
            line-height: 120px;
            border-radius: 50%;
            color: #ffffff;
            font-weight: bold;
            p{
              font-size: 14px;
            }
          }
          li:hover{
            p{
              font-size: 18px;
            }
          }
        }
      }
      .listOne{
        ul{
          li{
            border: 5px solid #fdf535;
            box-shadow: 0 0 40px #a61912, inset 0 0 40px #a61912;
          }
        }
      }
      .listTwo{
        ul{
          li{
            border: 4px solid #1e4ffd;
            box-shadow: 0 0 40px #1e4ffd, inset 0 0 40px #1e4ffd;
          }
        }
      }
    }
  }
}
</style>
