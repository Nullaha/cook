import request from "./request";

export function getRecipeDetailsAPI(id){
    
    return request({
        url:'/recipe/details',
        params:{
            id,
        },
        method:'get',
    })
}