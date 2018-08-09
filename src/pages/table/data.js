const data = [
  {
    id: '0',
    userName: 'Jack',
    sex: '1',
    state: '1',
    interest: '1',
    birthday: '2000-01-01',
    address: '北京市海淀区奥林匹克公园',
    time: '09:00'
  },
  {
    id: '1',
    userName: 'Tom',
    sex: '1',
    state: '1',
    interest: '1',
    birthday: '2000-01-01',
    address: '北京市海淀区奥林匹克公园',
    time: '09:00'
  },
  {
    id: '2',
    userName: 'Lily',
    sex: '1',
    state: '1',
    interest: '1',
    birthday: '2000-01-01',
    address: '北京市海淀区奥林匹克公园',
    time: '09:00'
  }
]
const columns = [
  {
    title: 'id',
    key: 'id',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    key: 'userName',
    dataIndex: 'userName'
  },
  {
    title: '性别',
    key: 'sex',
    dataIndex: 'sex',
    customRender (sex) {
      return sex === 1 ? '男' : '女'
    }
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    customRender (state) {
      let config = {
        '1': '咸鱼一条',
        '2': '风华浪子',
        '3': '北大才子',
        '4': '百度FE',
        '5': '创业者'
      }
      return config[state]
    }
  },
  {
    title: '爱好',
    key: 'interest',
    dataIndex: 'interest',
    customRender (abc) {
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
      return config[abc]
    }
  },
  {
    title: '生日',
    key: 'birthday',
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address'
  },
  {
    title: '早起时间',
    key: 'time',
    dataIndex: 'time'
  }
]
const highColumns = [
  {
    title: 'id',
    key: 'id',
    width: 80,
    dataIndex: 'id'
  },
  {
    title: '用户名',
    key: 'username',
    width: 80,
    dataIndex: 'username'
  },
  {
    title: '性别',
    key: 'sex',
    width: 80,
    dataIndex: 'sex',
    customRender (sex) {
      return sex === 1 ? '男' : '女'
    }
  },
  {
    title: '状态',
    key: 'state',
    width: 80,
    dataIndex: 'state',
    customRender (state) {
      let config = {
        '1': '咸鱼一条',
        '2': '风华浪子',
        '3': '北大才子',
        '4': '百度FE',
        '5': '创业者'
      }
      return config[state]
    }
  },
  {
    title: '爱好',
    key: 'interest',
    width: 80,
    dataIndex: 'interest',
    customRender (abc) {
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
      return config[abc]
    }
  },
  {
    title: '生日',
    key: 'birthday',
    width: 120,
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    key: 'address',
    width: 120,
    dataIndex: 'address'
  },
  {
    title: '早起时间',
    key: 'time',
    width: 80,
    dataIndex: 'time'
  }
]
const highColumns2 = [
  {
    title: 'id',
    key: 'id',
    width: 100,
    fixed: 'left',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    key: 'username',
    width: 100,
    fixed: 'left',
    dataIndex: 'username'
  },
  {
    title: '性别',
    key: 'sex',
    width: 150,
    dataIndex: 'sex',
    render (sex) {
      return sex === 1 ? '男' : '女'
    }
  },
  {
    title: '状态',
    key: 'state',
    width: 150,
    dataIndex: 'state',
    render (state) {
      let config = {
        '1': '咸鱼一条',
        '2': '风华浪子',
        '3': '北大才子',
        '4': '百度FE',
        '5': '创业者'
      }
      return config[state]
    }
  },
  {
    title: '爱好',
    key: 'interest',
    width: 150,
    dataIndex: 'interest',
    render (abc) {
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
      return config[abc]
    }
  },
  {
    title: '生日',
    key: 'birthday',
    width: 150,
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    key: 'address',
    width: 150,
    dataIndex: 'address'
  },
  {
    title: '早起时间',
    key: 'time',
    width: 150,
    fixed: 'right',
    dataIndex: 'time'
  }
]
const highColumns3 = [
  {
    title: 'id',
    key: 'id',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    key: 'username',
    dataIndex: 'username'
  },
  {
    title: '性别',
    key: 'sex',
    dataIndex: 'sex',
    customRender (sex) {
      return sex === 1 ? '男' : '女'
    }
  },
  {
    title: '年龄',
    key: 'age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    customRender (state) {
      let config = {
        '1': '咸鱼一条',
        '2': '风华浪子',
        '3': '北大才子',
        '4': '百度FE',
        '5': '创业者'
      }
      return config[state]
    }
  },
  {
    title: '爱好',
    key: 'interest',
    dataIndex: 'interest',
    customRender (abc) {
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
      return config[abc]
    }
  },
  {
    title: '生日',
    key: 'birthday',
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    key: 'address',
    dataIndex: 'address'
  },
  {
    title: '早起时间',
    key: 'time',
    dataIndex: 'time'
  }
]
const highColumns4 = [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '性别',
    dataIndex: 'sex',
    customRender (sex) {
      return sex === 1 ? '男' : '女'
    }
  },
  {
    title: '年龄',
    dataIndex: 'age'
  },
  {
    title: '状态',
    dataIndex: 'state',
    customRender (state) {
      let config = {
        '1': '咸鱼一条',
        '2': '风华浪子',
        '3': '北大才子',
        '4': '百度FE',
        '5': '创业者'
      }
      return config[state]
    }
  },
  {
    title: '运行',
    dataIndex: 'interest',
    scopedSlots: { customRender: 'interest' }
  },
  {
    title: '生日',
    dataIndex: 'birthday'
  },
  {
    title: '地址',
    dataIndex: 'address'
  },
  {
    title: '操作',
    dataIndex: '操作',
    scopedSlots: { customRender: 'operation' }
  }
]
const dataSource = {
  data,
  columns,
  highColumns,
  highColumns2,
  highColumns3,
  highColumns4
}
export default dataSource
