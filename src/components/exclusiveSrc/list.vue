<template>
  <article class="src">
    <section class="check">
      <span>字母排序</span><span class="choose">奖励最高</span>
    </section>
    <section class="list">
      <div class="title"><h3>专属SRC</h3><span>企业发布悬赏，感谢白帽子参与安全保障计划</span></div>
      <div class="card">
        <card v-for="(list,index) in cardList" :key="index" :boxStyle="boxStyle" :paddingStyle="{padding:'0px'}">
          <div class="img" @click="routerPush('srcDetails')"></div>
          <h3>{{list.companyName}}</h3>
          <span>{{list.domain}}</span>
          <el-button class="button" @click="routerPush('submit')">提交漏洞</el-button>
        </card>
      </div>
    </section>
  </article>
</template>
<style lang="scss" scoped>
 .src{
   height: 100%;
   .check{
     width: 240px;
     height: 88px;
     margin: 0 auto;
     span{
       width: 100px;
       height: 30px;
       font-size: 14px;
       color: #9B9B99;
       text-align: center;
       line-height: 30px;
       margin-top: 58px;
     }
     span:first-child{
       float: left;
     }
     span:nth-child(2){
       float: right;
     }
     .choose{
       border: 1px solid #318CB8;
       border-radius: 20px;
       color: #318CB8;
     }
   }
   .list{
     width: 1200px;
     height: 100%;
     margin: 0 auto;
     .title{
       width: 100%;
       margin-top: 20px;
       height: 25px;
       h3{
         float: left;
         height: 100%;
         line-height: 25px;
         color: #666;
         font-size: 18px;
       }
       span{
         float: left;
         color: #999;
         font-size: 14px;
         height: 100%;
         line-height: 26px;
         margin-left: 10px;
       }
     }
     .card{
       width: 100%;
       display: flex;
       flex-wrap: wrap;
        .img{
          width: 82px;
          height: 82px;
          margin: 38px auto 0;
          background: pink;
          border-radius: 80px;
        }
        h3{
          height: 22px;
          line-height: 22px;
          text-align: center;
          color: #333;
          font-size: 16px;
          margin-top: 22px;
        }
        span{
          width: 180px;
          height: 20px;
          display: block;
          margin: 10px auto;
          color: #333;
          font-size: 14px;
          text-align: center;
        }
        .button{
          width: 110px;
          height: 38px;
          margin: 20px auto;
          display: block;
          color: #fff;
          font-size: 14px;
          background: #318CB8;
        }
     }
   }
 }
</style>
<script>
  import Card from '../../core/card'
  export default{
    name:'exclusiveSrc',
    data(){
        return {
          boxStyle:{
            width:'274px',
            height:'290px',
            marginTop:'20px',
            marginBottom:'30px',
            marginRight:'26px'
          },
          cardList:[]
        }
    },
    components:{
      Card
    },
    created(){
      for(let i = 0; i< 12; i++){
        this.cardList.push({
          companyId:'123456',
          award:{high:{max:80000,min:20000},low:{max:80000,min:40000},medium:{max:80000,min:60000}},
          companyPayScore:0,
          companyName:'商户name1',
          domain:'http://www.baidu.com'
        });
      }
    },
    methods:{
      routerPush(url){
        this.$router.push({name: url});
      }
    }
  }
</script>
