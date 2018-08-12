<template>
  <div>
    <a-card title="柱形图表之一">
      <div id="barChart" style="height:300px" theme="echartTheme"></div>
    </a-card>
    <a-card title="柱形图表之二">
      <div id="barChartMultiple" style="height:300px" theme="echartTheme"></div>
    </a-card>
  </div>
</template>

<script>
import {Card} from 'ant-design-vue'
import echartTheme from './echartTheme'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'barChart',
  components: {
    'a-card': Card
  },
  methods: {
    drawBarChart () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('barChart'), 'echartTheme')
      myChart.setOption({
        title: {
          text: '用户骑行订单'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: [
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周日'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '订单量',
            type: 'bar',
            data: [
              1000,
              2000,
              1500,
              3000,
              2000,
              1200,
              800
            ]
          }
        ]
      })
    },
    drawBarChartMultiple () {
      let myChart = echarts.init(document.getElementById('barChartMultiple'), 'echartTheme')
      myChart.setOption({
        title: {
          text: '用户骑行订单'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['OFO', '摩拜', '小蓝']
        },
        xAxis: {
          data: [
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周日'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'OFO',
            type: 'bar',
            data: [
              2000,
              3000,
              5500,
              7000,
              8000,
              12000,
              20000
            ]
          },
          {
            name: '摩拜',
            type: 'bar',
            data: [
              1500,
              3000,
              4500,
              6000,
              8000,
              10000,
              15000
            ]
          },
          {
            name: '小蓝',
            type: 'bar',
            data: [
              1000,
              2000,
              2500,
              4000,
              6000,
              7000,
              8000
            ]
          }
        ]
      })
    }
  },
  mounted () {
    echarts.registerTheme('echartTheme', echartTheme)
    this.drawBarChart()
    this.drawBarChartMultiple()
  }
}
</script>

<style lang="less" scoped>

</style>
