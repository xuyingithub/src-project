<template>
  <section class="userCenter">
    <section class="manufacturer">
      <h2>厂商问答</h2>
      <div class="container">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(list,index) in collapseLists" :key="index" :name="index">
            <template slot="title">
              <i class="icon">Q</i><span class="question">{{list.title}}</span>
            </template>
            <div><i class="icon qIcon">A</i><span class="answer">{{list.answer}}</span></div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section>
    <section class="whiteCat">
      <h2>白帽子问答</h2>
      <div class="container">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(list,index) in collapseLists" :key="index" :name="index+10">
            <template slot="title">
              <i class="icon">Q</i><span class="question">{{list.title}}</span>
            </template>
            <div><i class="icon qIcon">A</i><span class="answer">{{list.answer}}</span></div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section>
  </section>
</template>
<style lang="scss" scoped>
    .userCenter{
      height: 100%;
      .manufacturer,.whiteCat{
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
        .container{
          padding-left: 38px;
          padding-top: 10px;
          height: 418px;
          .icon{
            float: left;
            width: 20px;
            height: 20px;
            background: #318CB8;
            border-radius: 4px;
            line-height: 20px;
            margin-top: 20px;
            color: #fff;
            text-align: center;
            margin-right: 10px;
          }
          .question{
            float: left;
            margin-right: 10px;
          }
          .qIcon{
            margin-top: 0px;
            background: #E98C61;
          }
          .answer{
            float: right;
            width: 1070px;
          }
        }
      }
    }
</style>
<script>
  export default{
      data(){
          return {
            activeName:'1',
            collapseLists:[
              {
                title:'系统漏洞如何提交?',
                answer:'SQL注入攻击是黑客对数据库进行攻击的常用手段之一。随着B/S模式应用开发的发展，使用这种模式编写应用程序的程序员也越来越多。但是由于程序员的水平及经验也参差不齐，相当大一部分程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的SQL Injection，即SQL注入。'
              },
              {
                title:'系统漏洞如何提交?',
                answer:'SQL注入攻击是黑客对数据库进行攻击的常用手段之一。随着B/S模式应用开发的发展，使用这种模式编写应用程序的程序员也越来越多。但是由于程序员的水平及经验也参差不齐，相当大一部分程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的SQL Injection，即SQL注入。'
              },
              {
                title:'系统漏洞如何提交?',
                answer:'SQL注入攻击是黑客对数据库进行攻击的常用手段之一。随着B/S模式应用开发的发展，使用这种模式编写应用程序的程序员也越来越多。但是由于程序员的水平及经验也参差不齐，相当大一部分程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的SQL Injection，即SQL注入。'
              },
              {
                title:'系统漏洞如何提交?',
                answer:'SQL注入攻击是黑客对数据库进行攻击的常用手段之一。随着B/S模式应用开发的发展，使用这种模式编写应用程序的程序员也越来越多。但是由于程序员的水平及经验也参差不齐，相当大一部分程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的SQL Injection，即SQL注入。'
              },
              {
                title:'系统漏洞如何提交?',
                answer:'SQL注入攻击是黑客对数据库进行攻击的常用手段之一。随着B/S模式应用开发的发展，使用这种模式编写应用程序的程序员也越来越多。但是由于程序员的水平及经验也参差不齐，相当大一部分程序员在编写代码的时候，没有对用户输入数据的合法性进行判断，使应用程序存在安全隐患。用户可以提交一段数据库查询代码，根据程序返回的结果，获得某些他想得知的数据，这就是所谓的SQL Injection，即SQL注入。'
              }
            ]
          }
      }
  }
</script>
