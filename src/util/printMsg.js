
export const printMsg ={
    printFormData(formdata){
        let arr =[]
        formdata.forEach((value,key)=>{
            arr.push(key+'='+value)
        })
        console.log(arr);
        return arr
    }



}