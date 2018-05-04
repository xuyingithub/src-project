<template>
    <el-container>
      <el-header>
        <pa-header></pa-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
</template>
<style lang="scss" scoped>
  body {
     background-color: #fff;
     .el-container{
       height: 100%;
       .el-header {
         padding: 0;
       }
       .el-main{
         padding: 0;
       }
     }
  }
</style>
<script>
  import paHeader from '../public/Header'
  export default{
    name:'homePage',
    components:{
      paHeader
    }
  }
</script>
