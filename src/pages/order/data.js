import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
const columns = [
  {
    title: '订单编号',
    dataIndex: 'order_sn'
  },
  {
    title: '城市',
    dataIndex: 'city'
  },
  {
    title: '车辆编号',
    dataIndex: 'bike_sn'
  },
  {
    title: '用户名',
    dataIndex: 'user_name'
  },
  {
    title: '手机号',
    dataIndex: 'mobile'
  },
  {
    title: '里程',
    dataIndex: 'distance',
    customRender (distance) {
      return distance / 1000 + 'Km'
    }
  },
  {
    title: '行驶时长',
    dataIndex: 'total_time'
  },
  {
    title: '状态',
    dataIndex: 'status'
  },
  {
    title: '开始时间',
    dataIndex: 'start_time',
    customRender (dataTime) {
      return moment(dataTime).utcOffset(-0).format('YYYY-MM-DD HH:mm:ss')
    }
  },
  {
    title: '结束时间',
    dataIndex: 'end_time'
  },
  {
    title: '订单金额(元)',
    dataIndex: 'total_fee'
  }
]

export default columns
