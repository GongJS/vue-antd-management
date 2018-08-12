<template>
  <div>
    <a-bike-form></a-bike-form>
    <a-card>
      <div>共{{total_count}}辆车</div>
      <div id="container" style="height:500px"></div>
    </a-card>
  </div>
</template>
<script>

import {Card, Button} from 'ant-design-vue'
import BikeForm from './BikeForm'
import axios from './../../axios/index'

export default {
  name: 'bikeMap',
  components: {
    'a-button': Button,
    'a-card': Card,
    'a-bike-form': BikeForm
  },
  data () {
    return {
      params: {
        page: 1
      },
      visible: false,
      total_count: Number
    }
  },
  methods: {
    // 渲染地图
    renderMap (res) {
      let list = res.route_list
      this.map = new window.BMap.Map('container', {enableMapClick: false})
      let gps1 = list[0].split(',')
      let startPoint = new window.BMap.Point(gps1[0], gps1[1])
      let gps2 = list[list.length - 1].split(',')
      let endPoint = new window.BMap.Point(gps2[0], gps2[1])

      this.map.centerAndZoom(endPoint, 11)
      // map.clearOverlays();

      // 添加起始图标
      let startPointIcon = new window.BMap.Icon('./../../static/start_point.png', new window.BMap.Size(36, 42), {
        imageSize: new window.BMap.Size(36, 42),
        anchor: new window.BMap.Size(18, 42)
      })

      var bikeMarkerStart = new window.BMap.Marker(startPoint, { icon: startPointIcon })
      this.map.addOverlay(bikeMarkerStart)

      let endPointIcon = new window.BMap.Icon('./../../static/end_point.png', new window.BMap.Size(36, 42), {
        imageSize: new window.BMap.Size(36, 42),
        anchor: new window.BMap.Size(18, 42)
      })
      var bikeMarkerEnd = new window.BMap.Marker(endPoint, { icon: endPointIcon })
      this.map.addOverlay(bikeMarkerEnd)

      let routeList = []
      list.forEach((item) => {
        let p = item.split(',')
        let point = new window.BMap.Point(p[0], p[1])
        routeList.push(point)
      })
      // 行驶路线
      var polyLine = new window.BMap.Polyline(routeList, {
        strokeColor: '#ef4136',
        strokeWeight: 3,
        strokeOpacity: 1
      })
      this.map.addOverlay(polyLine)

      // 服务区路线
      let serviceList = res.service_list
      let servicePointist = []
      serviceList.forEach((item) => {
        let point = new window.BMap.Point(item.lon, item.lat)
        servicePointist.push(point)
      })
      // 画线
      var polyServiceLine = new window.BMap.Polyline(servicePointist, {
        strokeColor: '#ef4136',
        strokeWeight: 3,
        strokeOpacity: 1
      })
      this.map.addOverlay(polyServiceLine)

      // 添加地图中的自行车
      let bikeList = res.bike_list
      let bikeIcon = new window.BMap.Icon('./../../static/bike.jpg', new window.BMap.Size(36, 42), {
        imageSize: new window.BMap.Size(36, 42),
        anchor: new window.BMap.Size(18, 42)
      })
      bikeList.forEach((item) => {
        let p = item.split(',')
        let point = new window.BMap.Point(p[0], p[1])
        var bikeMarker = new window.BMap.Marker(point, { icon: bikeIcon })
        this.map.addOverlay(bikeMarker)
      })

      // 添加地图控件
      this.addMapControl()
    },

    // 添加地图控件
    addMapControl () {
      let map = this.map
      // 左上角，添加比例尺
      // eslint-disable-next-line
      var top_right_control = new window.BMap.ScaleControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT})
      // eslint-disable-next-line
      var top_right_navigation = new window.BMap.NavigationControl({anchor: window.BMAP_ANCHOR_TOP_RIGHT})
      // 添加控件和比例尺
      map.addControl(top_right_control)
      map.addControl(top_right_navigation)
      map.enableScrollWheelZoom(true)
    // legend.addLegend(map);
    },
    // 动态获取mock数据
    request () {
      axios.ajax({
        url: '/map/bike_list',
        data: {
          params: {
            page: this.params
          }
        }
      }).then((res) => {
        if (res) {
          this.total_count = res.result.total_count
        }
        this.renderMap(res.result)
      })
    },
    hideOpenOrder () {
      this.visible = false
    }
  },
  mounted () {
    this.request()
  }
}
</script>

<style scoped lang="less">
</style>
