const fs = require('fs') //生成一个2048keys值

const KEYS_LEN = 1024;
const KEY_COUNT = 2048;
const CHARS = 'ABCDEFGHIJIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/*-[](){}|!@#$%^&';

let arr = [];
for (let i = 0; i < KEYS_LEN; i++) {
  key = '';
  for (let j = 0; j < KEY_COUNT; j++) {
    key += CHARS[Math.floor(Math.random() * CHARS.length)]
  }
  arr.push(key)
}

fs.writeFileSync('./keys', arr.join('\n'))