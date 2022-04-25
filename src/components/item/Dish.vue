<script setup>
    import { useRouter, useRoute } from 'vue-router'


    const props = defineProps({
        // dish:Object,
        // path:String,
        active:Boolean,
    })

</script>
<template>
    <span class="tag rounded" m="2"
        border="red-200"
        :bg="active?'red-500 opacity-90' :''"
        :text="active ? 'red-100' : ''"
    >
        <slot />
    </span>
</template>
<style scoped>
    .tag{
        padding: 2px 8px;
        margin: 4px;
    }
</style>