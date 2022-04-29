import axios from 'axios'
import {Session} from '../util/cache'

function request(config){
    const service = axios.create({
        baseURL:'http://localhost:3002',
        timeout:10000,
    })
    //请求拦截
    service.interceptors.request.use(config=>{
        //比如 token
        // console.log(config)

        //让每个请求头都携带token
        config.headers['Token'] = Session.get('token')

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
