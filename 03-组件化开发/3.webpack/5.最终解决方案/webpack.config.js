//node包获取地址
const path=require('path');
const { VueLoaderPlugin } = require('vue-loader');
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
    },
    plugins: [
        //Vue Loader插件
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            //给css结尾的装载
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            //给less结尾的装载
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            },
            //给图片装载
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //限制可显示图片
                            limit: 1000,
                            //拓展名拼接设置
                            name:'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            //ES6转换ES5
            {
                test: /\.js$/,
                //排除无需转换的
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            //vue
            {
                test:/\.vue$/,
                use:'vue-loader'  //处理 .vue 文件的 loader
            }
        ]
    },
    //解决问题
    resolve:{
        //引用时省略后缀
        extensions:['.js','.css','.vue'],
        //更改vue构建版本类型
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
};