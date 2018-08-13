<template>
  <a-tree
    checkable
    @expand="onExpand"
    :expandedKeys="expandedKeys"
    :autoExpandParent="autoExpandParent"
    v-model="checkedKeys"
    @select="onSelect"
    :selectedKeys="selectedKeys"
    :treeNodes="treeData"
  />
</template>
<script>
import {Tree} from 'ant-design-vue'
import treeData from '@/components/NavLeft/MenuConfig'
const TreeNode = Tree.TreeNode
export default {
  name: 'treeNode',
  components: {
    'a-tree': Tree,
    'a-tree-node': TreeNode
  },
  data () {
    return {
      expandedKeys: ['/home', '/ui'],
      autoExpandParent: true,
      checkedKeys: ['/home', '/ui'],
      selectedKeys: [],
      treeData
    }
  },
  watch: {
    checkedKeys (val) {
      console.log('onCheck', val)
      this.$emit('changeTreeNode', val)
    }
  },
  methods: {
    onExpand (expandedKeys) {
      console.log('onExpand', arguments)
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys
      this.autoExpandParent = false
    },
    onSelect (selectedKeys, info) {
      console.log('onSelect', info)
      this.selectedKeys = selectedKeys
    }
  }
}

</script>
