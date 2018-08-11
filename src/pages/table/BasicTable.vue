<template>
  <div>
    <a-card title="基础表格">
      <a-table
        bordered
        :columns="columns"
        :dataSource="dataSource"
        :pagination=false
      />
    </a-card>
    <a-card title="动态数据渲染表格-Mock" style="margin:10px 0">
    <a-table
      bordered
      :columns="columns"
      :dataSource= "dataSource2"
      :pagination=false
    />
    </a-card>
    <a-card title="Mock-单选" style="margin: 10px 0">
    <a-table
      bordered
      :columns="columns"
      :dataSource="dataSource2"
      :pagination=false
      :rowSelection="rowSelection"
    />
    </a-card>
    <a-card title="Mock-删除" style="margin:10px 0">
    <div style="margin-bottom:10px">
      <a-button @click="handleDelete">删除</a-button>
    </div>
    <a-table
      bordered
      :rowSelection="rowCheckSelection"
      :columns="columns"
      :dataSource="dataSource2"
      :pagination=false
    />
    </a-card>
    <a-card title="Mock-表格分页" style="margin:10px 0">
    <a-table
      bordered
      :columns=columns
      :dataSource="dataSource2"
      :pagination=false
    />
      <template>
        <a-pagination showQuickJumper :defaultCurrent="params.page" :total="500" @change="onChangePage" style="float:right;margin:10px -9px 0 0;"/>
      </template>
    </a-card>
  </div>
  </template>
<script>
import {Card, Table, Modal, Button, message, Pagination} from 'ant-design-vue'
import axios from './../../axios/index'
import dataSource from './data'

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
      params: {
        page: 1
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
    // 动态获取mock数据
    request () {
      axios.ajax({
        url: '/table/list',
        data: {
          params: {
            page: this.params.page
          }
        }
      }).then((res) => {
        if (res.code === 0) {
          res.result.list.map((item, index) => {
            item.key = index
          })
          this.dataSource2 = res.result.list
          this.selectedRowKeys = []
          this.selectedRows = null
        }
      })
    },
    handleDelete () {
      let rows = this.selectedRows
      let ids = []
      rows.map((item) => {
        ids.push(item.id)
      })
      Modal.confirm({
        title: '删除提示',
        content: `您确定要删除这些数据吗？${ids.join(',')}`,
        onOk: () => {
          message.success('删除成功')
          this.request()
        }
      })
    },
    onChangePage (pageNumber) {
      this.params.page = pageNumber
      this.request()
    }
  },
  mounted () {
    const data = dataSource.data
    data.map((item, index) => {
      item.key = index
    })
    this.dataSource = data
    this.request()
  }
}
</script>

<style scoped lang="less">
</style>
