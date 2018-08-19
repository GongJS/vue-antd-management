<template>
  <div class="index-wrap">
     <div class="title">
       <p>欢迎使用Vue-antd管理系统</p>
       <p style="font-size: 30px; color:#f3b7b7;">Author: redell</p>
       <p style="font-size: 30px;"><a style="color:#f3b7b7;" href="https://github.com/GongJS/vue-antd-management">Github: GongJS</a></p>
     </div>
     <canvas-nest></canvas-nest>
  </div>
</template>
<script>
import CanvasNest from '@/components/CanvasNest/CanvasNest'
export default {
  name: 'Index',
  components: {
    'canvas-nest': CanvasNest
  },
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
    font-size: 20px;
    position: relative;
    .title {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      width:500px;
      height:200px;
      margin-left: -250px;
      margin-top: -100px;
      color: white;
      text-shadow: 2px 2px 4px #000000;
      font-size: 32px;
      z-index: 2;
    }
  }
</style>
