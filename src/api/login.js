import request from "./request";
import {defineStore} from 'pinia'

export function loginAPI(data){
    return request({
        url:'/login',
        methods:'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    })
}