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
        <a-pagination showQuickJumper :defaultCurrent="params.page" :total="total" @change="onChangePage" style="float:right;margin:10px -9px 0 0;"/>
      </template>
    </a-card>
  </div>
</template>
<script>

import {Card, Table, Modal, Pagination} from 'ant-design-vue'
import axios from '@/axios/'
import columns from './data'

export default {
  name: 'orderTable',
  props: ['searchParams'],
  components: {
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
      columns: columns,
      total: null,
      params: {
        page: 1,
        pageSize: 10
      },
      orderInfo: {}
    }
  },
  watch: {
    searchParams: async function () {
      let self = this.$http
      let params
      let options
      // 如果是新建完数据，就从数据库重新获取全部数据(不带参数查询)
      if (this.searchParams.status === 'update') {
        params = this.params
        options = {
          url: '/api/getOrderTable',
          method: 'post'
        }
      } else {
      // 带参数查询
        params = {
          city: this.searchParams.city,
          order_time: this.searchParams.order_time,
          status: this.searchParams.status
        }
        options = {
          url: '/api/searchOrderTable',
          method: 'post'
        }
      }
      const result = await axios.getData(self, options, params)
      result.rows.map((item, index) => {
        item.key = index
      })
      this.total = result.count
      this.dataSource = result.rows
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
          _this.selectedItem = record
          _this.$emit('selecteRecord', record)
        }
      }
    }
  },
  methods: {
    // 动态获取数据
    async request () {
      let self = this.$http
      let options = {
        url: '/api/getOrderTable',
        method: 'post'
      }
      let params = this.params
      const result = await axios.getData(self, options, params)
      result.rows.map((item, index) => {
        item.key = index
      })
      this.total = result.count
      this.dataSource = result.rows
    },
    hideOpenOrder () {
      this.visible = false
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
