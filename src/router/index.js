import Vue from 'vue'
import Router from 'vue-router'
const Home = resolve => require(['@/pages/home/Home'], resolve)
const Index = resolve => require(['@/pages/home/Index'], resolve)
const Button = resolve => require(['@/pages/ui/Buttons'], resolve)
const Modal = resolve => require(['@/pages/ui/Modals'], resolve)
const Message = resolve => require(['@/pages/ui/Messages'], resolve)
const Notice = resolve => require(['@/pages/ui/Notice'], resolve)
const Loading = resolve => require(['@/pages/ui/Loadings'], resolve)
const Tab = resolve => require(['@/pages/ui/Tabs'], resolve)
const Carousel = resolve => require(['@/pages/ui/Carousel'], resolve)
const Gallery = resolve => require(['@/pages/ui/Gallery'], resolve)
const LoginForm = resolve => require(['@/pages/form/Login'], resolve)
const Register = resolve => require(['@/pages/form/Register'], resolve)
const BasicTable = resolve => require(['@/pages/table/BasicTable'], resolve)
const HighTable = resolve => require(['@/pages/table/HighTable'], resolve)
const City = resolve => require(['@/pages/city/City'], resolve)
const Order = resolve => require(['@/pages/order/Order'], resolve)
const User = resolve => require(['@/pages/user/User'], resolve)
const BikeMap = resolve => require(['@/pages/map/BikeMap'], resolve)
const Rich = resolve => require(['@/pages/rich/Rich'], resolve)
const Bar = resolve => require(['@/pages/echarts/Bar'], resolve)
const Line = resolve => require(['@/pages/echarts/Pie'], resolve)
const Pie = resolve => require(['@/pages/echarts/Line'], resolve)
const Detail = resolve => require(['@/pages/order/detail/Detail'], resolve)
const Common = resolve => require(['@/pages/common/common'], resolve)
const Login = resolve => require(['@/pages/login/Login'], resolve)
const Permission = resolve => require(['@/pages/permission/permission'], resolve)
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
        name: 'loginForm',
        component: LoginForm
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
        component: City,
        meta: {requiresAuth: true}
      },
      {
        path: '/home/order/detail/',
        name: 'order',
        component: Order,
        meta: {requiresAuth: true}
      },
      {
        path: '/home/user',
        name: 'user',
        component: User,
        meta: {requiresAuth: true}
      },
      {
        path: '/home/bikeMap',
        name: 'bikeMap',
        component: BikeMap
      },
      {
        path: '/home/echarts/bar',
        name: 'barEcharts',
        component: Bar
      },
      {
        path: '/home/echarts/line',
        name: 'lineEcharts',
        component: Line
      },
      {
        path: '/home/echarts/pie',
        name: 'pieEcharts',
        component: Pie
      },
      {
        path: '/home/rich',
        name: 'rich',
        component: Rich
      },
      {
        path: '/home/permission',
        name: 'permission',
        component: Permission,
        meta: {requiresAuth: true}
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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
