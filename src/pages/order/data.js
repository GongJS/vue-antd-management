const columns = [
  {
    title: '订单编号',
    dataIndex: 'order_sn'
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
    dataIndex: 'start_time'
  },
  {
    title: '结束时间',
    dataIndex: 'end_time'
  },
  {
    title: '订单金额',
    dataIndex: 'total_fee'
  },
  {
    title: '实付金额',
    dataIndex: 'user_pay'
  }
]
const dataSource = {
  columns
}
export default dataSource
