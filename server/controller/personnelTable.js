import personnelTable from '../models/personnelTable'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

const getPersonnelTable = async function (ctx, next) {
  const data = ctx.request.body
  const result = await personnelTable.getPersonnelTable(data)
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

const createPersonnelTable = async function (ctx, next) {
  const data = ctx.request.body
  data.birthday = moment(data.birthday).format('YYYY-MM-DD')
  const result = await personnelTable.createPersonnelTable(data)
  if (result !== null) {
    ctx.response.body = {
      success: true,
      result: result
    }
  } else {
    ctx.response.body = {
      success: false,
      data: '创建数据出错'
    }
  }
}

const updatePersonnelTable = async function (ctx, next) {
  const data = ctx.request.body
  const result = await personnelTable.updatePersonnelTable(data)
  if (result !== null) {
    ctx.response.body = {
      success: true,
      result: result
    }
  } else {
    ctx.response.body = {
      success: false,
      result: '更新失败'
    }
  }
}

const deletePersonnelTable = async function (ctx, next) {
  const data = ctx.request.body
  const result = await personnelTable.deletePersonnelTable(data)
  if (result > 0) {
    ctx.response.body = {
      success: true,
      result: '删除成功'
    }
  } else {
    ctx.response.body = {
      success: false,
      data: '删除失败'
    }
  }
}

export default {
  getPersonnelTable,
  createPersonnelTable,
  updatePersonnelTable,
  deletePersonnelTable
}
