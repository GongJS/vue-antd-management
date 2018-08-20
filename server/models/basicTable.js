import db from '../config/db.js' // 引入user的表结构
const basciTableModel = '../schema/basicTable.js'
const ManagementDb = db.Management // 引入数据-
const basicTable = ManagementDb.import(basciTableModel) // 用sequelize的import方法引入表结构，实例化了basicTable。
const getBasicTable = async function (params) {
  const result = await basicTable.findAndCountAll({
    offset: (params.page - 1) * params.pageSize,
    limit: params.pageSize
  }) // 查找全部的basicTable数据
  return result // 返回数据
}

const deleteBasicTable = async function (params) {
  const result = await basicTable.destroy({
    where: {
      id: params.id
    }
  }) // 查找全部的basicTable数据
  return result // 返回数据
}

export default {
  getBasicTable, // 导出getbasicTable的方法，将会在controller里调用
  deleteBasicTable
}
