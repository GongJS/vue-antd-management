import basicTable from '../models/basicTable'

const getBasicTable = async function (ctx, next) {
  console.log(777, ctx)
  const data = ctx.request.body
  const result = await basicTable.getbasicTable(data)
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

const deleteBasicTable = async function (ctx, next) {
  const data = ctx.request.body
  const result = await basicTable.deletebasicTable(data)
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
  getBasicTable,
  deleteBasicTable
}
