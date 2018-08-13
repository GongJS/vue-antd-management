<template>
  <a-transfer
    :dataSource="mockData"
    showSearch
    :filterOption="filterOption"
    :targetKeys="targetKeys"
    @change="handleChange"
    :render="item=>item.title"
  >
  </a-transfer>
</template>
<script>
import {Transfer} from 'ant-design-vue'
export default {
  name: 'transfer',
  components: {
    'a-transfer': Transfer
  },
  data () {
    return {
      mockData: [],
      targetKeys: []
    }
  },
  mounted () {
    this.getMock()
  },
  methods: {
    getMock () {
      const targetKeys = []
      const mockData = []
      for (let i = 0; i < 20; i++) {
        const data = {
          key: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1
        }
        if (data.chosen) {
          targetKeys.push(data.key)
        }
        mockData.push(data)
      }
      this.mockData = mockData
      this.targetKeys = targetKeys
    },
    filterOption (inputValue, option) {
      return option.description.indexOf(inputValue) > -1
    },
    handleChange (targetKeys, direction, moveKeys) {
      console.log(targetKeys, direction, moveKeys)
      this.$emit('changeTransfer', targetKeys, direction, moveKeys)
      this.targetKeys = targetKeys
    }
  }
}
</script>
