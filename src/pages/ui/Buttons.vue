<template>
  <div>
    <a-card title="基础按钮" class="card-wrap">
      <a-button type="primary">Vue-Antd</a-button>
      <a-button>Vue-Antd</a-button>
      <a-button type="dashed">Vue-Antd</a-button>
      <a-button type="danger">Vue-Antd</a-button>
      <a-button disabled>Vue-Antd</a-button>
    </a-card>
    <a-card title="图形按钮" class="card-wrap">
      <a-button icon="plus">创建</a-button>
      <a-button icon="edit">编辑</a-button>
      <a-button icon="delete">删除</a-button>
      <a-button shape="circle" icon="search"></a-button>
      <a-button type="primary" icon="search">搜索</a-button>
      <a-button type="primary" icon="download">下载</a-button>
    </a-card>
    <a-card title="Loading按钮" class="card-wrap">
      <a-button type="primary" :loading="loading">确定</a-button>
      <a-button type="primary" shape="circle" :loading="loading"></a-button>
      <a-button :loading="loading" >点击加载</a-button>
      <a-button shape="circle" :loading="loading"></a-button>
      <a-button type="primary" @click="handleCloseLoading">关闭</a-button>
    </a-card>
    <a-card title="按钮组" class="card-wrap">
      <a-button-group>
        <a-button type="primary" icon="left" style="margin-right: -10px">返回</a-button>
        <a-button type="primary" icon="right">前进</a-button>
      </a-button-group>
    </a-card>
    <a-card title="按钮尺寸" class="card-wrap">
      <a-radio-group defaultValue="size" @change="handleChange">
        <a-radio value="small">小</a-radio>
        <a-radio value="default">中</a-radio>
        <a-radio value="large">大</a-radio>
      </a-radio-group>
      <a-button type="primary" :size="size">Vue-Antd</a-button>
      <a-button :size="size">Vue-Antd</a-button>
      <a-button type="dashed" :size="size">Vue-Antd</a-button>
      <a-button type="danger" :size="size">Vue-Antd</a-button>
    </a-card>
  </div>
</template>
<script>
import {Button, Card, Radio} from 'ant-design-vue'
const RadioGroup = Radio.Group
const ButtonGroup = Button.Group
export default {
  name: 'Button',
  components: {
    'a-button': Button,
    'a-button-group': ButtonGroup,
    'a-card': Card,
    'a-radio': Radio,
    'a-radio-group': RadioGroup
  },
  data () {
    return {
      loading: true,
      size: 'default'
    }
  },
  methods: {
    handleCloseLoading () {
      this.loading = !this.loading
    },
    handleChange (e) {
      this.size = e.target.value
    }
  }
}
</script>

<style scoped lang="less">
  @import 'ui.less';
</style>
