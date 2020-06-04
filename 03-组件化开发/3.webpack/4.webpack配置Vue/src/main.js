// node(CommonJS)模块化规范方式引入
const {add,mul} = require('./js/mathUtils.js');
//ES6模块化规范方式引入
import * as info from './js/info'
//依赖css文件
require('./css/normal.css');
//依赖less文件
require('./css/special.less');

//调用方法
console.log(add(20, 30));
console.log(mul(20, 30));
//调用方法
console.log(info.name);
console.log(info.age);

//npm转载Vue.js
import Vue from 'vue';
const app=new Vue({
    el:"#app",
    data:{
        name:'Tony'
    },
    methods:{

    }
})

