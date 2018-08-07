<template>
  <div>
    <a-row class="container">
      <a-col :span="4" class="nav-left">
        <NavLeft/>
      </a-col>
      <a-col :span="20" class="main">
        <Header/>
        <a-row class="content">
          <router-view></router-view>
        </a-row>
        <Footer/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import NavLeft from './../../components/NavLeft/NavLeft'
import Footer from './../../components/Footer/Footer'
import Header from './../../components/Header/Header'
import {Row, Col} from 'ant-design-vue'
export default {
  name: 'Home',
  components: {
    NavLeft,
    Footer,
    Header,
    'a-row': Row,
    'a-col': Col
  }
}
</script>

<style lang="less" scoped>
  @import './../../style/default.less';
  .container{
    .nav-left{
      background-color:#001529;
      color: #ffffff;
      height: calc(100vh);
    }
    .main{
      height: calc(100vh);
      background-color: @colorL;
      overflow: auto;
    }
    .content{
      position: relative;
      padding: 20px;
    }
  }
</style>
