<template>
  <div class="index-wrap">
     <div class="title">
       <p>欢迎来到Vue-antd管理系统</p>
     </div>
    <img src="../../../static/vue.png" alt="" >
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {

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
    position: relative;
    .title {
      position: absolute;
      text-align: center;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: white;
      text-shadow: 2px 2px 4px #000000;
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
