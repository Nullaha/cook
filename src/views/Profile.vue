<script setup>
import { computed, onMounted, watch, watchEffect } from "@vue/runtime-core";
import { exitAPI } from "../api/user";
import { Session } from '../util/cache'
import { mainStore } from "../store";
import { storeToRefs } from "pinia";
import router from "../modules/router";
const store = mainStore()

//变量
const dialogUserFormVisible = ref(false)
const formLabelWidth = '140px'
const userForm = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const dialogRecipeFormVisible = ref(false)
const recipeForm = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const dialogRecipeDetailsVisible = ref(false)
const recipeDetails = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const activeNames = ref(['1'])
const handleChange = (val) => {
    console.log(val)
}




const recipeCount = ref(2);
const recipe = ref([
    { name: '辣椒炒鱿鱼' },
    { name: '辣椒炒鱿鱼' },
    { name: '辣椒炒鱿鱼' },
    { name: '辣椒炒鱿鱼' },
    { name: '辣椒炒鱿鱼' },
    { name: '辣椒炒鱿鱼' },
    { name: '辣椒炒鱿鱼' },
    { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '辣椒炒鱿鱼' },
    // { name: '韭菜炒鸡蛋' }
])

//
onMounted(() => {
    //   getRecipeAPI().then(res=>{
    //     console.log(res);
    //     recipe.value = res.data;
    //   })
});

//computed

//methods
//退出登录
function exit() {
    exitAPI().then((res) => {
        if (res.success) {
            console.log(res.msg);
            Session.clear()
            store.$patch({ token: '' })
            router.push('/login')
        }
    })
}
const handleCommand = (command) => {
    if (command == 'editAvatar') {
        editAvatar()
    } else if (command == "editUserInfo") {
        editUserInfo()
    }
}
function editAvatar() {
    console.log('editavatar');
}
function updateUserInfo() {
    console.log('updateUserInfo');
    dialogInfoFormVisible.value = false
}
//
function updateRecipe() {
    console.log('updateRecipe');
    dialogRecipeFormVisible.value = false
}
function showRecipeDetails() {
    console.log('showRecipeDetails');
    dialogRecipeDetailsVisible.value = false
}
//watch

</script>
<template>
    <div class="profile">
        <div title="退出" class="icon-btn i-mdi-exit-to-app" @click="exit"></div>
        <div class="profile-banner" style="position:relative;display:inline-block;width:100px;height:100px;">
            <img src="https://img2.doubanio.com/icon/up53458649-13.jpg" alt="？" class="avatar">

            <el-dropdown @command="handleCommand" trigger="click"
                style="position:absolute;bottom:6px;right:0px;border-radius:50%;background-color:white;padding:4px;width:1.2em;height:1.2em;cursor:pointer">
                <div class="i-mdi-camera el-dropdown-link" style="display:inline-block;"></div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="editAvatar" disabled>更改头像</el-dropdown-item>
                        <el-dropdown-item command="editUserInfo" disabled @click="dialogInfoFormVisible = true">设置个人资料
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>

        <div id="usr-profile">
            <div class="info">
                <h1>2333</h1>
            </div>
            <!-- <div class="pic">s
            <img width="80"  src="../data/WA2.png" alt="">
            </div> -->
        </div>
        <div>
            <span style="text-decoration: underline; cursor: pointer">todo{{ recipeCount }}</span>
            <div m="5">
                <Dish v-for="(item, i) in recipe" :key="i" :dish="item" path="/profile/editRecipe" :edit="false"
                    style="padding-right:20px;" @click.self="dialogRecipeDetailsVisible = true">
                    {{ item.name }}
                    <i @click="dialogRecipeFormVisible = true" style="position:absolute;top:0px;right:0px;">
                        <div class="i-tabler-pencil hover:text-green-600"></div>
                    </i>
                </Dish>
            </div>



            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item  name="1">
                    <template #title style="text-decoration: underline; cursor: pointer">
                        todo{{ recipeCount }}
                    </template>
                    <div m="5">
                        <Dish v-for="(item, i) in recipe" :key="i" :dish="item" path="/profile/editRecipe" :edit="false"
                            style="padding-right:20px;" @click.self="dialogRecipeDetailsVisible = true">
                            {{ item.name }}
                            <i @click="dialogRecipeFormVisible = true" style="position:absolute;top:0px;right:0px;">
                                <div class="i-tabler-pencil hover:text-green-600"></div>
                            </i>
                        </Dish>
                    </div>
                </el-collapse-item>
            </el-collapse>



        </div>

        <!-- 修改个人资料-弹窗 -->
        <el-dialog v-model="dialogInfoFormVisible" title="Shipping address">
            <el-form :model="userForm">
                <el-form-item label="Promotion name" :label-width="formLabelWidth">
                    <el-input v-model="userForm.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Zones" :label-width="formLabelWidth">
                    <el-select v-model="userForm.region" placeholder="Please select a zone">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogInfoFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="updateUserInfo">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
        <!-- 更新菜谱-弹窗 -->
        <el-dialog v-model="dialogRecipeFormVisible" title="Shipping address">
            <el-form :model="recipeForm">
                <el-form-item label="Promotion name" :label-width="formLabelWidth">
                    <el-input v-model="recipeForm.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Zones" :label-width="formLabelWidth">
                    <el-select v-model="recipeForm.region" placeholder="Please select a zone">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogRecipeFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="updateRecipe">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
        <!-- 展示菜谱详情-弹窗 -->
        <el-dialog v-model="dialogRecipeDetailsVisible" title="Shipping address">
            <el-form :model="recipeDetails">
                <el-form-item label="Promotion name" :label-width="formLabelWidth">
                    <el-input v-model="recipeDetails.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Zones" :label-width="formLabelWidth">
                    <el-select v-model="recipeDetails.region" placeholder="Please select">
                        <el-option label="Zone No.1" value="shanghai" />
                    </el-select>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogRecipeDetailsVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="showRecipeDetails">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>



<style scoped>
#usr-profile {
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-banner .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
}
</style>