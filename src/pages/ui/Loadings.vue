<template>
  <div>
    <a-card title="Spin用法" class="card-wrap">
      <a-spin size="small"/>
      <a-spin style="margin:0 10px"/>
      <a-spin size="large"/>
      <a-spin style="margin-left: 10px" :spinning=true>
         <span slot="indicator">
            <a-icon type="loading" style="font-size:24px"/>
          </span>
      </a-spin>
    </a-card>
    <a-card title="内容遮罩" class="card-wrap">
      <a-alert
        message="Vue"
        description="欢迎来到Vue-Antd后台管理系统"
        type="info"
        style="marginBottom: 10"
      />
      <a-spin>
        <a-alert
          message="Vue"
          description="欢迎来到Vue-Antd后台管理系统"
          type="warning"
          style="marginBottom: 10"
        />
      </a-spin>
      <a-spin tip="加载中...">
        <a-alert
          message="Vue"
          description="欢迎来到Vue-Antd后台管理系统"
          type="warning"
          style="marginBottom: 10"
        />
      </a-spin>
      <a-spin >
        <a-alert
          message="Vue"
          description="欢迎来到Vue-Antd后台管理系统"
          type="warning"
        />
        <span slot="indicator">
            <a-icon type="loading" style="font-size:24px"/>
          </span>
      </a-spin>
    </a-card>
  </div>
</template>
<script>
import {Button, Card, Spin, Icon, Alert} from 'ant-design-vue'

export default {
  name: 'Loading',
  components: {
    'a-card': Card,
    'a-button': Button,
    'a-spin': Spin,
    'a-alert': Alert,
    'a-icon': Icon
  }
}
</script>

<style scoped lang="less">
  @import './ui.less';
</style>
