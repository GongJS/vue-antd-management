<template>
  <div>
    <a-card title="基础表格">
      <a-table bordered :columns="columns" :dataSource="dataSource" :pagination=false />
    </a-card>
    <a-card title="动态数据渲染表格" style="margin:10px 0">
      <a-table bordered :columns="columns" :dataSource="dataSource2" :pagination=false />
    </a-card>
    <a-card title="单选" style="margin: 10px 0">
      <a-table bordered :columns="columns" :dataSource="dataSource2" :pagination=false :rowSelection="rowSelection" />
    </a-card>
    <a-card title="删除" style="margin:10px 0">
      <div style="margin-bottom:10px">
        <a-button @click="handleDelete">删除</a-button>
      </div>
      <a-table bordered :rowSelection="rowCheckSelection" :columns="columns" :dataSource="dataSource2" :pagination=false />
    </a-card>
    <a-card title="表格分页" style="margin:10px 0">
      <a-table bordered :columns=columns :dataSource="dataSource2" :pagination=false />
      <template>
        <a-pagination showQuickJumper :defaultCurrent="params.page" :total="total" @change="onChangePage" style="float:right;margin:10px -9px 0 0;"
        />
      </template>
    </a-card>
  </div>
</template>
<script>
import { Card, Table, Modal, Button, message, Pagination } from 'ant-design-vue'
import dataSource from './data'
import axios from '@/axios/'

export default {
  name: 'BasicTable',
  components: {
    'a-button': Button,
    'a-table': Table,
    'a-modal': Modal,
    'a-card': Card,
    'a-pagination': Pagination
  },
  data () {
    return {
      dataSource: [],
      dataSource2: [],
      selectedRows: [],
      selectedRowKeys: [],
      pagination: {},
      columns: dataSource.columns,
      total: null,
      params: {
        page: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    rowSelection () {
      let _this = this
      return {
        type: 'radio',
        onChange: (selectedRowKeys, selectedRows) => {
          _this.selectedRowKeys = selectedRowKeys
          _this.selectedRows = selectedRows
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        },
        onSelect: (record, selected, selectedRows, nativeEvent) => {
          Modal.info({
            title: '信息',
            content: `用户名：${record.userName},用户爱好：${record.interest}`
          })
        }
      }
    },
    rowCheckSelection () {
      let _this = this
      return {
        type: 'checkbox',
        onChange: (selectedRowKeys, selectedRows) => {
          _this.selectedRowKeys = selectedRowKeys
          _this.selectedRows = selectedRows
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
        },
        onSelect: (record, selected, selectedRows, nativeEvent) => {
        }
      }
    }
  },
  methods: {
    // 动态获取数据
    async request () {
      let self = this.$http
      let options = {
        url: '/api/getBasictable',
        method: 'post'
      }
      let params = this.params
      const result = await axios.getData(self, options, params)
      result.rows.map((item, index) => {
        item.key = index
      })
      this.total = result.count
      this.dataSource2 = result.rows
    },
    handleDelete () {
      let _this = this
      let rows = this.selectedRows
      let ids = []
      rows.map((item) => {
        ids.push(item.id)
      })
      Modal.confirm({
        title: '删除提示',
        content: `您确定要删除这些数据吗？${ids.join(',')}`,
        onOk: async () => {
          console.log('ids', ids)
          let self = _this.$http
          let options = {
            url: '/api/deleteBasictable',
            method: 'post'
          }
          let params = {
            id: ids
          }
          const result = await axios.getData(self, options, params)
          if (result === '删除成功') {
            message.info('删除成功')
          } else {
            message.info('删除失败')
          }
        }
      })
    },
    onChangePage (pageNumber) {
      this.params.page = pageNumber
      this.request()
    }
  },
  mounted () {
    // 获取静态数据
    const data = dataSource.data
    data.map((item, index) => {
      item.key = index
    })
    this.dataSource = data
    // 从后台获取动态数据
    this.request()
  }
}
</script>

<style scoped lang="less">
</style>
