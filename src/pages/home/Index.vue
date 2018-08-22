<template>
  <div class="index-wrap">
    <img src="../../../static/vue-index.png" style="width:100%;height:100%;">
     <div class="title">
       <p>欢迎使用Vue-antd管理系统</p>
       <p style="font-size: 30px; color:#a95d5d;">Author: redell</p>
       <p style="font-size: 30px;"><a style="color:#a95d5d;" href="https://github.com/GongJS/vue-antd-management">Github: GongJS</a></p>
     </div>
  </div>
</template>
<script>
import CanvasNest from 'canvas-nest.js'
export default {
  name: 'Index',
  components: {
    'canvas-nest': CanvasNest
  },
  data () {
    return {
      config: {
        color: '255,25,0',
        count: 99
      }
    }
  },
  mounted () {
    const el = document.querySelector('#CanvasNest')
    el.style.display = 'block'
    this.cn = new CanvasNest(el, this.config)
  },
  beforeDestroy () {
    const el = document.querySelector('#CanvasNest')
    el.style.display = 'none'
    this.cn.destroy()
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
