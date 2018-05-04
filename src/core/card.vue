<template>
  <section class="cardBox" :style="boxStyle">
    <el-card shadow="hover" class="elCard" :body-style="paddingStyle">
      <slot></slot>
    </el-card>
  </section>
</template>
<style lang="scss" scoped>
  .elCard{
    height: 100%;
    border: 1px solid #E3E1DD;
  }
</style>
<script>
export default{
  props:{
    boxStyle:{
      type:Object,
      default:{}
    },
    paddingStyle:{
      type:Object,
      default:{padding:'20px'}
    }
  }
}
</script>
