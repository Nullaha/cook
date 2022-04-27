import request from "./request";

export function getRecipeAPI(){
    return request({
        url:'/recipe',
        methods:'get',
    })
}

export function getRecipeDetailsAPI(id){
    
    return request({
        url:'/recipe/details',
        params:{
            id,
        },
        method:'get',
    })
}