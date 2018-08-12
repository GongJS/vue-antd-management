<template>
  <div>
    <a-card>
      <a-button type="primary" @click="clearEditorContent">清空内容</a-button>
      <a-button type="primary" @click="getRichText">获取HTML文本</a-button>
    </a-card>
    <a-card>
      <vue-editor v-model="content"></vue-editor>
    </a-card>
    <a-modal
      title="富文本"
      :visible="showRichText"
      @cancel="()=>{this.showRichText = false}"
      @ok="()=>{this.showRichText = false}"
      >
      <h3>该功能暂未开通</h3>
    </a-modal>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
import { Card, Button, Modal } from 'ant-design-vue'
export default {
  name: 'rch',
  components: {
    VueEditor,
    'a-card': Card,
    'a-button': Button,
    'a-modal': Modal
  },

  data () {
    return {
      content: '<h1>Vue真好用！</h1>',
      showRichText: false
    }
  },
  methods: {
    clearEditorContent () {
      this.content = ''
    },
    getRichText () {
      this.showRichText = true
    }
  }
}
</script>
