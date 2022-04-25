<script setup>
    import { useRouter, useRoute } from 'vue-router'


    const props = defineProps({
        // dish:Object,
        // path:String,
        active:Boolean,
    })

</script>
<template>
    <span class="tag" p='x-2'
        border="green"
        :bg="active?'red-500 opacity-90' :''"
        :text="active ? 'red-100' : ''"
    >
        <slot />
    </span>
</template>
<style scoped>

</style>