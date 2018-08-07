<template>
  <div>
    <a-card title="Tab页签" class="card-wrap">
      <a-tabs defaultActiveKey="1" onChange={this.handleCallback}>
        <tab-pane tab="Tab 1" key="1">欢迎学习React课程</tab-pane>
        <tab-pane tab="Tab 2" key="2" disabled>欢迎学习React课程</tab-pane>
        <tab-pane tab="Tab 3" key="3">React是一个非常受欢迎的MV*框架</tab-pane>
      </a-tabs>
    </a-card>
    <a-card title="Tab带图的页签" class="card-wrap">
      <a-tabs defaultActiveKey="2">
        <tab-pane key="1">
          <span slot="tab">
            <a-icon type="plus" />
            Tab 1
          </span>
            Tab 1
        </tab-pane>
        <tab-pane key="2">
          <span slot="tab">
            <a-icon type="edit" />
            Tab 2
          </span>
            Tab 2
        </tab-pane>
        <tab-pane key="3">
          <span slot="tab">
            <a-icon type="delete" />
            Tab 3
          </span>
          Tab 3
        </tab-pane>
      </a-tabs>
    </a-card>
    <a-card title="Tab带图的页签" class="card-wrap">
      <a-tabs
        @change="onChange"
        :activeKey="activeKey"
        type="editable-card"
        @edit="onEdit"
      >
        <tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
          {{pane.content}}
        </tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>
<script>
import {Button, Card, message, Tabs, Icon} from 'ant-design-vue'
const {TabPane} = Tabs
export default {
  name: 'Tab',
  components: {
    'a-card': Card,
    'a-button': Button,
    'a-tabs': Tabs,
    'tab-pane': TabPane,
    'a-icon': Icon
  },
  data () {
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1', closable: false },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' }
    ]
    return {
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0
    }
  },
  methods: {
    handleCallback (key) {
      message.info('Hi,您选择了页签：' + key)
    },
    onChange (activeKey) {
      this.activeKey = activeKey
    },
    onEdit (targetKey, action) {
      this[action](targetKey)
    },
    add () {
      const panes = this.panes
      const activeKey = `newTab${this.newTabIndex++}`
      panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey })
      this.panes = panes
      this.activeKey = activeKey
    },
    remove (targetKey) {
      let activeKey = this.activeKey
      let lastIndex
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1
        }
      })
      const panes = this.panes.filter(pane => pane.key !== targetKey)
      if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key
      }
      this.panes = panes
      this.activeKey = activeKey
    }
  }
}
</script>

<style scoped lang="less">
  @import './ui.less';
</style>
