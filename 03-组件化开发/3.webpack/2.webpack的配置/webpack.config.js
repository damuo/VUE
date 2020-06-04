//node包获取地址
const path=require('path');
//导出模块
module.exports={
    entry:'./src/main.js',
    output:{
        //路径拼接:__dirname 当前文件所在路径;dist 拼接的路径名
        path:path.resolve(__dirname,'dist'),
        //文件名称
        filename:'bundle.js',
        //公共导出路径
        publicPath:'dist/'
    }
};