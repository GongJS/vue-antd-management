import cityTable from '../models/cityTable'

const getCityTable = async function (ctx, next) {
  const data = ctx.request.body
  const result = await cityTable.getCityTable(data)
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
const searchCityTable = async function (ctx, next) {
  const data = ctx.request.body
  const result = await cityTable.searchCityTable(data)
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

const createCityTable = async function (ctx, next) {
  const data = ctx.request.body
  const result = await cityTable.createCityTable(data)
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

export default {
  getCityTable,
  searchCityTable,
  createCityTable
}
