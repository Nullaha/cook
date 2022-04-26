import {defineStore} from 'pinia'

//Todo const token = localStorage.token


export const useStore = defineStore('main',{
    //
    state:()=>{
        return {
            msg:'hello world'
        }
    },
    getters:{},
    actions:{}
})