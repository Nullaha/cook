<script setup>
// 通过recipeId，调接口获取详情数据把
import { onMounted } from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router'
import { getRecipeDetailsAPI } from '../api/details';
    const router =useRouter()
    const route = useRoute()

    const details = ref({})


    //
    onMounted(()=>{
        getRecipeDetailsAPI(router.currentRoute.value.query.id).then(res=>{
            details.value = res.data[0]
        })
    })
    
</script>
<template>
    <p>details</p>
    <h2>{{details.name}}</h2>
    <div class="item">
        <span class="item-name">用料</span>
        <ul class="commonUl">
            <li v-for="(item,i) in details.stuff" :key="i">{{item}}</li>
        </ul>
    </div>
    <div class="item">
        <span class="item-name">做法</span>
        <div></div>
    {{details.tools}}
    </div>
</template>
<style scoped>
    .item{
        display: flex;
        justify-content: center;
    }
    .item-name{

    }
</style>