<template>
  <section class="srcDetails">
    <section class="banner">
      <div class="company">
        <div class="companyImg"></div>
        <h2>{{companyMessage.companyName}}</h2>
        <span>安全应急响应中心</span>
        <el-button class="button">提交漏洞</el-button>
      </div>
    </section>
    <section class="details">
      <div class="cardContainer">
        <card :boxStyle="companyMessage.boxStyle" :paddingStyle="{padding:'0px'}">
          <h2>公司简介</h2>
          <span class="text">{{companyMessage.introduce}}</span>
        </card>
        <card :boxStyle="companyMessage.boxStyle" :paddingStyle="{padding:'0px'}">
          <h2>漏洞收集范围</h2>
          <span class="text">{{companyMessage.holeScope}}</span>
        </card>
        <card :boxStyle="companyMessage.boxStyle" :paddingStyle="{padding:'0px'}">
          <h2>漏洞奖励计划</h2>
          <div class="awards best"><span>{{companyMessage.highestAward}}</span><h3>最高奖励</h3></div>
          <div class="awards total"><span>{{companyMessage.allAwardScores}}</span><h3>累计奖励</h3></div>
        </card>
      </div>
    </section>
    <section class="rewardPlan">
      <h3 class="title">奖励方案</h3>
      <div class="rule">
        <div></div>
        <span class="iconfont icon-jianglifangan"></span>
        <div></div>
      </div>
      <div class="case">
        <div class="pleaseLogin"><span>登录</span>后可查看全部奖励方案</div>
        <div v-if="isLogin" class="danger">
          <card v-for="(danger,index) in companyMessage.award" :key="index" :boxStyle="companyMessage.boxStyle" :paddingStyle="{padding:'0px'}">
            <h3 :class="index">{{index|danger}}</h3>
            <span>{{danger.min}} - {{danger.max}}</span>
          </card>
        </div>
      </div>
    </section>
    <section class="newsUpdate">
      <h3 class="title">最新动态</h3>
      <div class="rule">
        <div></div>
        <span class="iconfont icon-zuixindongtai"></span>
        <div></div>
      </div>
      <div class="update">
        <div style="height: 480px;">
          <el-steps direction="vertical" >
            <el-step v-for="(list,index) in newsUpdate" :key="index"
                     :title="scores(list.scores)"
                     icon="icon"
                     :description="list.createTime"></el-step>
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
            <h3 class="activity">{{detail.title}}</h3>
            <div class="line"><i></i></div>
            <span class="range">活动范围: {{detail.description}}</span>
            <span v-if="!isLogin"class="best">最高奖励</span>
            <span v-if="isLogin" class="best">奖励方式</span>
            <span v-if="!isLogin" class="points">{{detail.award.high.max}}万里通积分</span>
            <ul v-if="isLogin" class="dangers">
              <li v-for="(danger,index) in detail.award" :key="index">{{index|danger}} {{danger.min}}-{{danger.max}}积分</li>
            </ul>
            <span class="time"><i class="el-icon-time"></i><b>还剩 {{detail.surplusTime}}</b></span>
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
      background: #F1F7FC;
      padding-bottom: 60px;
      height: 320px;
      .cardContainer{
        width: 1218px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
      }
      h2{
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333333;
        text-align: center;
        margin-top: 22px;
      }
      .text{
        width: 337px;
        height: 138px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #666666;
        line-height: 24px;
        display: block;
        margin: 12px auto;
        text-indent: 2em;
      }
      .awards{
        width: 50%;
        float: left;
        text-align: center;
        font-family: PingFangSC-Medium;
        color: #333333;
        span{
          font-size: 30px;
          margin-top: 42px;
          display: inline-block;
          font-family: PingFangSC-Regular;
          font-size: 30px;
          color: #4BC2EE;
          letter-spacing: -1.04px;
        }
        h3{
          font-size: 14px;
          margin-top: 20px;
          color: #333;
          font-family: PingFangSC-Regular;
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
          height: 1px;
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
          color: #979797;
        }
      }
      .case{
        height: 540px;
        display: flex;
        align-items: center;
        justify-content: center;
        .pleaseLogin{
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #2A2A2A;
          text-align: center;
          line-height: 24px;
          span{
            color: #0087FF;
          }
        }
        .danger{
          width: 1218px;
          height: 230px;
          display: flex;
          justify-content: space-between;
          h3{
            font-family: PingFangSC-Medium;
            font-size: 18px;
            color: #FFFFFF;
            width: 97px;
            height: 40px;
            border-radius: 22px;
            text-align: center;
            line-height: 40px;
            margin: 50px auto 40px;
          }
          .high{
            background: #F55E5E;
          }
          .medium{
            background: #FFBF00;
          }
          .low{
            background: #505F7E;
          }
          span{
            font-family: PingFangSC-Medium;
            font-size: 30px;
            color: #333333;
            display: block;
            text-align: center;
          }
        }
      }
      .rewardCard{
        width: 1260px;
        height: 380px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px auto 30px;
        .activity{
          color:#E98C61;
          font-size: 30px;
          height: 42px;
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
           margin: 12px auto 30px;
           line-height: 30px;
           color: #666;
           position: relative;
           border-radius: 6px;
           i{
             font-size: 18px;
             position: absolute;
             top: 6px;
             left: 10px;
           }
           b{
             position: absolute;
             left: 34px;
             font-family: PingFangSC-Regular;
             font-size: 14px;
             color: #666666;
           }
         }
          .dangers{
            margin-top:8px;
            li{
              line-height: 25px;
              color: #666;
              font-family: PingFangSC-Regular;
              font-size: 14px;
              text-align: center;
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
        width: 470px;
        height: 480px;
        margin: 60px auto;
        float: right;
      }
    }
  }
</style>
<script>
  import Card from '../../core/card'
  import { mapState } from 'vuex'
  export default{
    name:'srcDetails',
    data(){
      return {
        companyMessage:{
          boxStyle:{
            width:'394px',
            height:'220px'
          },
          companyId:'123456',
          award:{high:{max:80000,min:20000},low:{max:80000,min:40000},medium:{max:80000,min:60000}},
          introduce:'百度（纳斯达克：BIDU），全球最大的中文搜索引擎、最大的中文网站。1999年底,身在美国硅谷的李彦宏看到了中国互联网及中文搜索引擎服务的巨大发展潜力，抱着技术改变世界的梦想，他毅然辞掉硅谷的高薪工作，携搜索引擎专利技术，于 2000年1月1日在中关村创建了百度公司。',
          companyName:'商户name1',
          logo:'logo',
          highestAward:80000,
          holeScope:'如果需要向内核中添加功能，我们可以通过修改内核源码并重新编译的方式来完成。但这种方法需要在每次修改时都重新编译内核，因此不够灵活；此外，许多功能如硬件驱动，如果全部包含在内核中，无疑会增加内核的大小。因此，内核模块便应运而生：我们可以在内核运行时动……',
          allAwardScores:1222220
        },
        rewardActivityMsg:{
          title:'奖励活动',
          boxStyle:{
            width:'290px'
          },
          details:[]
        },
        newsUpdate:[]
      }
    },
    components:{
      Card
    },
    computed:{
      ...mapState(['isLogin'])
    },
    created(){
      for(let i= 0;i<8;i++){
        this.newsUpdate.push({
          scores:10000,
          createTime:'2018-05-10  13:50:12'
        });
      }
      for(let j=0;j<4;j++){
        this.rewardActivityMsg.details.push({
          title:'双倍积分',
          description:'www.pingan.com',
          award:{high:{max:80000,min:20000},low:{max:80000,min:40000},medium:{max:80000,min:60000}},
          surplusTime:'576:59:17'
        });
      }
    },
    methods:{
      scores(val){
        return `商户向白帽子发放${val}积分奖励`
      }
    }
  }
</script>
