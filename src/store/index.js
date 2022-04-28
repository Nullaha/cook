import {defineStore} from 'pinia'

//Todo const token = localStorage.token
const localStorage = window.localStorage


export const mainStore = defineStore('main',{
    //
    state:()=>{
        return {
            msg:'hello world',
            count :0,
            token: ''
        }
    },
    getters:{
        getCountBuff(state){
            return `${state.count}*******`
        },
        // getTokenValue(state){
        //     return localStorage.getItem('token')
        // }
    },
    actions:{
        changeState(){
            this.count++
        },
        setTokenValue(value){
            this.token = value
        }
    }
})