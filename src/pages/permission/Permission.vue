<template>
  <div>
    <a-card style="margin-top:10px">
      <a-button type="primary" @click="handleCreatePermission">创建角色</a-button>
      <a-button type="primary" @click="handleSetPermission">设置权限</a-button>
      <a-button type="primary" @click="handleAutherPermission">用户授权</a-button>
    </a-card>
    <a-card>
      <a-permission-table v-on:selecteRecord="selecteRecord"></a-permission-table>
    </a-card>
    <a-create-permission-form
      :visibleCreatePermissionForm="visibleCreatePermissionForm"
      v-on:hideForm="hideForm"
    >
    </a-create-permission-form>
    <a-set-permission-form
      :visibleSetPermissionForm="visibleSetPermissionForm"
      :orderInfo="orderInfo"
      v-on:hideForm="hideForm"
    >
    </a-set-permission-form>
    <a-auther-permission-form
      :visibleAutherPermissionForm="visibleAutherPermissionForm"
      v-on:hideForm="hideForm"
    >
    </a-auther-permission-form>
  </div>
</template>
<script>

import {Card, Table, Modal, Button} from 'ant-design-vue'
import PermissionTable from './PermissionTable'
import CreatePermissionForm from './CreatPermissonForm/CreatPermissonForm'
import SetPermissionForm from './SetPermissionForm/SetPermissionForm'
import AutherPermissionForm from './AutherPermissionForm/AutherPermissionForm'
export default {
  name: 'permission',
  components: {
    'a-button': Button,
    'a-table': Table,
    'a-modal': Modal,
    'a-card': Card,
    'a-permission-table': PermissionTable,
    'a-create-permission-form': CreatePermissionForm,
    'a-set-permission-form': SetPermissionForm,
    'a-auther-permission-form': AutherPermissionForm
  },
  data () {
    return {
      visible: false,
      visibleCreatePermissionForm: false,
      visibleSetPermissionForm: false,
      visibleAutherPermissionForm: false,
      orderInfo: {}
    }
  },
  computed: {

  },
  methods: {
    selecteRecord (data) {
      this.orderInfo = data
    },
    handleCreatePermission () {
      this.visibleCreatePermissionForm = true
    },
    handleSetPermission () {
      if (!this.orderInfo.id) {
        Modal.info({
          title: '信息',
          content: '请先选择一个用户'
        })
        return
      }
      this.visibleSetPermissionForm = true
    },
    handleAutherPermission () {
      this.visibleAutherPermissionForm = true
    },
    hideForm () {
      console.log(666)
      this.visibleCreatePermissionForm = false
      this.visibleSetPermissionForm = false
      this.visibleAutherPermissionForm = false
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
</style>
