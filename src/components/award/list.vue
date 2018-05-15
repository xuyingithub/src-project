<template>
  <article class="award">
    <section class="check">
      <span>时间最近</span><span class="choose">奖励最高</span>
    </section>
    <section class="list">
      <div class="title"><h3>奖励活动</h3></div>
      <div class="card">
        <card v-for="(list,index) in cardList" :key="index" :boxStyle="boxStyle" :paddingStyle="{padding:'10px'}">
          <h2>{{list.title}}</h2>
          <div class="line"></div>
          <div class="img"></div>
          <div class="message">
            <h3>{{list.title}}</h3>
            <div class="detail range"><span>活动范围: {{list.domain}}</span></div>
            <div class="detail best"><span>最高奖励: {{list.award.high.max}}万里通积分</span></div>
            <div v-if="isLogin" class="awardRule">
              <span class="rule">奖励方式</span>
              <ul class="dangers">
                <li v-for="(danger,index) in list.award" :key="index">{{index|danger}}  {{danger.min}}-{{danger.max}}积分</li>
              </ul>
            </div>
            <div class="detail time"><i class="el-icon-time"></i><span>还剩: {{list.surplusTime}}</span></div>
          </div>
        </card>
      </div>
    </section>
  </article>
</template>
<style lang="scss" scoped>
  .award{
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
       }
       .card{
         width: 100%;
         display: flex;
         flex-wrap: wrap;
         h2{
           text-align: center;
           color: #333;
           font-size: 16px;
           font-family: PingFangSC-Medium;
           margin-top: 5px;
         }
         .line{
           width: 348px;
           height: 2px;
           background: #E6E4E0;
           margin: 10px auto;
         }
         .img{
           width: 82px;
           height: 82px;
           background: pink;
           border-radius: 20px;
           margin-top: 16px;
           margin-left:20px;
           float: left;
         }
         .message{
           width: 260px;
           float: left;
           padding-left: 20px;
           padding-top: 16px;
           h3{
             color: #333;
             font-size: 16px;
             font-family: PingFangSC-Medium;
           }
           .detail{
             margin-top: 10px;
             font-size: 14px;
           }
           .range{
             color: #333;
             font-family: PingFangSC-Regular;
           }
           .best{
             color: #666;
             font-family: PingFangSC-Regular;
           }
           .awardRule{
             margin-top:10px;
             .rule{
               font-family: PingFangSC-Medium;
               font-size: 14px;
               color: #E98C61;
             }
             .dangers{
               margin-top:4px;
               li{
                 font-family: PingFangSC-Regular;
                 font-size: 14px;
                 color: #666666;
                 height: 25px;
                 line-height: 25px;
               }
             }
           }
           .time{
             position: relative;
             height: 20px;
             margin-bottom: 16px;
             color: #E98C61;
             i{
               position: absolute;
               font-size: 20px;
               left: 0;
             }
             span{
               font-family: PingFangSC-Medium;
               font-size: 14px;
               position: absolute;
               left: 30px;
               height: 20px;
               line-height: 20px;
             }
           }
         }
       }
    }
  }
</style>
<script>
  import Card from '../../core/card'
  import { mapState } from 'vuex'
  export default{
    name:'award',
    data(){
      return {
        boxStyle:{
          width:'388px',
          marginTop:'20px',
          marginBottom:'28px',
          marginRight:'12px'
        },
        cardList:[]
      }
    },
    components:{
      Card
    },
    computed:{
      ...mapState(['isLogin'])
    },
    created(){
      for(let i =0;i<11;i++){
        this.cardList.push({
          activityId:'201805140948509281',
          companyId:'123456',
          award:{high:{max:80000,min:20000},low:{max:80000,min:40000},medium:{max:80000,min:60000}},
          companyName:'商户name1',
          logo:'logo',
          description:'ddasd',
          title:'axxxx',
          domain:'http://www.baidu.com',
          surplusTime:'576:59:17'
        });
      }
    }
  }
</script>
