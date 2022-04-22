import axios from 'axios'

function request(config){
    const service = axios.create({
        baseURL:'http://localhost:3002',
        timeout:10000,
    })
    //请求拦截
    service.interceptors.request.use(config=>{
        //比如 token
        // console.log(config)
        return config
    },err=>{
        console.log(err)
    })
    // 响应拦截
    service.interceptors.response.use(res=>{
        // console.log(res)
        return res
    },err=>{
        console.log(err)
    })






    return service(config)
}

export default request
