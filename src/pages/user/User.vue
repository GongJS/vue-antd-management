<template>
  <div>
    <a-user-login ></a-user-login>
    <a-card style="margin-top:10px;margin-bottom: -1px;">
      <a-button type="primary" icon="plus" @click="handleOperator('create')">创建员工</a-button>
      <a-button icon="edit" @click="handleOperator('edit')">编辑员工</a-button>
      <a-button @click="handleOperator('detail')">员工详情</a-button>
      <a-button type="danger" icon="delete" @click="handleOperator('delete')">删除员工</a-button>
    </a-card>
      <a-user-table v-on:receiveTable="receiveTable" :requestList="requestList"></a-user-table>
    <a-user-from
      :visible="visible"
      :userInfo="userInfo"
      :requestList="requestList"
      :title="title"
      v-on:hideForm="hideForm"
    >
    </a-user-from>
  </div>
</template>

<script>
import { Button, Card, Modal } from 'ant-design-vue'
import axios from '@/axios/'
import UserLogin from './UserLoginForm'
import UserTable from './UserTable'
import UserForm from './UserForm'

export default {
  name: 'User',
  components: {
    'a-user-login': UserLogin,
    'a-button': Button,
    'a-card': Card,
    'a-user-table': UserTable,
    'a-user-from': UserForm
  },
  data () {
    return {
      visible: false,
      userInfo: {},
      selectItem: {},
      title: '',
      requestList: false
    }
  },
  methods: {
    // 操作员工
    handleOperator (type) {
      let self = this.$http
      let _this = this
      let deleteId
      if (type === 'create') {
        this.title = '创建员工'
        this.visible = true
        this.userInfo = null
      } else if (type === 'edit' || type === 'detail') {
        if (!this.selectItem.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        this.title = (type === 'edit' ? '编辑用户' : '用户详情')
        this.visible = true
        deleteId = this.selectItem.id
      } else if (type === 'delete') {
        if (!this.selectItem.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        Modal.confirm({
          content: '确定要删除此用户吗？',
          onOk: async () => {
            let options = {
              url: '/api/deletePersonnelTable',
              method: 'post'
            }
            let params = {
              id: deleteId
            }
            const result = await axios.getData(self, options, params)
            if (result === '删除成功') {
            // 通知UserTable更新数据
              _this.requestList = !_this.requestList
            }
          }
        })
      }
    },
    hideForm (data) {
      this.visible = false
      if (data === 'update') {
        // 通知UserTable更新数据
        this.requestList = !this.requestList
      }
    },
    receiveTable (data) {
      console.log(11)
      this.userInfo = data
      this.selectItem = data
    }
  }
}
</script>

<style lang="less" scoped>

</style>
