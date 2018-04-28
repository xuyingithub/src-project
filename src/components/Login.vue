<template>
    <div class="container" @click="alert">
      {{msg}}
      <!--<img :src="url" alt="">-->
    </div>

</template>
<style>
  body {

   }
  .container {
    width: 400px;
    height: 400px;
  }
  img{
    width: 400px;
    height: 400px;
    border-radius: 200px;

  }
</style>
<script>
    export default{
        name:'login',
        data(){
           return {
             msg: 'hello vue',
             url:require('../assets/carousel/WechatIMG161.jpeg')
           }
        },
        methods:{
           alert(){
             console.log(12);
           }
        }
    }
</script>
