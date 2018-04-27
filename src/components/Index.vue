<template>
    <el-container>
      <el-header>
        <pa-header :registerShow="true"></pa-header>
      </el-header>
      <el-main>
        <carousel></carousel>
        <section class="hero">
          <h3 class="title">{{heroMsg.title}}</h3>
          <div class="rule">
            <div></div>
            <span class="el-icon-tickets"></span>
            <div></div>
          </div>
          <div class="heroCard">
            <el-row>
              <el-col v-for="(detail, index) in heroMsg.details" :key="index">
                <el-card :body-style="{ padding: '40px' }" shadow="hover">
                  <div class="personImg"></div>
                  <div class="describe">
                    <h3 class="level">{{detail.level}}</h3>
                    <span class="work">{{detail.work}}</span>
                    <div class="line"><i></i></div>
                    <span class="counts">{{detail.counts}}</span>
                    <span class="award">{{detail.award}}</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
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
            <el-row>
              <el-col v-for="(detail, index) in srcMsg.details" :key="index">
                <el-card :body-style="{ padding: '40px' }" shadow="hover">
                  <div class="companyImg"></div>
                  <div class="describe">
                    <h3 class="company">{{detail.company}}</h3>
                    <span class="href">{{detail.href}}</span>
                    <div class="line"><i></i></div>
                    <span class="totalAward">{{detail.totalAward}}</span>
                    <span class="best">{{detail.best}}</span>
                    <span class="award">{{detail.award}}</span>
                    <span class="submit">提交漏洞</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
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
            <el-row>
              <el-col v-for="(detail, index) in rewardActivityMsg.details" :key="index">
                <el-card :body-style="{ padding: '40px' }" shadow="hover">
                  <div class="describe">
                    <h3 class="activity">{{detail.activity}}</h3>
                    <div class="line"><i></i></div>
                    <span class="range">{{detail.range}}</span>
                    <span class="best">{{detail.best}}</span>
                    <span class="points">{{detail.points}}</span>
                    <span class="time"><i class="el-icon-time"></i><b>{{detail.time}}</b></span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div class="moreBox">
            <div class="more">
              <a href="javascript:;">查看更多</a><i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </section>
        <pa-footer></pa-footer>
      </el-main>
      <!--<el-footer height="540px">-->
        <!--<pa-footer></pa-footer>-->
      <!--</el-footer>-->
    </el-container>
</template>
<style lang="scss">
  @import '../css/reset.css';
  body {
    background-color: #fff;
    .el-container{
      height: 100%;
      .el-header {
        padding: 0;
      }
      .el-main{
        padding: 0;
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
            width: 1120px;
            height: 400px;
            margin: 40px auto;
            .el-row{
              display: flex;
              justify-content: space-between;
              align-items: center;
              height:100%;
              .el-col{
                width: 290px;
                height: 100%;
                .el-card{
                  height: 100%;
                  .personImg{
                    width: 162px;
                    height: 162px;
                    border-radius: 90px;
                    background: pink;
                    margin: 0 auto;
                  }
                  .describe{
                    width: 200px;
                    height: 126px;
                    margin: 30px auto;
                    .level{
                      color: #333;
                      font-size: 16px;
                      height: 22px;
                      text-align: center;
                    }
                    .work,.counts,.award{
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
                      height: 42px;
                      i{
                        width: 37px;
                        height: 3px;
                        display: inline-block;
                        background: #B9B9B9;
                      }
                    }
                  }
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
            .el-row {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 100%;
              .el-col{
                width: 290px;
                height: 100%;
                .el-card{
                  height: 100%;
                  .companyImg{
                    width: 82px;
                    height: 82px;
                    border-radius: 90px;
                    background: pink;
                    margin: 0 auto;
                  }
                  .describe{
                    width: 200px;
                    margin: 30px auto;
                    .company,.href,.totalAward,.best,.award{
                      color: #333;
                      font-size: 14px;
                      display: block;
                      text-align: center;
                      height: 20px;
                      margin-top: 5px;
                    }
                    .company{
                      font-size: 16px;
                      height: 22px;
                    }
                    .totalAward,.award{
                      color: #666;
                    }
                    .best{
                      color: #E98C61;
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
                        background: #F2F1EF ;
                      }
                    }
                    .submit{
                      width: 114px;
                      height: 44px;
                      background: #318CB8;
                      display: block;
                      text-align: center;
                      line-height: 44px;
                      color: #fff;
                      margin: 10px auto;
                    }
                  }
                }
              }
            }
          }
          .rewardCard{
            width: 1400px;
            height: 400px;
            margin: 40px auto 10px;
            .el-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 100%;
              .el-col{
                width: 290px;
                height: 300px;
                .el-card{
                  height: 100%;
                  .activity{
                    color:#E98C61;
                    font-size: 30px;
                    text-align: center;
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
                  }
                  .best{
                    color: #E98C61;
                  }
                  .points,.time{
                    color: #666;
                  }
                  .time{
                    height: 30px;
                    background: #4A90E2;
                    width: 150px;
                    margin: 10px auto;
                    line-height: 30px;
                    i{
                      margin-right: 8px;
                    }
                  }
                }
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
      .el-footer{
        padding: 0;
      }
    }
  }
</style>
<script>
  import paHeader from '../public/Header'
  import paFooter from '../public/Footer'
  import Carousel from '../core/carousel'
  export default{
    name:'index',
    data(){
        return {
          heroMsg: {
            title:'本月英雄榜',
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
      paHeader,
      paFooter,
      Carousel
    }
  }
</script>
