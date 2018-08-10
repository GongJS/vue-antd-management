<template>
  <div>
    <a-order-form></a-order-form>
    <a-card style="margin-top:10px">
      <a-button @click="openOrderDetail">订单详情</a-button>
      <a-button @click="handleConfirm">结束订单</a-button>
    </a-card>
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
    <a-card>
      <a-order-end-form
        :visible="visible"
        :orderInfo="selectedItem"
        v-on:hideOpenOrder="hideOpenOrder"
        v-on:handleFinishOrder="handleFinishOrder">
      </a-order-end-form>
    </a-card>
  </div>
</template>
<script>

import {Card, Table, Modal, Button, Pagination, message} from 'ant-design-vue'
import OrderForm from './orderForm'
import OrderEndForm from './orderEndForm'
import axios from './../../axios/index'
import dataSource from './data'

export default {
  name: 'BasicTable',
  components: {
    'a-button': Button,
    'a-table': Table,
    'a-modal': Modal,
    'a-card': Card,
    'a-pagination': Pagination,
    'a-order-form': OrderForm,
    'a-order-end-form': OrderEndForm
  },
  data () {
    return {
      dataSource: [],
      selectedRows: [],
      selectedRowKeys: [],
      selectedItem: null,
      pagination: {},
      columns: dataSource.columns,
      params: {
        page: 1
      },
      visible: false,
      orderInfo: {
        bike_sn: '77'
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
          _this.selectedItem = record
        }
      }
    }
  },
  methods: {
    // 动态获取mock数据
    request () {
      axios.ajax({
        url: '/order/list',
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
    openOrderDetail () {
      let item = this.selectedItem
      if (!item) {
        Modal.info({
          title: '信息',
          content: '请先选择一条订单'
        })
        return
      }
      window.open(`/#/common/order/detail/${item.id}`, '_blank')
    },
    // 订单结束确认
    handleConfirm () {
      let item = this.selectedItem
      if (!item) {
        Modal.info({
          title: '信息',
          content: '请选择一条订单进行结束'
        })
        return
      }
      axios.ajax({
        url: '/order/ebike_info',
        data: {
          params: {
            orderId: item.id
          }
        }
      }).then((res) => {
        // eslint-disable-next-line
        if (res.code == 0) {
          this.selectedItem = res.result
          this.visible = true
        }
      })
    },
    // 结束订单
    handleFinishOrder () {
      let item = this.selectedItem
      axios.ajax({
        url: '/order/finish_order',
        data: {
          params: {
            orderId: item.id
          }
        }
      }).then((res) => {
        // eslint-disable-next-line
        if (res.code == 0) {
          message.success('订单结束成功')
          this.visible = false
          this.request()
        }
      })
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
