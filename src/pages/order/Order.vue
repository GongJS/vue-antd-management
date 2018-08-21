<template>
  <div>
    <a-order-form v-on:searchCityData="searchCityData"></a-order-form>
    <a-card style="margin-top:10px">
      <a-button type="primary" @click="openOrderDetail">订单详情</a-button>
      <a-button type="primary" @click="handleConfirm">结束订单</a-button>
    </a-card>
    <a-order-table :searchParams="searchParams" v-on:selecteRecord="selecteRecord"/>
    <a-card>
      <a-order-end-form
        :visible="visible"
        :orderInfo="orderInfo"
        v-on:hideOpenOrder="hideOpenOrder"
        v-on:handleFinishOrder="handleFinishOrder">
      </a-order-end-form>
    </a-card>
  </div>
</template>
<script>

import {Card, Table, Modal, Button, Pagination, message} from 'ant-design-vue'
import OrderForm from './OrderForm'
import OrderEndForm from './OrderEndForm'
import Ordertable from './OrderTable'
import axios from '@/axios/'

export default {
  name: 'order',
  components: {
    'a-button': Button,
    'a-table': Table,
    'a-modal': Modal,
    'a-card': Card,
    'a-pagination': Pagination,
    'a-order-form': OrderForm,
    'a-order-end-form': OrderEndForm,
    'a-order-table': Ordertable
  },
  data () {
    return {
      selectedItem: null,
      pagination: {},
      visible: false,
      orderInfo: {},
      searchParams: {}
    }
  },
  methods: {
    searchCityData (data) {
      this.searchParams = data
    },
    selecteRecord (data) {
      this.orderInfo = data
    },
    openOrderDetail () {
      let item = this.orderInfo
      if (!item.order_sn) {
        Modal.info({
          title: '信息',
          content: '请先选择一条订单'
        })
        return
      }
      window.open(`/#/common/order/detail/${item.order_sn}`, '_blank')
    },
    // 订单结束确认
    handleConfirm () {
      let item = this.orderInfo
      if (!item.order_sn) {
        Modal.info({
          title: '信息',
          content: '请选择一条订单进行结束'
        })
        return
      }
      if (item.status === '结束行程') {
        Modal.info({
          title: '信息',
          content: '该订单已结束'
        })
        return
      }
      this.visible = true
    },
    // 结束订单
    async handleFinishOrder () {
      let self = this.$http
      let item = this.orderInfo
      let options = {
        url: '/api/updateOrderTable',
        method: 'post'
      }
      let params = {
        status: '结束行程',
        order_sn: item.order_sn
      }
      const result = await axios.getData(self, options, params)
      if (result.length) {
        // 重新获取更新状态后到列表数据
        this.searchParams = {
          status: 'update'
        }
      }
      this.visible = false
      message.info('订单结束成功')
    },
    hideOpenOrder () {
      this.visible = false
    }
  }
}
</script>

<style scoped lang="less">
</style>
