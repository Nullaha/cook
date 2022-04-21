<script setup>
// 通过recipeId，调接口获取详情数据把
    import { useRouter, useRoute } from 'vue-router'
    const router =useRouter()
    const route = useRoute()
    const name =ref(router.currentRoute.value.query.dish.name)
    console.log(router.currentRoute.value.query.dish.name)
</script>
<template>
    <p>details</p>
    {{name}}
</template>