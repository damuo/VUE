// node(CommonJS)模块化规范方式引入
const {add,mul} = require('./math.js');

//ES6模块化规范方式引入
/*import * as info from './math'*/

alert(add(20, 30));
alert(mul(20, 30));

// node(CommonJS)模块化规范方式引入
/*const {add,mul} = require('./info.js')*/

//ES6模块化规范方式引入
import * as info from './info'
//调用方法
console.log(info.name);
console.log(info.age);

