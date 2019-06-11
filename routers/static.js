const static = require('koa-static');


//完整版  如果有想控制缓存天数就赋值给options   不想控制就默认
module.exports = function(router,options){
  options = options||{};
  options.script = options.script||1;
  options.style = options.style||30;
  options.html = options.html||30;
  options.image = options.image||30;
  router.all(/((\.js)|(\.jsx))$/i,static('./static',{  //这里并不是../
    maxage: options.script*86400*1000
  }))
  router.all(/((\.html)|(\.htm))$/i,static('./static',{
    maxage:options.html*86400*1000
  }))
  router.all(/((\.png)|(\.jpg)|(\.gif))$/i,static('./static',{
    maxage:options.image*86400*1000
  }))
  router.all(/(\.css)$/i,static('./static',{
    maxage:options.style*86400*1000
  }))
}






//简易版本
// module.exports = function(router){
//   router.all(/((\.js)|(\.jsx))$/i,static('./static',{  //这里并不是../
//     maxage:1*86400*1000
//   }))
//   router.all(/((\.html)|(\.htm))$/i,static('./static',{
//     maxage:30*86400*1000
//   }))
// }

