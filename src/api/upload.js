import request from "./request";

export function uploadRecipeAPI(data){
    return request({
        method:'post',
        url:'/uploadRecipe',
        data:{

        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
}