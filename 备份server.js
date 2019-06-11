const Koa = require('koa')
const Router = require('koa-router')
const static = require('./routers/static')


let server = new Koa();
server.listen(8080)


//创建一个总路由
let router = new Router();


//分发小路由   在routers文件夹中 创建小路由  可以将ctx 换成小路由

router.use('/admin', require('./routers/admin/admin'))


//静态资源的缓存        这样太乱了 我们直接封装一个函数来引用模块
// router.all(/((\.jpg)|(\.gif)|(\.png))$/i, static('./static', {
//   maxage: 30 * 86400 * 1000
// }))
// router.all(/((\.js)|(\.jsx))$/i, static('./static', {
//   maxage: 1 * 86400 * 1000
// }))

static(router,{
  html:365  
})

//将总路由挂载到服务器

server.use(router.routes()) ;