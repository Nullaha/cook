<script setup>
import { computed, onMounted, watch, watchEffect } from "@vue/runtime-core";
// import Login from "../components/Login.vue";

//变量
const recipeCount = ref(2);
const recipe =ref([{
    name:'辣椒炒鱿鱼'
},{
    name:'韭菜炒鸡蛋'
}])

//
onMounted(() => {
    //   getRecipeAPI().then(res=>{
    //     console.log(res);
    //     recipe.value = res.data;
    //   })
});

//computed

//methods

//watch

</script>
<template>
    <div>
        <div id="usr-profile">
            <div class="info">
                <h1>2333</h1>
            </div>
            <!-- <div class="pic">s
            <img width="80"  src="../data/WA2.png" alt="">
        </div> -->
        </div>
        <div>
            <span style="text-decoration: underline; cursor: pointer">菜谱{{ recipeCount }}</span>
            <div m="5">
                <Dish v-for="(item, i) in recipe" :key="i" :dish="item" path="/profile/editRecipe">
                    {{ item.name }}
                </Dish>
            </div>
        </div>
    </div>
</template>


<style scoped>
#usr-profile {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>