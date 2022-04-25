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
            <table m="b-4 x-4">
                <tbody>
                    <tr v-for="(item, i) in details.stuff" :key="i" style="border-bottom: 1px solid #f3f4f5;">
                        <td style="width:200px;">{{item}}</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <!-- <ul class="commonUl">
                <li v-for="(item, i) in details.stuff" :key="i">{{ item }}</li>
            </ul> -->
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