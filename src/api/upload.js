import request from "./request";

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