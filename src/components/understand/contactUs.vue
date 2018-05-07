<template>
  <section class="contactUs">
    <section class="introduction">
      <h2>平台介绍</h2>
      <div class="container">
        <span>{{introductionMessage}}</span>
      </div>
    </section>
    <section class="cooperation">
      <h2>商务合作</h2>
      <div class="container">
        <span v-html="contactMessage"></span>
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped>
  .contactUs{
    height: 100%;
    .introduction,.cooperation{
      h2{
        width: 100%;
        height: 40px;
        background: #EFF6FA;
        line-height: 40px;
        padding-left: 20px;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #333333;
      }
      .container{
        width: 100%;
        height: 656px;
        padding-top:24px;
        span{
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #666666;
          line-height: 21px;
          float: right;
        }
      }
    }
    .introduction{
      width: 848px;
      float: left;
      span{
        width: 815px;
        text-indent: 2em;
      }
    }
    .cooperation{
      width: 270px;
      float: right;
      span{
        width: 248px;
      }
    }
  }
</style>
<script>
   export default{
     name:'contactUs',
     data(){
       return {
         introductionMessage:'      平安集团重视旗下各产品和业务的安全，本着对用户信息安全负责的态度， 平安集团致力于打造具备高安全性的产品。平安集团希望借此平台，与广 大安全行业从业者、安全爱好者建立友好的互动，来共同提升平安产品的 安全性。通过在本平台提交漏洞，一经确认，您可以获得相应的奖励积分。 同时，您也可以密切关注提交过的漏洞，本平台将有专人负责审核、跟进 每一个安全漏洞。',
         contactMessage:`021-666666666 <br/> sec@pingan.com.cn`
       }
     }
   }
</script>
