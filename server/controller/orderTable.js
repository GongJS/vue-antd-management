import orderTable from '../models/orderTable'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
const getOrderTable = async function (ctx, next) {
  const data = ctx.request.body
  const result = await orderTable.getOrderTable(data)
  if (result !== null) {
    ctx.response.body = {
      success: true,
      result: result
    }
  } else {
    ctx.response.body = {
      success: false,
      data: '获取数据出错'
    }
  }
}

const searchOrderTable = async function (ctx, next) {
  const data = ctx.request.body
  // 设置从每天的0点开始计算
  data.order_time[0] = moment(data.order_time[0]).format('YYYY-MM-DD 00:00:00')
  data.order_time[1] = moment(data.order_time[1]).format('YYYY-MM-DD 00:00:00')
  const result = await orderTable.searchOrderTable(data)
  if (result !== null) {
    ctx.response.body = {
      success: true,
      result: result
    }
  } else {
    ctx.response.body = {
      success: false,
      data: '获取数据出错'
    }
  }
}

export default {
  getOrderTable,
  searchOrderTable
}
