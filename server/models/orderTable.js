import db from '../config/db.js' // 引入user的表结构
const orderTableModel = '../schema/orderTable.js'
const ManagementDb = db.Management // 引入数据-
const orderTable = ManagementDb.import(orderTableModel) // 用sequelize的import方法引入表结构，实例化了orderTable。
const getOrderTable = async function (params) {
  const result = await orderTable.findAndCountAll({
    offset: (params.page - 1) * params.pageSize,
    limit: params.pageSize
  }) // 查找全部的cityTable数据
  return result // 返回数据
}

const searchOrderTable = async function (params) {
  if (params.city === '全部') {
    params.city = ['天津', '北京', '深圳']
  } else {
    params.city = [params.name]
  }
  if (params.status === '全部') {
    params.status = ['进行中', '结束行程']
  } else {
    params.status = [params.status]
  }
  const result = await orderTable.findAndCount({
    where: {
      city: {
        $in: params.city
      },
      status: {
        $in: params.status
      },
      start_time: {
        $between: [params.order_time[0], params.order_time[1]]
      }
    }
  }) // 查找全部的cityTable数据
  return result // 返回数据
}

export default {
  getOrderTable,
  searchOrderTable
}
