<template>
  <div class="footer">
    <div>版权所有：Redell</div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../style/default.less';
  .footer{
    height: 100px;
    padding-top: 30px;
    color: @colorJ;
    text-align: center;
    font-size: 13.5px;
  }
</style>
