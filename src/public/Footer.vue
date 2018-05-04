<template>
    <section class="footer">
        <div class="footerTop">
          <ul class="message">
            <li class="messageLi" v-for="message in footMessages">
              <h2>{{message.title}}</h2>
              <ul class="messageDetial">
                <li v-for="detail in message.details">
                  <a href="javascript:;">{{detail}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="footerBottom">
          <h3 v-html="copyright"></h3>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .footer{
      width: 100%;
      height: 100%;
      .footerTop{
        width: 100%;
        height: 405px;
        background: #224E6B;
        overflow:hidden;
        .message{
          width: 1540px;
          height: 300px;
          margin: 51px auto;
          .messageLi{
            float: left;
            width: 20%;
            height: 100%;
            h2{
              width: 100%;
              height:25px;
              text-align: center;
              line-height: 25px;
              color: #3DB4EA;
              font-size: 18px;
              font-family: PingFangSC-Regular;
            }
            .messageDetial{
              width: 100%;
              height: 160px;
              margin-top: 50px;
              li{
                width: 100%;
                height: 20%;
                font-family: PingFangSC-Regular;
                a{
                  text-align: center;
                  display: inline-block;
                  width: 100%;
                  height: 100%;
                  color: #9FA0A2;
                  font-size: 14px;
                  text-decoration: none;
                }
              }
            }
          }
        }
      }
      .footerBottom{
        width: 100%;
        height: 135px;
        background: #0B2F47;
        overflow:hidden;
        h3{
          width: 980px;
          height: 46px;
          margin: 45px auto 0;
          text-align: center;
          line-height: 23px;
          color: #9FA0A2;
          font-size: 12px;
        }
      }
    }
</style>
<script>
    export default{
      data(){
        return {
          copyright: '版权所有 © 中国平安保险（集团）股份有限公司 未经许可不得复制、转载或摘编，违者必究! <br/> Copyright © PING AN INSURANCE (GROUP) COMPANY OF CHINA ,LTD. All Rights Reserved',
          footMessages:[
            {
              title:'—— 威胁管理 ——',
              details:[
                'Web资产安全监控系统',
                '安全态势感知平台',
                '威胁信息管理平台'
              ]
            },
            {
              title:'—— 移动安全 ——',
              details:[
                'APP威胁监控系统',
                '安全键盘SDK',
                'APP深度安全检测系统'
              ]
            },
            {
              title:'—— 业务安全 ——',
              details:[
                '设备环境分险检测系统',
                '业务风险决策平台',
                '风险数据查询平台',
                '图文验证码服务',
                '滑块验证码服务',
              ]
            },
            {
              title:'—— 解决方案 ——',
              details:[
                '金融行业',
                '医疗行业'
              ]
            },
            {
              title:'—— 联系我们 ——',
              details:[
                '021-666666666',
                'sec@pingan.com.cn'
              ]
            }
          ]
        }
      }
    }
</script>
