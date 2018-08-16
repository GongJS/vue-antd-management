import KoaRouter from 'koa-router'
import UserController from './controller/user.js'
const router = KoaRouter()
export default function (app) {
  router.get('/login/:id', UserController.login)
  app.use(router.routes())
    .use(router.allowedMethods())
}
