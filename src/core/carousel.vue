<template>
  <div class="block">
    <el-carousel height="500px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style lang="scss" scoped>
  .el-carousel{
    width: 100%;
  }
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }
</style>
<script>
   export default{
     data(){
        return {
          imgList: [
            {
              url:require('../assets/carousel/WechatIMG161.jpeg')
            },
            {
              url:require('../assets/carousel/WechatIMG161.jpeg')
            },
            {
              url:require('../assets/carousel/WechatIMG161.jpeg')
            },
            {
              url:require('../assets/carousel/WechatIMG161.jpeg')
            }
          ]
        }
     }
  }
</script>
