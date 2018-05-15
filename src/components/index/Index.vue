<template>
  <article class="index">
    <carousel></carousel>
    <section class="hero">
      <h3 class="title">本月英雄榜</h3>
      <div class="rule">
        <div></div>
        <span class="iconfont icon-yingxiongban"></span>
        <div></div>
      </div>
      <div class="heroCard">
        <card :boxStyle="heroMsg.boxStyle" :paddingStyle="{padding:'0px'}" v-for="(detail, index) in heroMsg.details" :key="index">
          <div class="mask">状元</div>
          <div class="personImg"></div>
          <div class="describe">
            <h3 class="level">{{detail.nickname}}</h3>
            <span class="work">帮助 {{detail.companycounts}} 家厂商发现漏洞</span>
            <div class="line"><i></i></div>
            <span class="counts">发现漏洞数: {{detail.leakcounts}}</span>
            <span class="award">获取奖励：{{detail.whitecapscores}}万里通积分</span>
          </div>
        </card>
      </div>
    </section>
    <section class="src">
      <h3 class="title">专属SRC</h3>
      <div class="rule">
        <div></div>
        <span class="iconfont icon-zhuanshuSRC"></span>
        <div></div>
      </div>
      <div class="srcCard">
        <i class="arrow el-icon-arrow-left"></i>
        <card :boxStyle="srcMsg.boxStyle" :paddingStyle="{padding:'0px'}" v-for="(detail, index) in srcMsg.details" :key="index">
          <div class="companyImg"></div>
          <div class="describe">
            <h3 class="company">{{detail.companyName}}</h3>
            <span class="href">{{detail.domain}}</span>
            <div class="line"><i></i></div>
            <span class="totalAward">总发放奖励：{{detail.companyPayScores}} 积分</span>
            <span class="best">最高奖励</span>
            <span class="best" v-if="isLogin">奖励方式</span>
            <span class="award">{{detail.award.high.max}} 万里通积分</span>
            <ul v-if="isLogin" class="dangers">
              <li v-for="(danger,index) in detail.award" :key="index">{{index|danger}} {{danger.min}}-{{danger.max}}积分</li>
            </ul>
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
      <h3 class="title">奖励活动</h3>
      <div class="rule">
        <div></div>
        <span class="iconfont icon-jianglihuodong"></span>
        <div></div>
      </div>
      <div class="rewardCard">
        <card :boxStyle="rewardActivityMsg.boxStyle" :paddingStyle="{padding:'0px'}" v-for="(detail, index) in rewardActivityMsg.details" :key="index">
          <div class="describe">
          <h3 class="activity">{{detail.title}}</h3>
          <div class="line"><i></i></div>
          <span class="range">活动范围: {{detail.domain}}</span>
          <span class="best">最高奖励</span>
          <span class="best" v-if="isLogin">奖励方式</span>
          <span class="points">{{detail.award.high.max}}万里通积分</span>
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
    <pa-footer></pa-footer>
  </article>
</template>
<style lang="scss" scoped>
  body {
    background-color: #fff;
    .index{
      height: 100%;
        .hero,.rewardActivity,.src,{
          width: 100%;
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
              height: 1px;
              background: #E3E1DD;
            }
            .iconfont{
              display: inline-block;
              width: 40px;
              height: 40px;
              font-size: 50px;
              text-align: center;
              line-height: 32px;
              margin: 0 20px;
              color: #979797;
            }
          }
          .heroCard{
            width: 990px;
            height: 400px;
            margin: 40px auto 100px;
            display: flex;
            justify-content: space-between;
            .mask{
              width: 100px;
              height:0;
              border-width:0 30px 30px 30px;
              border-style:none solid solid;
              border-color:transparent transparent #FBBE24;
              text-align: center;
              line-height: 30px;
              float: right;
              -ms-transform:rotate(45deg); 	/* IE 9 */
              -moz-transform:rotate(45deg); 	/* Firefox */
              -webkit-transform:rotate(45deg); /* Safari 和 Chrome */
              -o-transform:rotate(45deg); 	/* Opera */
              margin-top: -40px;
              margin-right: -25px;
              font-family: PingFangSC-Medium;
              font-size: 16px;
              color: #FFFFFF;
            }
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
              .company,.href,.totalAward,.best,.award,{
                font-family: PingFangSC-Regular;
                color: #333;
                font-size: 14px;
                display: block;
                text-align: center;
                height: 20px;
                margin-top: 8px;
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
               position: relative;
               border-radius: 6px;
               i{
                 font-size: 18px;
                 position: absolute;
                 top: 6px;
                 left: 10px;
               }
               b{
                 width: 100px;
                 position: absolute;
                 left: 34px;
               }
            }
          }
          .moreBox{
            margin-bottom: 60px;
            height: 22px;
            .more{
              width: 85px;
              height: 100%;
              margin:0 auto;
              text-align: center;
              color: #9C9C9C;
              a{
                color: #9C9C9C;
                font-size: 16px;
                font-family: PingFangSC-Regular;
              }
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
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'
  export default{
    name:'index',
    data(){
        return {
          heroMsg: {
            boxStyle:{
              width:'290px',
              height:'400px'
            },
            details:[
              {
                nickname:'小明',
                companycounts: 1,
                leakcounts: 4,
                whitecapscores: 130000
              },
              {
                nickname:'小明',
                companycounts: 1,
                leakcounts: 4,
                whitecapscores: 130000
              },
              {
                nickname:'小明',
                companycounts: 1,
                leakcounts: 4,
                whitecapscores: 130000
              }
            ]
          },
          srcMsg: {
            boxStyle:{
              width:'290px'
//              height:'390px'
            },
            details:[
              {
                companyId:'123456',
                award:{high:{max:80000,min:20000},low:{max:80000,min:40000},medium:{max:80000,min:60000}},
                companyPayScores: 0,
                companyName:'商户name1',
                domain:'http://www.baidu.com'
              },
              {
                companyId:'123456',
                award:{high:{max:80000,min:20000},low:{max:80000,min:20000},medium:{max:80000,min:20000}},
                companyPayScores: 0,
                companyName:'商户name1',
                domain:'http://www.baidu.com'
              },
              {
                companyId:'123456',
                award:{high:{max:80000,min:20000},low:{max:80000,min:20000},medium:{max:80000,min:20000}},
                companyPayScores: 0,
                companyName:'商户name1',
                domain:'http://www.baidu.com'
              },
              {
                companyId:'123456',
                award:{high:{max:80000,min:20000},low:{max:80000,min:20000},medium:{max:80000,min:20000}},
                companyPayScores: 0,
                companyName:'商户name1',
                domain:'http://www.baidu.com'
              }
            ]
          },
          rewardActivityMsg:{
            title:'奖励活动',
            boxStyle:{
              width:'290px'
            },
            details:[
              {
                activityId:'201804281700000211',
                award:{high:{max:80000,min:20000},low:{max:80000,min:40000},medium:{max:80000,min:60000}},
                companyName:'商户name1',
                domain:'http://www.baidu.com',
                surplusTime:'576:59:17',
                title:'标题1'
              },
              {
                activityId:'201804281700000211',
                award:{high:{max:80000,min:20000},low:{max:80000,min:40000},medium:{max:80000,min:60000}},
                companyName:'商户name1',
                domain:'http://www.baidu.com',
                surplusTime:'576:59:17',
                title:'标题1'
              },
              {
                activityId:'201804281700000211',
                award:{high:{max:80000,min:20000},low:{max:80000,min:40000},medium:{max:80000,min:60000}},
                companyName:'商户name1',
                domain:'http://www.baidu.com',
                surplusTime:'576:59:17',
                title:'标题1'
              },
              {
                activityId:'201804281700000211',
                award:{high:{max:80000,min:20000},low:{max:80000,min:40000},medium:{max:80000,min:60000}},
                companyName:'商户name1',
                domain:'http://www.baidu.com',
                surplusTime:'576:59:17',
                title:'标题1'
              }
            ]
          }
        }
    },
    components:{
      paFooter,
      Carousel,
      Card
    },
    created(){
//      this.login()
    },
    computed:{
      ...mapState(['isLogin'])
    },
    methods:{
      ...mapActions({login:'isLogin'})
    }
  }
</script>
