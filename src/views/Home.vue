<script setup>
import { computed, watch, watchEffect } from "@vue/runtime-core";
import recipeData from "../data/recipes.json";
//变量
const recipe = ref(recipeData); //响应式
let searchText = ref("");
const suggestRecipe = ref([]); //搜索建议
const isSearch = ref(false)

//computed
const displayedRecipe = computed(() => {
  const recipes = recipe.value.filter((item, index) => {
    return index < 100;
  });
  return recipes;
});

//methods
function focusDiv() {
  console.log("focus");
  getSearchSuggest(searchText.value);


  isSearch.value = true

}
function blurDiv() {
  console.log('blur-11111111111111111111');
  isSearch.value = false
}
function getSearchSuggest(text) {
  //根据食材匹配
  // suggestRecipe.value = recipe.value.filter((item)=>{
  //   if(text.trim()==''){
  //     return false
  //   }
  //   const tmp = item.stuff.filter(element => {
  //     return element.indexOf(text)>-1
  //   });
  //   return tmp.length>0
  // })

  //根据菜名匹配
  suggestRecipe.value = recipe.value.filter((item) => {
    if (text.trim() == "") {
      return false;
    }
    return item.name.indexOf(text) > -1;
  });
}
function clickSuggestLi(e){
  console.log('clicksuggestul')
  searchText.value = item.name
  // console.log(searchText.value)
  // console.log(item)
  // suggestRecipe.value = []
  // suggestRecipe.value.push(item)
}
//watch
watchEffect(() => {
  // this.focusDiv()
  // handle
  // console.log(searchText.value);
  getSearchSuggest(searchText.value);
});
</script>
<template>
  <p>home</p>
  <input type="text" placeholder="输入菜名" v-model="searchText" class="placeholder:text-center" @focus="focusDiv()"
    @blur="blurDiv()" />
  <ul v-show="isSearch" >
    <li class="cursor-pointer hover:text-red" v-for="(item, i) in suggestRecipe" :value="item.name" :key="i" @click="clickSuggestLi(item)">
      {{ item.name }}
    </li>
  </ul>

  <div v-show="suggestRecipe.length && !isSearch" m="5">
    <Dish v-for="(item, i) in suggestRecipe" :key="i">
      {{ item.name }}
    </Dish>
  </div>
  <div v-show="!searchText.trim() && !isSearch" m="5">
    <Dish v-for="(item, i) in displayedRecipe" :key="i">
      {{ item.name }}
    </Dish>
  </div>




  <!-- <el-button>anni</el-button>
  <button m="t-4" bg="green-600">unocss</button> -->
</template>


<style>
</style>