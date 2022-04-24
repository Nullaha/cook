<script setup>
import { computed, onMounted, watch, watchEffect } from "@vue/runtime-core";
import recipeData from "../data/recipes.json";
import { getRecipeAPI } from "../api/home";
//变量
const recipe = ref([]); //响应式
let searchText = ref("");
const suggestRecipe = ref([]); //搜索建议

const isSearch = ref(false);


//
onMounted(()=>{
  getRecipeAPI().then(res=>{
    console.log(res);
    recipe.value = res.data;
    
  })
})


//computed
const displayedRecipe = computed(() => {
  const recipes = recipe.value.filter((item, index) => {
    return index < 100;
  });
  return recipes;
});

//methods
function focusDiv() {
  getSearchSuggest(searchText.value);
  isSearch.value = true;
}
function blurDiv() {
  isSearch.value = false;
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
function clickSuggestLi(item, e) {
  // e.preventDefault()
  searchText.value = item.name;
  isSearch.value = false;

  suggestRecipe.value = [];
  suggestRecipe.value.push(item);
}
//watch
watchEffect(() => {
  getSearchSuggest(searchText.value);
});
</script>
<template>
  <span> <div i-mdi-arrow-u-left-top class="menu-btn">fff</div>home</span>
  <div style="width:180px;display:inline-block">
    <input type="text" placeholder="输入菜名" class="placeholder:text-center"  v-model="searchText" @focus="focusDiv()"
      @blur="blurDiv()" />
    <ul v-show="isSearch" class="searchSuggestUl">
      <li v-for="(item, i) in suggestRecipe" :value="item.name" :key="i" class="cursor-pointer hover:text-red"
        @mousedown.left="clickSuggestLi(item, $event)">
        {{ item.name }}
      </li>
    </ul>

  </div>

  <div v-show="suggestRecipe.length && !isSearch" m="5">
    <Dish v-for="(item, i) in suggestRecipe" :key="i" :dish="item">
      {{ item.name }}
    </Dish>
  </div>
  <div v-show="!searchText.trim() && !isSearch" m="5">
    <Dish v-for="(item, i) in displayedRecipe" :key="i" :dish="item">
      {{ item.name }}
    </Dish>
  </div>

  <!-- <el-button>anni</el-button>
  <button m="t-4" bg="green-600">unocss</button> -->
</template>


<style>
</style>