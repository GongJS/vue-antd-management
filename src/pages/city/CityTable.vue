<template>
  <div>
    <a-card>
      <a-table
        bordered
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
import columns from './data'

export default {
  name: 'cityTable',
  props: ['searchParams'],
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
      pagination: {},
      columns: columns,
      params: {
        page: 1,
        city_id: '',
        mode: '',
        op_mode: '',
        auth_status: ''
      }
    }
  },
  watch: {
    searchParams: function () {
      let _this = this
      axios.requestList(_this, '/open_city', this.searchParams, true)
    }
  },
  methods: {
    // 动态获取mock数据
    request () {
      let _this = this
      axios.requestList(_this, '/open_city', this.params, true)
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
