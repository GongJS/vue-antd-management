<template>
  <div class="index-wrap">
    欢迎来到Vue-Antd后台管理系统化
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../style/default.less';
  .index-wrap{
    background-color: @colorM;
    height: calc(~"100vh - 240px");
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
</style>
