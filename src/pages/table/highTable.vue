<template>
  <div>
    <a-card title="头部固定">
      <a-table
        bordered
        :columns=columns
        :dataSource="dataSource"
        :pagination=false
        :scroll="{y:240}"
      />
    </a-card>
    <a-card title="左侧固定" style="margin:10px 0">
    <a-table
      bordered
      :columns=columns2
      :dataSource="dataSource"
      :pagination=false
      :scroll="{x:1500}"
    />
    </a-card>
    <a-card title="表格排序" style="margin:10px 0">
    <a-table
      bordered
      :columns="columns3"
      :dataSource="dataSource"
      :pagination=false
    />
    </a-card>
    <a-card title="操作按钮" style="margin:10px 0">
    <a-table
      bordered
      :columns="columns4"
      :dataSource="dataSource"
      :pagination=false
    >
      <template slot="operation" slot-scope="text, record">
        <a-button size="small"  type="primary" @click="handleDelete(record)">删除</a-button>
      </template>
      <template slot="interest" slot-scope="text, record">
        <a-badge status="success" text="成功" v-if="text=='1'"/>
        <a-badge status="error" text="报错" v-if="text=='2'"/>
        <a-badge status="default" text="正常" v-if="text=='3'"/>
        <a-badge status="processing" text="进行中" v-if="text=='4'"/>
        <a-badge status="warning" text="警告" v-if="text=='5'"/>
      </template>
    </a-table>
    </a-card>
  </div>
</template>
<script>
import {Card, Table, Modal, Button, message, Badge} from 'ant-design-vue'
import axios from './../../axios/index'
import dataSource from './data'

export default {
  name: 'HighTable',
  components: {
    'a-button': Button,
    'a-table': Table,
    'a-modal': Modal,
    'a-card': Card,
    'a-badge': Badge
  },
  data () {
    return {
      dataSource: [],
      columns: dataSource.highColumns,
      columns2: dataSource.highColumns2,
      sortedInfo: {
        order: 'descend',
        columnKey: 'age'
      },
      params: {
        page: 1
      }
    }
  },
  computed: {
    columns3 () {
      const columns3 = dataSource.highColumns3
      return columns3
    },
    columns4 () {
      const columns4 = dataSource.highColumns4
      return columns4
    }
  },
  methods: {
    // 动态获取mock数据
    request () {
      axios.ajax({
        url: '/table/high/list',
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
          this.dataSource = res.result.list
        }
      })
    },
    handleDelete (record) {
      Modal.confirm({
        title: '确认',
        content: '您确认要删除此条数据吗？',
        onOk: () => {
          message.success('删除成功')
          this.request()
        }
      })
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
