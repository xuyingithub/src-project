import Vue from 'vue'


Vue.filter('danger',value =>{
  switch (value){
    case 'high':
      return '高危';
      break;
    case 'low':
      return '低危';
      break;
    case 'medium':
      return '中危';
      break;
  }
});
