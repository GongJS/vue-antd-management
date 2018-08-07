<template>
  <div>
    <a-card title="基础模态框" class="card-wrap">
      <a-button type="primary" @click="handleOpen('showModal1')">Open</a-button>
      <a-button type="primary" @click="handleOpen('showModal2')">自定义页脚</a-button >
      <a-button type="primary" @click="handleOpen('showModal3')">顶部20px弹框</a-button >
      <a-button type="primary" @click="handleOpen('showModal4')">水平垂直居中</a-button >
    </a-card>
    <a-card title="信息确认框" class="card-wrap">
      <a-button type="primary" @click="handleConfirm('confirm')">Confirm</a-button>
      <a-button type="primary" @click="handleConfirm('info')">Info</a-button>
      <a-button type="primary" @click="handleConfirm('success')">Success</a-button>
      <a-button type="primary" @click="handleConfirm('warning')">Warning</a-button>
    </a-card>
    <a-modal
      title="Vue-Antd"
      :visible="showModal1"
      @cancel = "hideModal('showModal1')"
      @ok="hideModal('showModal1')"
      >
      <p>欢迎来到Vue-Antd管理系统</p>
    </a-modal>
    <a-modal
      title="Vue-Antd"
      :visible="showModal2"
      okText="好的"
      cancelText="算了"
      @cancel = "hideModal('showModal2')"
      @ok="hideModal('showModal2')"
    >
      <p>欢迎来到Vue-Antd管理系统</p>
    </a-modal>
    <a-modal
      title="Vue-Antd"
      style="top: 20px;"
      :visible="showModal3"
      @cancel = "hideModal('showModal3')"
      @ok="hideModal('showModal3')"
    >
      <p>欢迎来到Vue-Antd管理系统</p>
    </a-modal>
    <a-modal
      title="Vue-Antd"
      :visible="showModal4"
      wrapClassName="vertical-center-modal"
      @cancel = "hideModal('showModal4')"
      @ok="hideModal('showModal4')"
    >
      <p>欢迎来到Vue-Antd管理系统</p>
    </a-modal>
  </div>
</template>
<script>
import { Modal, Card, Button } from 'ant-design-vue'
export default {
  name: 'Modals',
  components: {
    'a-button': Button,
    'a-card': Card,
    'a-modal': Modal
  },
  data () {
    return {
      showModal1: false,
      showModal2: false,
      showModal3: false,
      showModal4: false
    }
  },
  methods: {
    handleOpen (type) {
      this[type] = true
    },
    hideModal (type) {
      this[type] = false
    },
    handleConfirm (type) {
      Modal[type]({
        title: '确认？',
        content: '你确定你学会了Vue了吗？',
        onOk () {
        },
        onCancel () {
        }
      })
    }
  }
}
</script>

<style lang="less">
  @import './ui.less';
</style>
