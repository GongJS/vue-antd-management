<template>
  <div class="header">
    <a-row class="header-top">
      <a-col span="6" class="logo" v-if="type === 'common'">
        <img src="./../../../static/logo-ant.svg" alt="" />
        <span>Vue-Antd 通用管理系统</span>
      </a-col>
      <a-col :span="18" v-if="type === 'common'">
        <div v-if="isLogin">
          <span>欢迎回来，{{userName}}</span>
          <a-button type="danger" style="margin-left:10px;">
            <router-link to="home">退出</router-link>
          </a-button>
        </div>
        <div v-else>
          <a-button type="primary">马上登录</a-button>
        </div>
      </a-col>
      <a-col :span="24" v-else>
        <div v-if="isLogin">
          <span>欢迎回来，{{userName}}</span>
          <a-button type="danger" @click="logout" style="margin-left:10px;">退出</a-button>
        </div>
        <div v-else>
          <a-button type="primary">
            <router-link to="/login">马上登录</router-link>
          </a-button>
        </div>
      </a-col>
    </a-row>
    <a-row class="breadcrumb" v-if="!(type === 'common')">
      <a-col :span="4" class="breadcrumb-title">
        首页
      </a-col>
      <a-col :span="20" class="weather">
        <span class="date">{{sysTime}}</span>
        <span class="weather-img"><img :src="dayPictureUrl" alt="" /></span>
        <span class="weather-detail">{{weather}}</span>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import Util from '../../utils/utils'
import axios from '../../axios/index'
import { Row, Col, Button } from 'ant-design-vue'
import { mapState } from 'vuex'
export default {
  name: 'Header',
  props: ['type'],
  components: {
    'a-row': Row,
    'a-col': Col,
    'a-button': Button
  },
  data () {
    return {
      dayPictureUrl: '',
      weather: '',
      sysTime: ''
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      userName: state => state.userName
    })
  },
  methods: {
    getWeatherAPIDate () {
      let city = '北京'
      axios.jsonp({
        url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
      }).then((res) => {
        if (res.status === 'success') {
          let data = res.results[0].weather_data[0]
          this.dayPictureUrl = data.dayPictureUrl
          this.weather = data.weather
        }
      })
    },
    logout () {
      sessionStorage.removeItem('demo-token')
      this.$store.commit('logout')
    }
  },
  mounted () {
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime())
      this.sysTime = sysTime
    }, 1000)
    this.getWeatherAPIDate()
  }
}
</script>

<style scoped lang="less">
  @import "./../../style/default.less";
  .header {
    background-color: @colorM;
    .header-top {
      height: 60px;
      line-height: 60px;
      padding: 0 20px;
      text-align: right;
      .logo {
        line-height: 60px;
        text-align: left;
        font-size: 18px;
        img {
          height: 40px;
          vertical-align: middle;
        }
        span {
          margin-left: 5px;
        }
      }
    }
    .breadcrumb {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      border-top: 1px solid #f9c700;
      .breadcrumb-title {
        text-align: center;
        font-size: @fontC;
        &:after {
          position: absolute;
          content: '';
          left: 73px;
          top: 39px;
          border-top: 9px solid @colorM;
          border-left: 12px solid transparent;
          border-right: 12px solid transparent;
        }
      }
      .weather {
        text-align: right;
        font-size: 14px;
        .date {
          margin-right: 10px;
          vertical-align: middle;
        }
        .weather-img {
          img {
            height: 15px;
          }
        }
        .weather-detail {
          margin-left: 5px;
          vertical-align: middle;
        }
      }
    }
  }

  .simple-page {
    .header-top {
      background: #1890ff;
      color: @colorM;
    }
  }
</style>
