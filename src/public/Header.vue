<template>
    <section class="header">
       <div class="headerBox">
         <span class="icon el-icon-date"></span>
         <div class="menu">
           <el-menu
             default-active="/menu/index"
             class="el-menu-demo"
             :router="true"
             mode="horizontal"
             @select="handleSelect"
             background-color="transparent"
             text-color="#fff"
             active-text-color="#fff">
             <el-menu-item  v-for="menu in menus" :key="menu.name" :index="menu.path">{{menu.name}}</el-menu-item>
           </el-menu>
         </div>
         <ul class="operate">
           <li>登录</li>
           <li v-if="registerShow">注册</li>
         </ul>
       </div>
    </section>
</template>
<style lang="scss" scoped>
  .choose{
    background: rgba(0,0,0,0.1);
  }
  .header{
    width: 100%;
    height: 100%;
    background:#318CB8;
    .headerBox{
      height: 100%;
      width: 1200px;
      margin: 0 auto;
      .icon{
        float: left;
        width: 32px;
        height: 32px;
        margin-top: 20px;
        margin-right: 10px;
        text-align: center;
        vertical-align: middle;
        font-size: 28px;
        color: #fff;
      }
      .menu{
        float: left;
        width: 520px;
        .el-menu-demo{
          width: 100%;
          height: 100;
          border:none;
          .el-menu-item{
            width: 25%;
            text-align: center;
            font-size: 16px;
            border: 0;
          }
          .el-menu-item:hover{
            background: rgba(0,0,0,0.10) !important;
          }
          .el-menu-item.is-active{
            border-bottom: none !important;
            background: rgba(0,0,0,0.10) !important;
          }
        }
      }
      .operate{
        float: right;
        height:100%;
        li{
          width: 130px;
          height: 100%;
          color: #fff;
          font-size: 16px;
          float: left;
          text-align: center;
          line-height: 60px;
        }
      }
    }
  }
</style>
<script>
export default{
    data(){
        return {
          activeIndex: '1',
          registerShow:'true',
          menus: [
            {
              name: '首页',
              path: '/homePage/index'
            },
            {
              name: '专属SRC',
              path: '/homePage/src'
            },
            {
              name: '奖励活动',
              path: '/homePage/award'
            },
            {
              name: '了解我们',
              path: '/homePage/understand/loopholeReward'
            }
          ],
        }
    },
    methods:{
      handleSelect(key, keyPath) {
        if(key.includes('understand')){
          this.registerShow = false;
        }else{
          this.registerShow = true;
        }
      }
    }
}
</script>
