/**
* window.sessionStorage 浏览器临时缓存
* @method set 设置临时缓存
* @method get 获取临时缓存
* @method remove 移除临时缓存
* @method clear 移除全部临时缓存
*/
const sessionStorage = window.sessionStorage
export const Session ={

    set(key,val){
        sessionStorage.setItem(key,JSON.stringify(val))
    },
    get(key){
        const val =sessionStorage.getItem(key)
        return JSON.parse(val)
    },
    remove(key){
        sessionStorage.removeItem(key)
    },
    clear(){
        sessionStorage.clear()
    }




}