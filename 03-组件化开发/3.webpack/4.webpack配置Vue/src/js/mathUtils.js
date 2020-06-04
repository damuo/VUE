//方法
function add(num1,num2) {
    return num1+num2;
}
function mul(num1,num2) {
    return num2*num1;
}
//node(CommonJS)模块化规范方式导出
module.exports={
    add,
    mul
};
//ES6模块化规范方式导出
/*export {add,mul}*/

