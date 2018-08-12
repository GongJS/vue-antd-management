<template>
<div>
  <a-card title="通知提醒框" class="card-wrap">
    <a-button type="primary" @click="openNotification('success')">Success</a-button>
    <a-button type="primary" @click="openNotification('info')">Info</a-button>
    <a-button type="primary" @click="openNotification('warning')">Warning</a-button>
    <a-button type="primary" @click="openNotification('error')">Error</a-button>
  </a-card>
  <a-card title="通知提醒框" class="card-wrap">
    <a-button type="primary" @click="openNotification('success','topLeft')">Success</a-button>
    <a-button type="primary" @click="openNotification('info','topRight')">Info</a-button>
    <a-button type="primary" @click="openNotification('warning','bottomLeft')">Warning</a-button>
    <a-button type="primary" @click="openNotification('error','bottomRight')">Error</a-button>
  </a-card>
  </div>
  </template>
<script>
import { notification, Card, Button } from 'ant-design-vue'
export default {
  name: 'Notice',
  components: {
    'a-button': Button,
    'a-card': Card
  },
  methods: {
    openNotification (type, direction) {
      if (direction) {
        notification.config({
          placement: direction
        })
      }
      notification[type]({
        message: '发工资了',
        description: '上个月考勤22天，迟到12天，实发工资250，请笑纳'
      })
    }
  }
}
</script>

<style scoped lang="less">
  @import './ui.less';
</style>
