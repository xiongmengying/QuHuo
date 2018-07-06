<template>
  <div class="Business" style="background: url('static/images/back/business.jpg') no-repeat center center;background-size: cover;">
    <div class="content">
      <p class="title">电 竞 + 游 戏</p>
      <p class="desc">营 销 资 源</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Business',
    data() {
        return {
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
  }
}
</style>
