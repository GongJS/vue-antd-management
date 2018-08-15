const router = require('koa-router')()
const UserController = require('./controller/user')
module.exports = (app) => {
  router.get( '/login', HomeController.login )
  app.use(router.routes())
    .use(router.allowedMethods())
}
