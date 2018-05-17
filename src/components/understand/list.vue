<template>
   <article class="understand">
      <section class="container">
        <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane class="pane" label="漏洞奖励" name="first"><loopholeReward></loopholeReward></el-tab-pane>
          <el-tab-pane class="pane" label="用户中心" name="second"><userCenter></userCenter></el-tab-pane>
          <el-tab-pane class="pane" label="联系我们" name="third"><contactUs></contactUs></el-tab-pane>
        </el-tabs>
      </section>
   </article>
</template>
<style lang="scss" scoped>
  .understand{
    height: 100%;
    overflow: hidden;
    background: #F0F4F7;
    .container{
      width: 1200px;
      height: 100%;
      background: #fff;
      margin: 30px auto 200px;
      .tabs{
        padding: 10px 30px 0px;
      }
    }
  }
</style>
<script>
  import loopholeReward from './loopholeReward'
  import userCenter from './userCenter'
  import contactUs from './contactUs'
  import { mapState } from 'vuex'
  export default{
    name:'understand',
    data(){
      return {
        activeName: 'first'
      }
    },
    created(){
      if(this.$route.params['id'] == 'aboutUs'){
        this.activeName = 'third';
      }
    },
    methods: {
      handleClick(tab, event) {
        switch(tab.name){
          case 'first':
            this.$router.push('/homePage/understand/loopholeReward');
            break;
          case 'second':
            this.$router.push('/homePage/understand/userCenter');
            break;
          case 'third':
            this.$router.push('/homePage/understand/aboutUs');
            break;
        }
      }
    },
    components:{
      loopholeReward,
      userCenter,
      contactUs
    },
    computed:{
      ...mapState(['isLogin'])
    }
  }
</script>
