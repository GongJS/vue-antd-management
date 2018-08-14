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

import {Card, Table, Modal, Pagination} from 'ant-design-vue'
import axios from './../../axios/index'
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
      params: {
        city_id: '',
        order_status: '',
        order_time: '',
        page: 1
      },
      orderInfo: {}
    }
  },
  watch: {
    searchParams: function () {
      let _this = this
      axios.requestList(_this, '/order/list', this.searchParams, true)
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
    // 动态获取mock数据
    request () {
      let _this = this
      axios.requestList(_this, '/order/list', this.params, true)
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
