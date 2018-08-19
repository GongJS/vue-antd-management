import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './server/router'
import serve from 'koa-static'
import path from 'path'

const app = new Koa()
app.use(bodyParser())
app.use(async function (ctx, next) {  //  如果JWT验证失败，返回验证失败信息
  try {
    await next()
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = {
        success: false,
        token: null,
        info: '没有权限'
      }
    } else {
      throw err
    }
  }
})
router(app)
app.use(serve(path.resolve('dist'))) // 将webpack打包好的项目目录作为Koa静态文件服务的目录
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})

module.exports = app;
