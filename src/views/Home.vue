<script setup>
import { computed } from '@vue/runtime-core'
import recipeData from '../data/recipes.json'

const recipe = ref(recipeData)//响应式

const displayedRecipe = computed(()=>{
  // const recipes =recipe.value.filter(item=>{

  // })
  const recipes = recipe.value
  console.log(recipes);
  return recipes
})
</script>
<template>
  <p>home</p>
  <input type="text">
  <div>{{displayedRecipe}}</div>
  <el-button>anni</el-button>
  <button m="t-40" bg="green-600">unocss</button>
</template>


<style>

</style>