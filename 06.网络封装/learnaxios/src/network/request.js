import axios from 'axios'
/*
export function request(config,succes,failure) {
    //配置axios实例
    const instance1=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //发送请求
    instance1(config).then(res=>{
        succes(res)
    }).catch(err=>{
        failure(err)
    })
}
*/
/*export function request(config) {
    //配置axios实例
    const instance1=axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //发送请求
    instance1(config.baseConfig).then(res=>{
        config.succes(res)
    }).catch(err=>{
        config.failure(err)
    })
}*/
/*export function request(config) {
    return new Promise((resolve,reject)=>{
        //配置axios实例
        const instance1 = axios.create({
            baseURL: 'http://123.207.32.32:8000',
            timeout: 5000
        })
        //发送请求
        instance1(config)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}*/
export function request(config) {
    //配置axios实例
    const instance1 = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    //axios请求拦截器
    instance1.interceptors.request.use(config=>{
        //请求成功
        console.log(config);
        /*此处按场景进行相关操作:
        1.修正config中不符合要求的数据，如header等
        2.发送请求中显示等待图标
        3.获取URL判断token是否符合，否则跳转到指定页面
        */
        //操作完毕后必须必须返回config,否则请求将被拦截下来。
        return config;
    },err=>{
        //请求失败
        console.log(err);
    });
    //axios响应拦截器
    instance1.interceptors.response.use(result=>{
        //响应成功
        console.log(result);
        //操作完毕后必须返回result或者|result中的data，否则响应数据将被拦截下来
        return result.data;
    },err=>{
        //响应失败
        console.log(err);
    });
    //发送请求(返回的是一个Promise)
    return instance1(config)
}