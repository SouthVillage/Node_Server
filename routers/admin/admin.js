const Router = require('koa-router')


let router = new Router;

router.get('/login', async ctx => {
  await ctx.render('admin/login',{})
})
router.post('/login', async ctx => {
   ctx.body='aaa'
})

module.exports = router.routes();