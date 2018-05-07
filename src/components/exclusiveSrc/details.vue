<template>
  <section class="srcDetails">
    <section class="banner">
      <div class="company">
        <div class="companyImg"></div>
        <h2>百度安全应急技术有限公司</h2>
        <span>安全应急响应中心</span>
        <el-button class="button">提交漏洞</el-button>
      </div>
    </section>
    <section class="details">
      <div class="cardContainer">
        <card :boxStyle="boxStyle" :paddingStyle="{padding:'0px'}">
          <h2>公司简介</h2>
          <span class="text">百度（纳斯达克：BIDU），
          全球最大的中文搜索引擎、最大的中文网站。1999年底,
          身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，
          他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。
        </span>
        </card>
        <card :boxStyle="boxStyle" :paddingStyle="{padding:'0px'}">
          <h2>漏洞收集范围</h2>
          <span class="text">
          如果需要向内核中添加功能，我们可以通过修改内核源码并重新编译的方式来完成。
          但这种方法需要在每次修改时都重新编译内核，因此不够灵活；
          此外，许多功能如硬件驱动，如果全部包含在内核中，无疑会增加内核的大小。
          因此，内核模块便应运而生：我们可以在内核运行时动……
        </span>
        </card>
        <card :boxStyle="boxStyle" :paddingStyle="{padding:'0px'}">
          <h2>漏洞奖励计划</h2>
          <div class="awards best"><span>100000</span><h3>最高奖励</h3></div>
          <div class="awards total"><span>200000</span><h3>累计奖励</h3></div>
        </card>
      </div>
    </section>
    <section class="rewardPlan">
      <h3 class="title">奖励方案</h3>
      <div class="rule">
        <div></div>
        <span class="el-icon-tickets"></span>
        <div></div>
      </div>
    </section>
    <section class="newsUpdate">
      <h3 class="title">奖励方案</h3>
      <div class="rule">
        <div></div>
        <span class="el-icon-tickets"></span>
        <div></div>
      </div>
      <div class="update">
        <div style="height: 480px;">
          <el-steps direction="vertical" :active="3">
            <el-step v-for="(list,index) in newsUpdate.updateLists" :key="index"
                     :title="list.title"
                     icon="el-icon-setting"
                     :description="list.description"></el-step>
          </el-steps>
        </div>
      </div>
    </section>
    <section class="rewardActivity">
      <h3 class="title">{{rewardActivityMsg.title}}</h3>
      <div class="rule">
        <div></div>
        <span class="el-icon-tickets"></span>
        <div></div>
      </div>
      <div class="rewardCard">
        <card :boxStyle="rewardActivityMsg.boxStyle" :paddingStyle="{padding:'0px'}" v-for="(detail, index) in rewardActivityMsg.details" :key="index">
          <div class="describe">
            <h3 class="activity">{{detail.activity}}</h3>
            <div class="line"><i></i></div>
            <span class="range">{{detail.range}}</span>
            <span class="best">{{detail.best}}</span>
            <span class="points">{{detail.points}}</span>
            <span class="time"><i class="el-icon-time"></i><b>{{detail.time}}</b></span>
          </div>
        </card>
      </div>
      <div class="moreBox">
        <div class="more">
          <a href="javascript:;">查看更多</a><i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped>
  .srcDetails{
    height: 100%;
    .banner{
      height: 530px;
      background: url("../../assets/carousel/srcBanner.png") no-repeat 0px 0px;
      overflow: hidden;
      background-size: cover;
      .company{
        width: 240px;
        height: 300px;
        margin: 115px auto;
        .companyImg{
          width: 102px;
          height: 102px;
          border-radius: 100px;
          background: #fff;
          margin: 0 auto;
        }
        h2{
          opacity: 0.8;
          font-family: PingFangSC-Medium;
          font-size: 20px;
          color: #FFFFFF;
          text-align: center;
          margin-top: 20px;
        }
        span{
          opacity: 0.8;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #FFFFFF;
          text-align: center;
          display: block;
          margin: 8px auto 32px;
        }
        .button{
          width: 110px;
          height: 38px;
          margin: 0 auto;
          display: block;
          color: #fff;
          font-size: 14px;
          background: rgba(255,255,255,0.10);
          border: 1px solid #FFFFFF;
          border-radius: 2px;
          font-family: PingFangSC-Regular;
        }
      }
    }
    .details{
      height: 340px;
      .cardContainer{
        width: 1218px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      h2{
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333333;
        text-align: center;
        margin-top: 30px;
      }
      .text{
        width: 337px;
        height: 138px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        line-height: 21px;
        display: block;
        margin: 18px auto;
        text-indent: 2em;
      }
      .awards{
        width: 50%;
        float: left;
        height: 285px;
        text-align: center;
        font-family: PingFangSC-Medium;
        color: #333333;
        span{
          font-size: 30px;
          margin-top: 38px;
          display: inline-block;
        }
        h3{
          font-size: 16px;
          margin-top: 20px;
        }
      }
    }
    .rewardPlan,.newsUpdate,.rewardActivity{
      width: 100%;
      height: 720px;
      background: #F1F7FC;
      overflow:hidden;
      .title{
        color:#666;
        font-size: 26px;
        text-align: center;
        height: 40px;
        margin-top: 60px;
        font-family: PingFangSC-Light;
      }
      .rule {
        height: 40px;
        margin-top: 40px;
        align-items: center;
        justify-content: center;
        display: flex;
        div {
          width: 248px;
          height: 3px;
          background: #E3E1DD;
        }
        span {
          display: inline-block;
          width: 40px;
          height: 40px;
          font-size: 46px;
          text-align: center;
          line-height: 40px;
          margin: 0 30px;
        }
      }
      .rewardCard{
        width: 1260px;
        height: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px auto 10px;
        .activity{
          color:#E98C61;
          font-size: 30px;
          text-align: center;
          margin-top: 40px;
          font-family: PingFangSC-Medium;
        }
        .line{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          i{
            width: 222px;
            height: 3px;
            display: inline-block;
            background: #F2F1EF;
          }
        }
        .range,.best,.points,.time{
          color: #333;
          font-size: 14px;
          display: block;
          text-align: center;
          height: 20px;
          margin-top:10px;
          font-family: PingFangSC-Regular;
        }
        .best{
           color: #E98C61;
           font-family: PingFangSC-Medium;
        }
        .points,.time{
            color: #666;
        }
        .time{
           height: 30px;
           background: rgba(74,144,226,0.13);
           width: 150px;
           margin: 20px auto;
           line-height: 30px;
           color: #666;
           border-radius: 6px;
           i{
             margin-left: -10px;
             margin-right: 8px;
           }
         }
      }
      .moreBox{
        height: 22px;
        .more{
          width: 85px;
          height: 100%;
          margin:0 auto;
          color: #9C9C9C;
          font-size: 16px;
          text-align: center;
        }
      }
    }
    .newsUpdate{
      width: 800px;
      height: 800px;
      margin:0 auto;
      background: #fff;
      .update{
        width: 500px;
        height: 480px;
        margin: 60px auto;
        float: right;
      }
    }
  }
</style>
<script>
  import Card from '../../core/card'
  export default{
    name:'srcDetails',
    data(){
      return {
        boxStyle:{
          width:'394px',
          height:'230px'
        },
        rewardActivityMsg:{
          title:'奖励活动',
          boxStyle:{
            width:'290px',
            height:'300px'
          },
          details:[
            {
              activity:'双倍积分',
              range:'活动范围：www.pingan.com',
              best:'最高奖励',
              points:'100.000万里通积分',
              time:'还剩12:05:24'
            },
            {
              activity:'双倍积分',
              range:'活动范围：www.pingan.com',
              best:'最高奖励',
              points:'100.000万里通积分',
              time:'还剩12:05:24'
            },
            {
              activity:'双倍积分',
              range:'活动范围：www.pingan.com',
              best:'最高奖励',
              points:'100.000万里通积分',
              time:'还剩12:05:24'
            },
            {
              activity:'双倍积分',
              range:'活动范围：www.pingan.com',
              best:'最高奖励',
              points:'100.000万里通积分',
              time:'还剩12:05:24'
            }
          ]
        },
        newsUpdate:{
          updateLists:[
            {
              title:'商户向白帽子发放100.000积分奖励',
              description:'2016-01-01  13:50'
            },
            {
              title:'商户向白帽子发放100.000积分奖励',
              description:'2016-01-01  13:50'
            },
            {
              title:'商户向白帽子发放100.000积分奖励',
              description:'2016-01-01  13:50'
            },
            {
              title:'商户向白帽子发放100.000积分奖励',
              description:'2016-01-01  13:50'
            },
            {
              title:'商户向白帽子发放100.000积分奖励',
              description:'2016-01-01  13:50'
            },
            {
              title:'商户向白帽子发放100.000积分奖励',
              description:'2016-01-01  13:50'
            },
            {
              title:'商户向白帽子发放100.000积分奖励',
              description:'2016-01-01  13:50'
            },
            {
              title:'商户向白帽子发放100.000积分奖励',
              description:'2016-01-01  13:50'
            }
          ]
        }
      }
    },
    components:{
      Card
    }
  }
</script>
