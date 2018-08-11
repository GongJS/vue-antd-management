const columns = [{
  title: 'id',
  dataIndex: 'id'
}, {
  title: '用户名',
  dataIndex: 'username'
}, {
  title: '性别',
  dataIndex: 'sex',
  customRender (sex) {
    // eslint-disable-next-line
    return sex == 1 ? '男' : '女'
  }
}, {
  title: '状态',
  dataIndex: 'state',
  customRender (state) {
    let config = {
      '1': '咸鱼一条',
      '2': '风华浪子',
      '3': '北大才子一枚',
      '4': '百度FE',
      '5': '创业者'
    }
    return config[state]
  }
}, {
  title: '爱好',
  dataIndex: 'interest',
  customRender (interest) {
    let config = {
      '1': '游泳',
      '2': '打篮球',
      '3': '踢足球',
      '4': '跑步',
      '5': '爬山',
      '6': '骑行',
      '7': '桌球',
      '8': '麦霸'
    }
    return config[interest]
  }
}, {
  title: '爱好',
  dataIndex: 'isMarried',
  customRender (isMarried) {
    return isMarried ? '已婚' : '未婚'
  }
}, {
  title: '生日',
  dataIndex: 'birthday'
}, {
  title: '联系地址',
  dataIndex: 'address'
}, {
  title: '早起时间',
  dataIndex: 'time'
}
]
const dataSource = {
  columns
}
export default dataSource
