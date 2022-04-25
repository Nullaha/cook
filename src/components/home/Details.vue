<script setup>
const props = defineProps({
    details: Object
})

</script>
<template>
    <div id="details">
        <!-- <div class="menu-btn" i-mdi-arrow-u-left-top  /> -->
        <h1>details</h1>
        <h2>{{ details.name }}</h2>
        <div class="item">
            <span class="item-name">用料</span>
            <ul class="commonUl">
                <li v-for="(item, i) in details.stuff" :key="i">{{ item }}</li>
            </ul>
        </div>
        <div class="item">
            <span class="item-name">做法</span>
            <div></div>
            {{ details.tools }}
        </div>
        
        <slot />
    </div>

</template>
<style scoped>
.item {
    display: flex;
    justify-content: center;
}
</style>