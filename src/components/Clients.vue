<template>
    <div class="Clients">
        <div class="block">
            <el-carousel>
                <el-carousel-item class="it">
                    <h3>服务过的客户</h3>
                    <p class="demonstration">IT客户</p>
                    <div>
                        <img :src=item.imgUrl alt="item.name" v-for="(item, index) in ITLists" :key="index">
                    </div>
                </el-carousel-item>
                <el-carousel-item class="fast">
                    <h3>服务过的客户</h3>
                    <p class="demonstration">快销客户</p>
                    <div>
                        <img :src=item.imgUrl alt="item.name" v-for="(item, index) in fastLists" :key="index">
                    </div>
                </el-carousel-item>
                <el-carousel-item class="other">
                    <h3>服务过的客户</h3>
                    <p class="demonstration">其他客户</p>
                    <div>
                        <img :src=item.imgUrl alt="item.name" v-for="(item, index) in otherLists" :key="index">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Clients',
    data() {
        return {
            // IT客户
            ITLists: [
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                }
            ],
            // 快销客户
            fastLists: [
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                }
            ],
            // 其他客户
            otherLists: [
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                },
                {
                    name: '惠普',
                    imgUrl: '/static/images/clients/奔驰.jpg',
                },
                {
                    name: '英特尔',
                    imgUrl: '/static/images/clients/英特尔.png',
                }
            ]
        }
    }
}
</script>

<style lang="less">
    .Clients{
        width:100%;
        background: url('/static/images/clients/clientsBg.jpg');
        .block{
            width: 80%;
            height:400px;
            background: rgba(0, 0, 0, 0.4);
            margin: 100px auto;
            .el-carousel{
                width:100%;
                height:100%;
                .el-carousel__container{
                    height:100%;
                }
                .el-carousel__item{
                    text-align: center;
                    font-family: '微软雅黑';
                        font-size: 30px;
                        color:white;
                    h3{
                        font-size: 30px;
                        margin: 20px 0;
                    }
                    p{
                        font-size: 18px;
                    }
                }
            }
        }
        .el-carousel__item div{
            width: 80%;
            margin: 20px auto;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            img{
                width: 17%;
                height:30%;
                margin: 10px;
            }
        }
    }
</style>
