import db from '../config/db.js' // 引入user的表结构
const cityTableModel = '../schema/cityTable.js'
const ManagementDb = db.Management // 引入数据-
const cityTable = ManagementDb.import(cityTableModel) // 用sequelize的import方法引入表结构，实例化了cityTable。

const getCityTable = async function (params) {
  const result = await cityTable.findAndCountAll({
    offset: (params.page - 1) * params.pageSize,
    limit: params.pageSize
  }) // 查找全部的cityTable数据
  return result // 返回数据
}

const searchCityTable = async function (params) {
  params.name === '全部' ? params.name = ['天津', '北京', '深圳'] : params.name = [params.name]
  params.mode === '全部' ? params.mode = ['停车点', '禁停区'] : params.mode = [params.mode]
  params.op_mode === '全部' ? params.op_mode = ['自营', '加盟'] : params.op_mode = [params.op_mode]
  params.status === '全部' ? params.status = ['已授权', '未授权'] : params.ostatus = [params.status]
  const result = await cityTable.findAndCount({
    where: {
      name: {
        $in: params.name
      },
      mode: {
        $in: params.mode
      },
      op_mode: {
        $in: params.op_mode
      },
      status: {
        $in: params.status
      }
    }
  }) // 查找全部的cityTable数据
  return result // 返回数据
}

const createCityTable = async function (params) {
  const result = await cityTable.create({
    name: params.name,
    mode: params.mode,
    op_mode: params.op_mode,
    franchisee_name: '松果自营',
    city_admins: '李四',
    open_time: '2018-01-01 12:00:00',
    update_time: '2018-01-01 12:00:00',
    sys_user_name: '白展堂',
    status: '已授权'
  })
  return result
}

export default {
  getCityTable, // 导出cityTable的方法，将会在controller里调用
  searchCityTable,
  createCityTable
}
