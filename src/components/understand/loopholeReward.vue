<template>
  <section class="loopholeReward">
    <section class="definition">
      <h2>漏洞定义</h2>
      <div class="definitionContainer">
        <div  class="detail" v-for="(list,index) in definitionLists" :key="index">
          <h3>{{list.title}}</h3>
          <span>{{list.detail}}</span>
        </div>
      </div>
    </section>
    <section class="flow">
      <h2>漏洞提交流程</h2>
      <ul class="prompt">
        <li v-for="(text,index) in stepsText" :key="index" :class="(index+1)<isActive?'is-active':''">{{text.prompt}}</li>
      </ul>
      <div class="flowContainer">
        <el-steps :active="isActive" align-center process-status="wait">
          <el-step v-for="(step,index) in stepsLists" :key="index" :title="step.title" :icon="step.icon"></el-step>
        </el-steps>
      </div>
    </section>
    <section class="grade">
      <h2>漏洞等级定义</h2>
      <div class="definitionContainer">
        <div  class="detail" v-for="(list,index) in definitionLists" :key="index">
          <h3>{{list.title}}</h3>
          <span>{{list.detail}}</span>
        </div>
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped>
  .loopholeReward{
    height: 100%;
    .definition,.flow,.grade{
      position: relative;
      margin-bottom:40px;
      h2{
        width: 1140px;
        height: 40px;
        background: #EFF6FA;
        line-height: 40px;
        padding-left: 20px;
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #333333;
      }
      .definitionContainer{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .detail{
          width: 570px;
          height: 168px;
          padding-left: 20px;
          padding-top: 18px;
          h3{
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #333333;
            margin-bottom: 16px;
          }
          span{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #666666;
            line-height: 21px;
          }
        }
      }
      .prompt{
        position: absolute;
        top: 128px;
        left: 156px;
        width: 830px;
        height: 50px;
        li{
          float: left;
          width: 110px;
          margin-right: 70px;
          height: 100%;
          text-align: center;
          line-height: 50px;
          font-family: PingFangSC-Medium;
          font-size: 12px;
          color: #BBBBBB;
        }
        .is-active{
          color: #318CB8;
        }
        li:last-child{
          margin-right: 0px;
        }
      }
      .flowContainer{
        width: 94%;
        height: 100px;
        margin: 100px auto;
      }
    }
   .flow{
     👌height: 240px;
   }
   .grade{
      margin-bottom:300px;
   }
  }
</style>
<script>
  export default{
    data(){
      return {
        isActive:4,
        stepsLists:[
          {
            title:'专属SRC活动入口',
            icon:'el-icon-edit'
          },
          {
            title:'待审核',
            icon:'iconfont icon-daishenhe'
          },
          {
            title:'待确认',
            icon:'iconfont icon-daiqueding'
          },
          {
            title:'待支付',
            icon:'iconfont icon-daifukuan'
          },
          {
            title:'待修复',
            icon:'iconfont icon-daixiufu'
          },
          {
            title:'已关闭',
            icon:'el-icon-picture'
          }
        ],
        stepsText:[
          {
            prompt:'提交漏洞',
            isActive:false
          },
          {
            prompt:'漏洞初审',
            isActive:false
          },
          {
            prompt:'厂商确认',
            isActive:false
          },
          {
            prompt:'系统自动支付',
            isActive:false
          },
          {
            prompt:'厂商修复漏洞',
            isActive:false
          }
        ],
        definitionLists:[
          {
            title:'Web应用漏洞',
            detail:'SQL注入攻击是黑客对数据库进行攻击的常用手段之一。随着B/S模式应用开发的发展，使用这种模式编写应用程序的程序员也越来越多。但是由于程序员的水平及经验也参差不齐，相当大一部分程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的SQL Injection，即SQL注入。'
          },
          {
            title:'Web应用漏洞',
            detail:'SQL注入攻击是黑客对数据库进行攻击的常用手段之一。随着B/S模式应用开发的发展，使用这种模式编写应用程序的程序员也越来越多。但是由于程序员的水平及经验也参差不齐，相当大一部分程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的SQL Injection，即SQL注入。'
          },
          {
            title:'Web应用漏洞',
            detail:'SQL注入攻击是黑客对数据库进行攻击的常用手段之一。随着B/S模式应用开发的发展，使用这种模式编写应用程序的程序员也越来越多。但是由于程序员的水平及经验也参差不齐，相当大一部分程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的SQL Injection，即SQL注入。'
          }
        ]
      }
    }
  }
</script>
