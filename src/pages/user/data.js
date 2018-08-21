import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
const columns = [{
  title: '用户名',
  dataIndex: 'username'
}, {
  title: '性别',
  dataIndex: 'sex'
}, {
  title: '状态',
  dataIndex: 'state'
}, {
  title: '爱好',
  dataIndex: 'interest'
}, {
  title: '爱好',
  dataIndex: 'isMarried'
}, {
  title: '生日',
  dataIndex: 'birthday',
  customRender (dataTime) {
    return moment(dataTime).utcOffset(-0).format('YYYY-MM-DD')
  }
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
