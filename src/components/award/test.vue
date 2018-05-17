<template>
    <div class="container">
      <div v-for="(arr,index) in arrs" :key="index">
        {{arr.time}}
      </div>
    </div>
</template>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .container{
    width: 100px;
    height: 50px;
    margin: 300px auto;
  }
</style>
<script>
export default{
  name:'test',
  data(){
    return {
      timer :[],
      arrs:[
        {
          time:'00:00:07'
        },
        {
          time:'00:00:10'
        },
        {
          time:'00:00:15'
        },
        {
          time:'23:33:23'
        }
      ]
    }
  },
  created(){
//    this.countDown(this.arrs[0].time);
    this.changeTime();
  },
  computed:{

  },
  methods:{
    changeTime(){
      this.arrs.forEach((v,i) => {
        var arr = v.time.split(':');
        var h = arr[0];
        var m = arr[1];
        var s = arr[2];
        var seconds = h*3600+m*60+s*1;
        this.timer[i] =setInterval(() => {
          if(seconds > 0){
            seconds -- ;
            var h2 = parseInt(seconds/3600);
            h2 = h2/10>=1?h2:'0'+h2;
            var m2 = parseInt((seconds-h2*3600)/60);
            m2 = m2/10>=1?m2:'0'+m2;
            var s2 = seconds%3600%60;
            s2 = s2/10>=1?s2:'0'+s2;
            v.time = h2+':'+m2+':'+s2;
          }else{
            clearInterval(this.timer[i])
          }
        },1000);
      })
    }
  }
}
</script>
