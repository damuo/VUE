//合并配置文件
const webpackMerge=require('webpack-merge');
const baseConfig=require('./base.config');
//开始合并
module.exports=webpackMerge(baseConfig,{
    devServer:{
        //监听位置
        contentBase:'./dist',
        //开启实时监听
        inline:true
    }
})

