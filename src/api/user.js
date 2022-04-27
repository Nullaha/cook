import request from "./request";
import {defineStore} from 'pinia'

//登录
export function loginAPI(data){
    return request({
        url:'/user/login',
        methods:'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
}

//退出
export function exitAPI(){
    return request({
        url:'/user/exit',
        methods:'post',
    })
}

//获取用户信息
export function getUserInfo(token) {
    return request({
        url:'/user/getInfo',
        methods:'get',
        params:{token}
    })
}

//修改用户信息
export function updateInfo(data){
    return request({
        url:'/user/updateInfo',
        methods:'post',
        data
    })
}




//上传菜谱
export function uploadRecipeAPI(data){
    debugger
    console.log(data);
    return request({
        method:'post',
        // url:'/uploadRecipe',
        url:'/uploadFile',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
}