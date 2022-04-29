<script setup>
// import { watch, watchEffect } from "@vue/runtime-core";
// import { useRoute, useRouter } from "vue-router";
    
</script>
<template>
    <nav p="y-4">
        <router-link  class="menu-btn" to="/home" title="首页">
            <div class="icon" i-ri-home-3-line/>
            首页
        </router-link>
        <router-link  class="menu-btn" to="/search" title="查找">
            <div class="icon" i-ri-search-line />
            查找
        </router-link>
        <router-link  class="menu-btn" to="/upload" title="上传">
            <div class="icon" i-ri-upload-2-fill />
            上传
        </router-link>
        <router-link class="menu-btn" to="/profile" title="我的">
            <div class="icon" i-mdi-nature-people />
            我的
        </router-link>
    </nav>
</template>
<style scoped>
.router-link-active {
    color: green;
}
.icon{
    width: 1.5em;
    height: 1.5em;
}
nav{
    height: 22px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: #fff;
    box-shadow: 0 1px 4px rgb(0 0 0 / 5%);
}
</style>