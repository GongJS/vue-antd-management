<template>
  <div>
    <a-card title="饼图表之一">
      <div id="pieChart" style="height:300px" theme="echartTheme"></div>
    </a-card>
    <a-card title="饼图表之二">
      <div id="pieChartMultiple" style="height:300px" theme="echartTheme"></div>
    </a-card>
    <a-card title="饼图表之三">
      <div id="pieChartMultipleThree" style="height:300px" theme="echartTheme"></div>
    </a-card>
  </div>
</template>

<script>
import {Card} from 'ant-design-vue'
import echartTheme from './echartTheme'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: 'pieChart',
  components: {
    'a-card': Card
  },
  methods: {
    drawPieChart () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('pieChart'), 'echartTheme')
      myChart.setOption({
        title: {
          text: '用户骑行订单',
          x: 'center'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '订单量',
            type: 'pie',
            radius: '55%',
            center: [
              '50%', '60%'
            ],
            data: [
              {
                value: 1000,
                name: '周一'
              },
              {
                value: 1000,
                name: '周二'
              },
              {
                value: 2000,
                name: '周三'
              },
              {
                value: 1500,
                name: '周四'
              },
              {
                value: 3000,
                name: '周五'
              },
              {
                value: 2000,
                name: '周六'
              },
              {
                value: 1200,
                name: '周日'
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    drawPieChartMultiple () {
      let myChart = echarts.init(document.getElementById('pieChartMultiple'), 'echartTheme')
      myChart.setOption({
        title: {
          text: '用户骑行订单',
          x: 'center'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
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
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '订单量',
            type: 'pie',
            radius: ['50%', '80%'],
            center: [
              '50%', '60%'
            ],
            data: [
              {
                value: 1000,
                name: '周一'
              }, {
                value: 1000,
                name: '周二'
              }, {
                value: 2000,
                name: '周三'
              }, {
                value: 1500,
                name: '周四'
              }, {
                value: 3000,
                name: '周五'
              }, {
                value: 2000,
                name: '周六'
              }, {
                value: 1200,
                name: '周日'
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    drawPieChartMultipleThree () {
      let myChart = echarts.init(document.getElementById('pieChartMultipleThree'), 'echartTheme')
      myChart.setOption({
        title: {
          text: '用户骑行订单',
          x: 'center'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20,
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
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '订单量',
            type: 'pie',
            radius: '55%',
            center: [
              '50%', '50%'
            ],
            data: [
              {
                value: 1000,
                name: '周一'
              }, {
                value: 1000,
                name: '周二'
              }, {
                value: 2000,
                name: '周三'
              }, {
                value: 1500,
                name: '周四'
              }, {
                value: 3000,
                name: '周五'
              }, {
                value: 2000,
                name: '周六'
              }, {
                value: 1200,
                name: '周日'
              }
            ].sort(function (a, b) { return a.value - b.value }),
            roseType: 'radius',
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200
            }
          }
        ]
      })
    }
  },
  mounted () {
    echarts.registerTheme('echartTheme', echartTheme)
    this.drawPieChart()
    this.drawPieChartMultiple()
    this.drawPieChartMultipleThree()
  }
}
</script>

<style lang="less" scoped>

</style>
