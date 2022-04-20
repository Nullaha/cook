<script setup>
  const noUploadIng = ref(true)
  const toggleMode = ()=>{
    noUploadIng.value = !noUploadIng.value
  }
  const upload = ()=>{
    console.log('upload...');
  }
  
</script>

<template>
  <button v-if="noUploadIng" class="btn" @click="toggleMode()">+</button>
  <div class="uploadDiv" v-else>
    <button class="" @click="toggleMode()">x</button>
    <input type="text" name="name" placeholder="输入菜名" m='1' p='1'>
    <div m='1' p='1'>

      <span>用料</span>
      <button>再增加一样</button>
    </div>
    <div m='1' p='1'>
      <span>步骤1</span>
      <button>再增加一步</button>

    </div>
    <div m='1' p='1'>
      <span>照片展示</span>
      <input id="photo" type="file" name="photo" accept="image/*">
    </div>
    <button class="" @click="upload()">上传这道菜</button>
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