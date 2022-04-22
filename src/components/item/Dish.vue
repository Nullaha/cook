<script setup>
    import { useRouter, useRoute } from 'vue-router'
    const router =useRouter()
    const route = useRoute()

    const props = defineProps({
        dish:Object,
    })


    //
    function jumpDetails(){
        console.log(props.dish.name);
        router.push({
            path:'/details',
            query:{
                id:props.dish.uuid
            }
        })
    }
</script>
<template>
    <span class="tag" p='x-2'
    border="green " @click="jumpDetails()"
    >
        <slot />
    </span>
</template>
<style scoped>

</style>