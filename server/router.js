import KoaRouter from 'koa-router'
import UserController from './controller/user.js'
import BasicTableController from './controller/basicTable.js'
import jwt from 'koa-jwt'
const router = KoaRouter()
export default function (app) {
  router.post('/user/login/', UserController.login)
  router.post('/api/getBasictable', jwt({secret: 'vue-koa-demo'}), BasicTableController.getBasicTable)
  app.use(router.routes())
    .use(router.allowedMethods())
}
