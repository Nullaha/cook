<script setup>
import {uploadRecipeAPI} from '../api/user'

import { mainStore } from '../store';
import { storeToRefs } from 'pinia';
const store = mainStore()
// let {msg,count} = storeToRefs(store)
// const addOne =()=>{
//   // store.$patch({
//   //   count:store.count+2
//   // })
//   store.changeState()
// }
  




  //变量
  const uploadForm = ref(null)
  const noUploadIng = ref(true)
  const uploadFormData =ref({
    name:'',
    stuff:[],
    tools:'',
    photo:'',
  })


  //方法
  const toggleMode = ()=>{
    noUploadIng.value = !noUploadIng.value
  }
  
  function upload(){
    const formData = new FormData()
    formData.set('name',uploadFormData.value.name)
    formData.set('stuff',uploadFormData.value.stuff)
    formData.set('tools',uploadFormData.value.tools)
    formData.set('photo',uploadFormData.value.photo)

    uploadRecipeAPI(formData).then(res=>{
      uploadFormData.value.name=''
      uploadFormData.value.stuff=[]
      uploadFormData.value.tools=''
      uploadFormData.value.photo=''
    })
  }
  
  function getStuffData(event){
    uploadFormData.value.stuff.push(event.target.value)
  }

  function getFileData(event){
    uploadFormData.value.photo= event.target.files[0]
    event.target.value =''
  }
  
</script>

<template>
  <button v-if="noUploadIng" class="btn" @click="toggleMode()">+</button>
  <div class="uploadDiv" v-else>
    <button class="" @click="toggleMode()">x</button>
    <form ref="uploadForm" @submit.prevent>
      <input type="text" name="name" v-model="uploadFormData.name" placeholder="输入菜名" m='1' p='1'>
      <div m='1' p='1'>
        <span>用料</span>
        <input type="text" name="stuff" @change="getStuffData($event)" placeholder="用料" m='1' p='1'>
        <button>再增加一样</button>
      </div>
      <div m='1' p='1'>
        <span>步骤1</span>
        <button>再增加一步</button>

      </div>
      <input type="text" name="tools" v-model="uploadFormData.tools" placeholder="工具" m='1' p='1'>
      <div m='1' p='1'>
        <span>照片展示</span>
        <input id="photo" type="file" name="photo" accept="image/*" @change="getFileData($event)">
      </div>
      <button class="" @click="upload()">上传这道菜</button>
    </form>
  </div>
</template>



<style >
  input::placeholder{
    text-align: center;
  }
  .uploadDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
</style>