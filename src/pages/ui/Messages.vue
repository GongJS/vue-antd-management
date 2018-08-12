<template>
  <div>
    <a-card title="全局提示框" className="card-wrap">
      <a-button type="primary" @click="showMessage('success')">Success</a-button>
      <a-button type="primary" @click="showMessage('info')">Info</a-button>
      <a-button type="primary" @click="showMessage('warning')">Warning</a-button>
      <a-button type="primary" @click="showMessage('error')">Error</a-button>
      <a-button type="primary" @click="showMessage('loading')">Loading</a-button>
    </a-card>
  </div>
</template>
<script>
import {Button, Card, message} from 'ant-design-vue'
export default {
  name: 'Message',
  components: {
    'a-card': Card,
    'a-button': Button
  },
  methods: {
    showMessage (type) {
      message[type]('恭喜你，React课程晋级成功')
    }
  }
}
</script>

<style scoped lang="less">
  @import './ui.less';
</style>
