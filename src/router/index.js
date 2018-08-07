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
        path: '/ui/button',
        name: 'button',
        component: Button
      },
      {
        path: '/ui/modal',
        name: 'modal',
        component: Modal
      },
      {
        path: '/ui/message',
        name: 'message',
        component: Message
      },
      {
        path: '/ui/notice',
        name: 'notice',
        component: Notice
      },
      {
        path: '/ui/loading',
        name: 'loading',
        component: Loading
      },
      {
        path: '/ui/tab',
        name: 'tab',
        component: Tab
      },
      {
        path: '/ui/carousel',
        name: 'carousel',
        component: Carousel
      },
      {
        path: '/ui/gallery',
        name: 'gallery',
        component: Gallery
      },
      {
        path: '/form/login',
        name: 'login',
        component: Login
      },
      {
        path: '/form/register',
        name: 'register',
        component: Register
      }
      ]
    }
  ]
})
