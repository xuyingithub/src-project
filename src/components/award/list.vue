<template>
  <article class="award">
    <section class="check">
      <span>时间最近</span><span class="choose">奖励最高</span>
    </section>
    <section class="list">
      <div class="title"><h3>奖励活动</h3></div>
      <div class="card">
        <card v-for="(list,index) in cardList" :key="index" :boxStyle="boxStyle" :paddingStyle="{padding:'10px'}">
          <h2>{{list.activity}}</h2>
          <div class="line"></div>
          <div class="img"></div>
          <div class="message">
            <h3>{{list.title}}</h3>
            <div class="detail range"><span>活动范围:</span><span>{{list.range}}</span></div>
            <div class="detail best"><span>最高奖励:</span><span>{{list.best}}</span></div>
            <div class="detail time"><i class="el-icon-time"></i><span>还剩</span><span>{{list.time}}</span></div>
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
         justify-content: space-between;
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
           height: 154px;
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
             span:first-child{
               margin-right: 15px;
             }
           }
           .best{
             color: #666;
             font-family: PingFangSC-Regular;
             span:first-child{
               margin-right: 15px;
             }
           }
           .time{
             color: #E98C61;
             font-family: PingFangSC-Medium;
             i{
               margin-right: 12px;
               font-size: 16px;
               float: left;
             }
             span{
               float: left;
               height: 20px;
               line-height: 18px;
             }
           }
         }
       }
    }
  }
</style>
<script>
  import Card from '../../core/card'
  export default{
    name:'award',
    data(){
      return {
        boxStyle:{
          width:'388px',
          height:'208px',
          marginTop:'20px',
          marginBottom:'28px'
        },
        cardList:[
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          },
          {
            activity:'三倍积分',
            imgUrl:'',
            title:'百度安全漏洞',
            range:'www.baidu.com',
            best:'100.000万里通积分',
            time:'12:05:24'
          }
        ]
      }
    },
    components:{
      Card
    },
  }
</script>
