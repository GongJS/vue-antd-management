import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/home/Home'
import Index from './../pages/home/Index'
import Button from '../pages/ui/buttons'
import Modal from './../pages/ui/modals'
import Message from '../pages/ui/messages'
import Notice from './../pages/ui/notice'
import Loading from './../pages/ui/loadings'
import Tab from './../pages/ui/tabs'
import Carousel from './../pages/ui/carousel'
import Gallery from './../pages/ui/gallery'
import Login from './../pages/form/login'
import Register from './../pages/form/register'
import BasicTable from '../pages/table/BasicTable'
import HighTable from '../pages/table/HighTable'
import City from '../pages/city/City'
import Order from '../pages/order/Order'
import User from '../pages/user/User'
import BikeMap from '../pages/map/BikeMap'
import Detail from '../pages/order/detail/Detail'
import Common from './../pages/common/common'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Home,
      children: [{
        path: '/home',
        name: 'Index',
        component: Index
      },
      {
        path: '/home/ui/button',
        name: 'button',
        component: Button
      },
      {
        path: '/home/ui/modal',
        name: 'modal',
        component: Modal
      },
      {
        path: '/home/ui/message',
        name: 'message',
        component: Message
      },
      {
        path: '/home/ui/notice',
        name: 'notice',
        component: Notice
      },
      {
        path: '/home/ui/loading',
        name: 'loading',
        component: Loading
      },
      {
        path: '/home/ui/tab',
        name: 'tab',
        component: Tab
      },
      {
        path: '/home/ui/carousel',
        name: 'carousel',
        component: Carousel
      },
      {
        path: '/home/ui/gallery',
        name: 'gallery',
        component: Gallery
      },
      {
        path: '/home/form/login',
        name: 'login',
        component: Login
      },
      {
        path: '/home/form/register',
        name: 'register',
        component: Register
      },
      {
        path: '/home/table/basicTable',
        name: 'basicTable',
        component: BasicTable
      },
      {
        path: '/home/table/highTable',
        name: 'highTable',
        component: HighTable
      },
      {
        path: '/home/city',
        name: 'city',
        component: City
      },
      {
        path: '/home/order/detail/',
        name: 'order',
        component: Order
      },
      {
        path: '/home/user',
        name: 'user',
        component: User
      },
      {
        path: '/home/bikeMap',
        name: 'bikeMap',
        component: BikeMap
      }
      ]
    },
    {
      path: '/common',
      component: Common,
      children: [{
        path: '/common/order/detail/:id',
        name: 'orderDetail',
        component: Detail
      }]
    }
  ]
})
