var name='小明';
var age=22;
var flag=true;
function sum(num1,num2){
    return num1+num2
}
if(flag){
    console.log(sum(21, 22));
}
/*导出变量*/
export {
    flag
}