<template>
  <div>
    <a-card>
      <a-table
        bordered
        :columns="columns"
        :dataSource="dataSource"
        :rowSelection="rowSelection"
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
  name: 'userTable',
  props: ['requestList'],
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
      },
      requestListFlag: this.requestList
    }
  },
  watch: {
    requestList () {
      this.request()
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
          console.log(33, record)
          this.$emit('receiveTable', record)
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
        url: '/table/list1',
        data: {
          params: {
            page: this.params.page
          }
        }
      }).then((res) => {
        let list = res.result.list.map((item, index) => {
          item.key = index
          return item
        })
        this.dataSource = list
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
    this.request()
  }
}
</script>

<style scoped lang="less">
</style>
