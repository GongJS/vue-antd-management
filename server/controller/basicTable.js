import basicTable from '../models/basicTable'

const getBasicTable = async function (ctx, next) {
  const data = ctx.request.body
  console.log(111, data)
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

export default {
  getBasicTable
}
