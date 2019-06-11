const Koa = require('koa')
const Router = require('koa-router')
const static = require('./routers/static')
const body = require('koa-better-body')
const path = require('path')
const fs = require('fs')



let server = new Koa();
server.listen(8080)



//中间件
server.use(body({
  uploadDir: path.resolve(__dirname, './static/upload')
}))

//数据库
server.context.db = require('./Libs/mysql')

//生成key
server.keys = fs.readFileSync('./keys').toString().split('\n')

//对错误进行统一处理
server.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.state = 500;
    ctx.body = 'Internal Server Error'
  }
})


//静态资源和路由

let router = new Router();

router.use('/admin', require('./routers/admin/admin'));

static(router)



server.use(router.routes());