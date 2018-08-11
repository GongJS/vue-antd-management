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
import axios from './../../axios'
import UserLogin from './userLogin'
import UserTable from './userTable'
import UserForm from './userForm'

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
      selectData: {},
      userInfo: {},
      title: '',
      requestList: false
    }
  },
  methods: {
    // 操作员工
    handleOperator (type) {
      this.userInfo = this.selectData
      if (type === 'create') {
        this.title = '创建员工'
        this.visible = true
        this.userInfo = null
      } else if (type === 'edit' || type === 'detail') {
        if (!this.userInfo.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        this.title = (type === 'edit' ? '编辑用户' : '用户详情')
        this.visible = true
      } else if (type === 'delete') {
        if (!this.userInfo.id) {
          Modal.info({
            title: '信息',
            content: '请选择一个用户'
          })
          return
        }
        Modal.confirm({
          content: '确定要删除此用户吗？',
          onOk: () => {
            axios.ajax({
              url: '/user/delete',
              data: {
                params: {
                  id: this.userInfo.id
                }
              }
            }).then((res) => {
              // eslint-disable-next-line
              if (res.code == 0) {
                this.visible = false
                this.requestList = !this.requestList
              }
            })
          }
        })
      }
    },
    hideForm (data) {
      this.visible = false
      if (data === 'update') {
        this.requestList = !this.requestList
      }
    },
    receiveTable (data) {
      this.selectData = data
    }
  }
}
</script>

<style lang="less" scoped>

</style>
