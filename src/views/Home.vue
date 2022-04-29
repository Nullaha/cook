<script setup>
import { computed, onMounted, watch, watchEffect } from "@vue/runtime-core";
import recipeData from "../data/recipes.json";
import { getRecipeAPI,getRecipeDetailsAPI } from "../api/home";


import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
//变量
const router = useRouter()
const route = useRoute()
const recipe = ref([]); //响应式
let searchText = ref("");
const suggestRecipe = ref([]); //搜索建议

const isSearch = ref(false);

const curRecipeId = ref('')

const details = ref([])


//
onMounted(() => {
  getRecipeAPI().then(res => {
    console.log(res);
    recipe.value = res.data;

  })
})
onBeforeRouteLeave((to, from) => {
  // const answer = window.confirm(
  //   'Do you really want to leave? you have unsaved changes!'
  // )
  // // 取消导航并停留在同一页面上
  // if (!answer) return false

})


//computed
const displayedRecipe = computed(() => {
  const recipes = recipe.value.filter((item, index) => {
    return index < 20;
  });
  return recipes;
});

//methods
function focusDiv() {
  getSearchSuggest(searchText.value);
  isSearch.value = true;

  details.value = []
  curRecipeId.value = ''
  toggleRecipe()

}
function blurDiv() {
  isSearch.value = false;
}
//获取搜索建议菜谱
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
//点击搜索建议菜谱
function clickSuggestLi(item, e) {
  // e.preventDefault()
  searchText.value = item.name;
  isSearch.value = false;

  suggestRecipe.value = [];
  suggestRecipe.value.push(item);
}

//点击菜谱
function toggleRecipe(id) {
  if (curRecipeId.value && id && curRecipeId.value == id) {
    curRecipeId.value = ''
    details.value = []
    return
  }
  curRecipeId.value = id
  getDetails(id)

}


//获取菜谱详情
function getDetails(id) {
  getRecipeDetailsAPI(id).then(res => {
    details.value = res.data
  })
}

//watch
watchEffect(() => {
  //获取首页数据
  getSearchSuggest(searchText.value);
})
</script>
<template>
<div class="home">
  <!-- <p>home</p> -->
  <div style="width:180px;display:inline-block">
    <input type="text" placeholder="输入菜名" class="placeholder:text-center" v-model="searchText" @focus="focusDiv()"
      @blur="blurDiv()" />
    <ul v-show="isSearch" class="searchSuggestUl">
      <li v-for="(item, i) in suggestRecipe.slice(0, 5)" :value="item.name" :key="i"
        class="cursor-pointer hover:text-red" @mousedown.left="clickSuggestLi(item, $event)">
        {{ item.name }}
      </li>
    </ul>
  </div>

  <div v-show="suggestRecipe.length && !isSearch" m="5" >
    <Dish v-for="(item, i) in suggestRecipe" :key="i" 
      :active="curRecipeId == item.uuid" @click="toggleRecipe(item.uuid)">
      {{ item.name }}
    </Dish>
  </div>
  <div v-show="!searchText.trim() && !isSearch" m="5" >
    <Dish v-for="(item, i) in displayedRecipe" :key="i"
      :active="curRecipeId == item.uuid" @click="toggleRecipe(item.uuid)">
      {{ item.name }}
    </Dish>
  </div>



  <Details v-if="details.length" :details="details[0]">

  </Details>








  <!-- <el-button>anni</el-button>
  <button m="t-4" bg="green-600">unocss</button> -->
</div>
</template>


<style scoped>
</style>