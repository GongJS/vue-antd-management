const menuList = [
  {
    title: '首页',
    key: '/home',
    path: '/home'
  },
  {
    title: 'UI',
    key: '/ui',
    children: [
      {
        title: '按钮',
        key: '/ui/buttons',
        path: '/ui/button'
      },
      {
        title: '弹框',
        key: '/ui/modals',
        path: '/ui/modal'
      },
      {
        title: 'Loading',
        key: '/ui/loadings',
        path: '/ui/loading'
      },
      {
        title: '通知提醒',
        key: '/ui/notification',
        path: '/ui/notice'
      },
      {
        title: '全局Message',
        key: '/ui/messages',
        path: '/ui/message'
      },
      {
        title: 'Tab页签',
        key: '/ui/tabs',
        path: '/ui/tab'
      },
      {
        title: '图片画廊',
        key: '/ui/gallery',
        path: '/ui/gallery'
      },
      {
        title: '轮播图',
        key: '/ui/carousel',
        path: '/ui/carousel'
      }
    ]
  },
  {
    title: '表单',
    key: '/form',
    children: [
      {
        title: '登录',
        key: '/form/login',
        path: '/form/login'
      },
      {
        title: '注册',
        key: '/form/reg',
        path: '/form/register'
      }
    ]
  },
  {
    title: '表格',
    key: '/table',
    children: [
      {
        title: '基础表格',
        key: '/table/basic'
      },
      {
        title: '高级表格',
        key: '/table/high'
      }
    ]
  },
  {
    title: '富文本',
    key: '/rich'
  },
  {
    title: '城市管理',
    key: '/city'
  },
  {
    title: '订单管理',
    key: '/order',
    children: [
      {
        title: '订单详情',
        key: 'detail'
      },
      {
        title: '结束订单',
        key: 'finish'
      }
    ]
  },
  {
    title: '员工管理',
    key: '/user'
  },
  {
    title: '车辆地图',
    key: '/bikeMap'
  },
  {
    title: '图标',
    key: '/charts',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar'
      },
      {
        title: '饼图',
        key: '/charts/pie'
      },
      {
        title: '折线图',
        key: '/charts/line'
      }
    ]
  },
  {
    title: '权限设置',
    key: '/permission'
  }
]
export default menuList
