<template>
  <div>
    <a-card>
      <a-table
        bordered
        :rowSelection="rowCheckSelection"
        :columns="columns"
        :dataSource="dataSource"
        :pagination=false
      />
      <template>
        <a-pagination showQuickJumper :defaultCurrent="params.page" :total="500" @change="onChangePage" style="float:right;margin:10px -9px 0 0;"/>
      </template>
    </a-card>
  </div>
</template>
<script>
import {Card, Table, Modal, Button, Pagination} from 'ant-design-vue'
import axios from './../../axios/index'
import dataSource from './data'

export default {
  name: 'permissionTable',
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
        type: 'radio',
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
        url: '/role/list',
        data: {
          params: {
            page: this.params.page
          }
        }
      }).then((res) => {
        let list = res.result.item_list.map((item, index) => {
          item.key = index
          return item
        })
        this.dataSource = list
      })
    },
    onChangePage (pageNumber) {
      this.params.page = pageNumber
      this.request()
    }
  },
  mounted () {
    this.request()
  }
}
</script>

<style scoped lang="less">
</style>
