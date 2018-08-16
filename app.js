import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './server/router'
import serve from 'koa-static'
import path from 'path'

const app = new Koa()
app.use(bodyParser())
router(app)
app.use(serve(path.resolve('dist'))) // 将webpack打包好的项目目录作为Koa静态文件服务的目录
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})

module.exports = app;
