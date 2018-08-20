import KoaRouter from 'koa-router'
import UserController from './controller/user.js'
import BasicTableController from './controller/basicTable.js'
import CityTableController from './controller/cityTable.js'
import OrderTableController from './controller/orderTable.js'
import jwt from 'koa-jwt'
const router = KoaRouter()
export default function (app) {
  router.post('/user/login/', UserController.login)
  router.post('/api/getBasictable', jwt({secret: 'vue-koa-demo'}), BasicTableController.getBasicTable)
  router.post('/api/deleteBasictable', jwt({secret: 'vue-koa-demo'}), BasicTableController.deleteBasicTable)
  router.post('/api/getCityTable', jwt({secret: 'vue-koa-demo'}), CityTableController.getCityTable)
  router.post('/api/searchCityTable', jwt({secret: 'vue-koa-demo'}), CityTableController.searchCityTable)
  router.post('/api/createCityTable', jwt({secret: 'vue-koa-demo'}), CityTableController.createCityTable)
  router.post('/api/getOrderTable', jwt({secret: 'vue-koa-demo'}), OrderTableController.getOrderTable)
  router.post('/api/searchOrderTable', jwt({secret: 'vue-koa-demo'}), OrderTableController.searchOrderTable)
  app.use(router.routes())
    .use(router.allowedMethods())
}
