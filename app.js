const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./server/router')
const serve = require('koa-static');
app.use(bodyParser());
const path =require('path');
app.use(serve(path.resolve('dist')));
router(app)

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})

module.exports = app;
