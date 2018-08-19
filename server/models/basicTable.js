import db from '../config/db.js' // 引入user的表结构
const basciTableModel = '../schema/basicTable.js'
const ManagementDb = db.Management // 引入数据-
const basicTable = ManagementDb.import(basciTableModel) // 用sequelize的import方法引入表结构，实例化了basicTable。
const getbasicTable = async function (params) {
  const total = await basicTable.count()
  console.log(total)
  const result = await basicTable.findAndCountAll({
    offset: (params.page - 1) * params.pageSize,
    limit: params.pageSize
  }) // 查找全部的basicTable数据
  return result // 返回数据
}

export default {
  getbasicTable // 导出getbasicTable的方法，将会在controller里调用
}
