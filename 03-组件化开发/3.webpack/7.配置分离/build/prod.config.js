//js压缩插件
const uglifyJsPlugin=require('uglifyjs-webpack-plugin');
//合并配置文件
const webpackMerge=require('webpack-merge');
const baseConfig=require('./base.config');
//开始合并
module.exports=webpackMerge(baseConfig,{
    plugins: [
        new uglifyJsPlugin()
    ]
})


