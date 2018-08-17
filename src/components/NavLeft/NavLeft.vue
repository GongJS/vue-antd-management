<template>
    <div>
        <div class="logo">
            <img src="./../../../static/logo-ant.svg" alt="" />
            <h1>Vue-Antd</h1>
        </div>
            <menu-list :menuList="menuList"></menu-list>
    </div>
</template>
<script>
import MenuList from './MenuList'
import menuList from './MenuConfig'

export default {
  name: 'NavLeft',
  components: {
    MenuList
  },
  data () {
    return {
      menuList: menuList
    }
  }
}
</script>

<style scoped lang="less">
  .logo{
    line-height: 90px;
    padding-left: 20px;
    background-color: #002140;
    img{
      height: 35px;
    }
    h1{
      color: #ffffff;
      font-size: 20px;
      margin:0 0 0 10px;
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
