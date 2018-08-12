<template>
  <div>
    <a-card title="折线形图表之一">
      <div id="lineChart" style="height:300px" theme="echartTheme"></div>
    </a-card>
    <a-card title="折线图表之二">
      <div id="lineChartMultiple" style="height:300px" theme="echartTheme"></div>
    </a-card>
    <a-card title="折线图表之三">
      <div id="lineChartMultipleThree" style="height:300px" theme="echartTheme"></div>
    </a-card>
  </div>
</template>

<script>
import {Card} from 'ant-design-vue'
import echartTheme from './echartTheme'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/line')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'lineChart',
  components: {
    'a-card': Card
  },
  methods: {
    drawLineChart () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('lineChart'), 'echartTheme')
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
            type: 'line',
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
    drawLineChartMultiple () {
      let myChart = echarts.init(document.getElementById('lineChartMultiple'), 'echartTheme')
      myChart.setOption({
        title: {
          text: '用户骑行订单'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['OFO订单量', '摩拜订单量']
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
            name: 'OFO订单量',
            type: 'line',
            stack: '总量',
            data: [
              1200,
              3000,
              4500,
              6000,
              8000,
              12000,
              20000
            ]
          },
          {
            name: '摩拜订单量',
            type: 'line',
            stack: '总量',
            data: [
              1000,
              2000,
              5500,
              6000,
              8000,
              10000,
              12000
            ]
          }
        ]
      })
    },
    drawLineChartMultipleThree () {
      let myChart = echarts.init(document.getElementById('lineChartMultipleThree'), 'echartTheme')
      myChart.setOption({
        title: {
          text: '用户骑行订单'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
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
            type: 'line',
            data: [
              1000,
              2000,
              1500,
              3000,
              2000,
              1200,
              800
            ],
            areaStyle: {}
          }
        ]
      })
    }
  },
  mounted () {
    echarts.registerTheme('echartTheme', echartTheme)
    this.drawLineChart()
    this.drawLineChartMultiple()
    this.drawLineChartMultipleThree()
  }
}
</script>

<style lang="less" scoped>

</style>
