import request from "./request";
import {defineStore} from 'pinia'

//登录
export function loginAPI(data){
    // return request({
    //     url:'/user/login',
    //     methods:'post',
    //     data,
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     },
    // })
    return new Promise((resolve,reject)=>{
        resolve({
            success : true,
            msg:"登录成功",
            token:'wo-shi-token'
        })
    })
}

//退出
export function exitAPI(){
    // return request({
    //     url:'/user/exit',
    //     methods:'post',
    // })
    return new Promise((resolve,reject)=>{
        resolve({
            success : true,
            msg:"退出登陆成功"
        })
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