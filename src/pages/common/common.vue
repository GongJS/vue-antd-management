<template>
  <div>
    <a-row class="simple-page">
      <Header type="common" />
    </a-row>
    <a-row class="content">
      <router-view/>
    </a-row>
  </div>
</template>

<script>
import Header from './../../components/Header/Header'
import {Row} from 'ant-design-vue'
export default {
  name: 'Common',
  components: {
    Header,
    'a-row': Row
  }
}
</script>

<style lang="less" scoped>
  @import './../../style/common.less';
</style>
