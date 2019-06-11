const crypto = require('crypto')

module.exports = {
  md5(buffer){
    let result = crypto.createHash('md5')
    result.update(buffer)
    console.log(result.digest('hex'))
    
  }
  // md5('123456')
}