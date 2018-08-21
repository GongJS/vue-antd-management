import db from '../config/db.js' // 引入user的表结构
const orderTableModel = '../schema/orderTable.js'
const ManagementDb = db.Management // 引入数据
const orderTable = ManagementDb.import(orderTableModel) // 用sequelize的import方法引入表结构，实例化了orderTable。
// 获取全部后台数据
const getOrderTable = async function (params) {
  const result = await orderTable.findAndCountAll({
    offset: (params.page - 1) * params.pageSize,
    limit: params.pageSize
  }) // 查找全部的cityTable数据
  return result // 返回数据
}

// 按设置条件进行查找
const searchOrderTable = async function (params) {
  params.city === '全部' ? params.city = ['天津', '北京', '深圳'] : params.city = [params.city]
  params.status === '全部' ? params.status = ['进行中', '结束行程'] : params.status = [params.status]
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

// 根据订单号进行查找
const searchByIdOrderTable = async function (params) {
  const result = await orderTable.findOne({
    where: {
      order_sn: params.order_sn
    }
  })
  return result // 返回数据
}

// 更新数据
const updateOrderTable = async function (params, end_time) {
  const result = await orderTable.update(
    {
      status: params.status,
      end_time: end_time
    },
    {
      where: {
        order_sn: params.order_sn
      }
    }
  ) 
  return result // 返回数据
}
export default {
  getOrderTable,
  searchOrderTable,
  searchByIdOrderTable,
  updateOrderTable
}
