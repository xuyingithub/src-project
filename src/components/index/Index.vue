<template>
  <article class="index">
    <carousel></carousel>
    <section class="hero">
      <h3 class="title">{{heroMsg.title}}</h3>
      <div class="rule">
        <div></div>
        <span class="el-icon-tickets"></span>
        <div></div>
      </div>
      <div class="heroCard">
        <card :boxStyle="heroMsg.boxStyle" :paddingStyle="{padding:'0px'}" v-for="(detail, index) in heroMsg.details" :key="index">
          <div class="personImg"></div>
          <div class="describe">
            <h3 class="level">{{detail.level}}</h3>
            <span class="work">{{detail.work}}</span>
            <div class="line"><i></i></div>
            <span class="counts">{{detail.counts}}</span>
            <span class="award">{{detail.award}}</span>
          </div>
        </card>
      </div>
    </section>
    <section class="src">
      <h3 class="title">{{srcMsg.title}}</h3>
      <div class="rule">
        <div></div>
        <span class="el-icon-tickets"></span>
        <div></div>
      </div>
      <div class="srcCard">
        <i class="arrow el-icon-arrow-left"></i>
        <card :boxStyle="srcMsg.boxStyle" :paddingStyle="{padding:'0px'}" v-for="(detail, index) in srcMsg.details" :key="index">
          <div class="companyImg"></div>
          <div class="describe">
            <h3 class="company">{{detail.company}}</h3>
            <span class="href">{{detail.href}}</span>
            <div class="line"><i></i></div>
            <span class="totalAward">{{detail.totalAward}}</span>
            <span class="best">{{detail.best}}</span>
            <span class="award">{{detail.award}}</span>
            <el-button class="button">提交漏洞</el-button>
          </div>
        </card>
        <i class="arrow el-icon-arrow-right"></i>
      </div>
      <div class="moreBox">
        <div class="more">
          <a href="javascript:;">查看更多</a><i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </section>
    <section class="rewardActivity">
      <h3 class="title">{{heroMsg.title}}</h3>
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
    <pa-footer></pa-footer>
  </article>
</template>
<style lang="scss">
  body {
    background-color: #fff;
    .index{
      height: 100%;
        .hero,.rewardActivity,.src,{
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
          .rule{
            height: 40px;
            margin-top: 40px;
            align-items: center;
            justify-content: center;
            display:flex;
            div{
              width: 248px;
              height: 3px;
              background: #E3E1DD;
            }
            span{
              display: inline-block;
              width: 40px;
              height: 40px;
              font-size: 46px;
              text-align: center;
              line-height: 40px;
              margin: 0 30px;
            }
          }
          .heroCard{
            width: 990px;
            height: 400px;
            margin: 40px auto;
            display: flex;
            justify-content: space-between;
            .personImg{
              width: 162px;
              height: 162px;
              border-radius: 90px;
              background: pink;
              margin: 50px auto 0;
            }
            .describe{
              width: 200px;
              height: 126px;
              margin: 15px auto;
              .level{
                font-family: PingFangSC-Medium;
                color: #333;
                font-size: 16px;
                height: 22px;
                text-align: center;
                margin-bottom: 8px;
              }
              .work,.counts,.award{
                font-family: PingFangSC-Regular;
                color: #333;
                font-size: 14px;
                display: block;
                text-align: center;
                height: 20px;
              }
              .counts,.award{
                color: #666;
              }
              .line{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 40px;
                i{
                  width: 37px;
                  height: 3px;
                  display: inline-block;
                  background: #B9B9B9;
                }
              }
            }
          }
          .srcCard{
            width: 1440px;
            height: 394px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 40px auto;
            .arrow{
              width: 25px;
              height: 50px;
              font-size: 50px;
              color: #D8D8D8;
            }
            .companyImg{
              width: 82px;
              height: 82px;
              border-radius: 90px;
              background: pink;
              margin: 40px auto 0;
            }
            .describe{
              width: 200px;
              margin: 20px auto;
              .company,.href,.totalAward,.best,.award{
                font-family: PingFangSC-Regular;
                color: #333;
                font-size: 14px;
                display: block;
                text-align: center;
                height: 20px;
                margin-top: 8px;
              }
              .company{
                font-family: PingFangSC-Medium;
                font-size: 16px;
                height: 22px;
              }
              .totalAward{
                margin-top: 0;
              }
              .totalAward,.award{
                color: #666;
              }
              .best{
                font-family: PingFangSC-Medium;
                color: #E98C61;
              }
              .line{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 38px;
                i{
                  width: 222px;
                  height: 3px;
                  display: inline-block;
                  background: #F2F1EF ;
                }
              }
              .button{
                width: 110px;
                height: 38px;
                margin: 18px auto;
                display: block;
                color: #fff;
                font-size: 14px;
                background: #318CB8;
              }
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
        .src{
          background: #fff;
        }
    }
  }
</style>
<script>
  import paFooter from '../../public/Footer'
  import Carousel from '../../core/carousel'
  import Card from '../../core/card'
  export default{
    name:'index',
    data(){
        return {
          heroMsg: {
            title:'本月英雄榜',
            boxStyle:{
              width:'290px',
              height:'400px'
            },
            details:[
              {
                level:'假装白帽子',
                work:'帮助124家厂商发现漏洞',
                counts:'发现漏洞数：140',
                award:'获取奖励：100.000万里通积分'
              },
              {
                level:'假装白帽子',
                work:'帮助124家厂商发现漏洞',
                counts:'发现漏洞数：140',
                award:'获取奖励：100.000万里通积分'
              },
              {
                level:'假装白帽子',
                work:'帮助124家厂商发现漏洞',
                counts:'发现漏洞数：140',
                award:'获取奖励：100.000万里通积分'
              }
            ]
          },
          srcMsg: {
            title:'专属SRC',
            boxStyle:{
              width:'290px',
              height:'390px'
            },
            details:[
              {
                company:'百度',
                href:'www.pinganjingguanjia.com',
                totalAward:'总发放奖励：138.000.000积分',
                best:'最高奖励',
                award:'获取奖励：100.000万里通积分'
              },
              {
                company:'阿里音乐',
                href:'www.pinganyinghang.com',
                totalAward:'总发放奖励：138.000.000积分',
                best:'最高奖励',
                award:'获取奖励：100.000万里通积分'
              },
              {
                company:'腾讯云',
                href:'www.tengxun.com',
                totalAward:'总发放奖励：138.000.000积分',
                best:'最高奖励',
                award:'获取奖励：100.000万里通积分'
              },
              {
                company:'百度云',
                href:'www.baiduicould.com',
                totalAward:'总发放奖励：138.000.000积分',
                best:'最高奖励',
                award:'获取奖励：100.000万里通积分'
              }
            ]
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
          }
        }
    },
    components:{
      paFooter,
      Carousel,
      Card
    }
  }
</script>
