import request from "./request";

export function getRecipeAPI(){
    return request({
        url:'/recipe',
        methods:'get',
    })
}