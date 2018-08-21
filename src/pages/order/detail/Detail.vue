<template>
    <div>
      <a-card>
        <div id="orderDetailMap" class="order-map"></div>
        <div class="detail-items">
          <div class="item-title">基础信息</div>
          <ul class="detail-form">
            <li>
              <div class="detail-form-left">用车模式</div>
              <div class="detail-form-content">{{orderInfo.mode == 1 ?'服务区':'停车点'}}</div>
            </li>
            <li>
              <div class="detail-form-left">订单编号</div>
              <div class="detail-form-content">{{userInfo.order_sn || ''}}</div>
            </li>
            <li>
              <div class="detail-form-left">车辆编号</div>
              <div class="detail-form-content">{{userInfo.bike_sn}}</div>
            </li>
            <li>
              <div class="detail-form-left">用户姓名</div>
              <div class="detail-form-content">{{userInfo.user_name}}</div>
            </li>
            <li>
              <div class="detail-form-left">手机号码</div>
              <div class="detail-form-content">{{userInfo.mobile}}</div>
            </li>
          </ul>
        </div>
        <div class="detail-items">
          <div class="item-title">行驶轨迹</div>
          <ul class="detail-form">
            <li>
              <div class="detail-form-left">行程起点</div>
              <div class="detail-form-content">{{orderInfo.start_location}}</div>
            </li>
            <li>
              <div class="detail-form-left">行程终点</div>
              <div class="detail-form-content">{{orderInfo.end_location}}</div>
            </li>
            <li>
              <div class="detail-form-left">行驶里程</div>
              <div class="detail-form-content">{{orderInfo.distance/1000}}公里</div>
            </li>
          </ul>
        </div>
      </a-card>
  </div>
</template>

<script>
import {Card} from 'ant-design-vue'
import axios from './../../../axios'
export default {
  name: 'Detail',
  components: {
    'a-card': Card
  },
  data () {
    return {
      orderInfo: {},
      userInfo: {},
      map: null
    }
  },

  methods: {
    async  getDetailInfo (orderId) {
      // 地图信息数据为mock
      axios.ajax({
        url: '/order/detail',
        data: {
          params: {
            orderId: orderId
          }
        }
      }).then((res) => {
        // eslint-disable-next-line
        if (res.code == 0) {
          this.orderInfo = res.result
          this.renderMap(res.result)
        }
      })
    },

    async getUserInfo (orderId) {
      let self = this.$http
      let options = {
        url: '/api/searchByIdOrderTable',
        method: 'post'
      }
      let params = {
        order_sn: orderId
      }
      const userInfo = await axios.getData(self, options, params)
      if (userInfo.order_sn) {
        this.userInfo = userInfo
      }
    },

    renderMap (result) {
      this.map = new window.BMap.Map('orderDetailMap')
      // this.map.centerAndZoom('北京',11);
      // 添加地图控件
      this.addMapControl()
      // 调用路线图绘制方法
      this.drawBikeRoute(result.position_list)
      // 调用服务区绘制方法
      this.drwaServiceArea(result.area)
    },

    // 添加地图控件
    addMapControl () {
      let map = this.map
      map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }))
      map.addControl(new window.BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }))
    },

    // 绘制用户的行驶路线
    drawBikeRoute (positionList) {
      let startPoint = ''
      let endPoint = ''
      if (positionList.length > 0) {
        let first = positionList[0]
        let last = positionList[positionList.length - 1]
        startPoint = new window.BMap.Point(first.lon, first.lat)
        let startIcon = new window.BMap.Icon('./../../../static/start_point.png', new window.BMap.Size(36, 42), {
          imageSize: new window.BMap.Size(36, 42),
          anchor: new window.BMap.Size(18, 42)
        })
        let startMarker = new window.BMap.Marker(startPoint, { icon: startIcon })
        this.map.addOverlay(startMarker)
        endPoint = new window.BMap.Point(last.lon, last.lat)
        let endIcon = new window.BMap.Icon('./../../../static/end_point.png', new window.BMap.Size(36, 42), {
          imageSize: new window.BMap.Size(36, 42),
          anchor: new window.BMap.Size(18, 42)
        })
        let endMarker = new window.BMap.Marker(endPoint, { icon: endIcon })
        this.map.addOverlay(endMarker)
        // 连接路线图
        let trackPoint = []
        for (let i = 0; i < positionList.length; i++) {
          let point = positionList[i]
          trackPoint.push(new window.BMap.Point(point.lon, point.lat))
        }
        let polyline = new window.BMap.Polyline(trackPoint, {
          strokeColor: '#1869AD',
          strokeWeight: 3,
          strokeOpacity: 1
        })
        this.map.addOverlay(polyline)
        this.map.centerAndZoom(endPoint, 11)
      }
    },

    // 绘制服务区
    drwaServiceArea (positionList) {
      // 连接路线图
      let trackPoint = []
      for (let i = 0; i < positionList.length; i++) {
        let point = positionList[i]
        trackPoint.push(new window.BMap.Point(point.lon, point.lat))
      }
      // 绘制服务区
      let polygon = new window.BMap.Polygon(trackPoint, {
        strokeColor: '#CE0000',
        strokeWeight: 4,
        strokeOpacity: 1,
        fillColor: '#ff8605',
        fillOpacity: 0.4
      })
      this.map.addOverlay(polygon)
    }
  },

  mounted () {
    let orderId = this.$route.params.id
    if (orderId) {
      this.getUserInfo(orderId)
      this.getDetailInfo(orderId)
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../../style/default';
  @import '../../../style/common';
  .detail-items{
    margin-left:90px;
    padding:25px 50px 25px 0;
    border-bottom:1px solid @colorN;
    &:last-child{
      border-bottom:none;
    }
    .item-title{
      margin:20px 0;
      font-size:@fontG;
      color:@colorU;
    }
    .detail-form{
      li{
        .clearfix;
        margin:20px 0;
        line-height:20px;
        font-size:15px;
        color:@colorC;
      }
    }
    .detail-form-left{
      float:left;
      width:164px;
      text-align:right;
      color:@colorH;
    }
    .detail-form-content{
      padding-left:194px;
    }
  }
  .order-map{
    height: 450px;
    margin: 25px -31px 0;
  }
</style>
