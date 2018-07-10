<template>
  <div class="Business">
    <div class="content">
      <p class="title">游 戏 + 电 竞</p>
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
          <img src="static/images/resource/2.png" />
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
        { name: '游戏开发商', left: '78', top: '10' },
        { name: '游戏代理商', left: '78', top: '35' },
        { name: '游戏周边', left: '78', top: '60' },
        { name: '游戏媒体', left: '48', top: '22' },
        { name: '游戏直播平台', left: '48', top: '48' },
        { name: '游戏KOL', left: '18', top: '35' },
      ],
      listTwo: [
        { name: '电竞活动', left: '5', top: '10' },
        { name: '电竞媒体', left: '5', top: '35' },
        { name: '电竞赛事', left: '5', top: '60' },
        { name: '电竞俱乐部', left: '35', top: '22' },
        { name: '游戏直播平台', left: '35', top: '48' },
        { name: '电竞媒体', left: '65', top: '35' }
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
  height: 100%;
  .content{
    text-align: center;
    height:100%;
    .title, .desc{
      color: #ffffff;
      font-weight: bold;
    }
    .title{
      font-size: 60px;
      margin-top: 2%;
    }
    .desc{
      font-size: 28px;
      margin-bottom: 5px;
    }
    .detail{
      width: 98%;
      height: 70%;
      margin: 0 1%;
      text-align: center;
      background-color: rgba(0, 0, 0, .8);
      .listOne, .imge, .listTwo{
        display: inline-block;
        height: 100%;
      }
      .imge{
        img{
          display: inline-block;
          height: 100%;
        }
      }
      .listOne, .listTwo{
        width: 30%;
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
            font-weight: bold;
            word-wrap:break-word;
            word-break:break-all;
            p{
              font-size: 0.9em;
            }
          }
          li:hover{
            word-wrap:break-word;
            word-break:break-all;
            transform: scale(1.08);
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
