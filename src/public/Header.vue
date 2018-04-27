<template>
    <section class="header">
       <div class="headerBox">
         <span class=" icon el-icon-date"></span>
         <ul class="title">
           <li v-for="item in items"
               @click="chooseTitle(item)"
               :class="{choose:item.choose}">
             {{item.title}}</li>
         </ul>
         <ul class="operate">
           <li>登录</li>
           <li v-if="registerShow">注册</li>
         </ul>
       </div>
    </section>
</template>
<style lang="scss" scoped>
  @import '../css/reset.css';
  .choose{
    background: rgba(0,0,0,0.1);
  }
  .header{
    width: 100%;
    height: 100%;
    background:#318CB8;
    .icon{
      float: left;
      width: 32px;
      height: 32px;
      margin-top: 20px;
      margin-right: 10px;
      text-align: center;
      vertical-align: middle;
      font-size: 22px;
    }
    .headerBox{
      height: 100%;
      width: 1400px;
      margin: 0 auto;
      li{
        line-height:60px;
        color:#fff;
        font-size: 16px;
        float: left;
        text-align: center;
      }
      .title{
        float: left;
        width: 520px;
        height: 100%;
        li{
          height: 100%;
          width: 25%;
        }
      }
      .operate{
        float: right;
        height:100%;
        li{
          width: 130px;
          height: 100%;
        }
      }
    }
  }
</style>
<script>
export default{
    props:{
      registerShow:{
        type: Boolean,
        default: false
      }
    },
    data(){
        return {
          items:[
            {
              title:'首页',
              choose:true
            },
            {
              title:'专属SRC',
              choose:false
            },
            {
              title:'奖励活动',
              choose:false
            },
            {
              title:'了解我们',
              choose:false
            },
          ]
        }
    },
    methods:{
      chooseTitle(item){
        this.items.forEach(v => v.choose = false);
        item.choose = !item.choose;
      }
    }
}
</script>
