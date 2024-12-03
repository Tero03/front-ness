<script setup>
import  NavBar from './NavBar.vue' 
import  SideBarMenu from './SideBar.vue' 
</script>

<template>

    <el-container style="height: 190vh;">
    <el-header>
            <NavBar />
    </el-header>

    <el-container>
            <el-aside width="190px">
                <SideBarMenu />
            </el-aside>

        <el-main class="main-content">
            <slot name="slotLayout"> </slot>
            <slot name="slotLayout2"> </slot>

        </el-main>
    </el-container>

    </el-container>
</template>


<style scoped>

.el-header{
    padding:0px;
    height:51px;
}

.el-aside{
    background-color:#f4f4f4;
}

.main-content{
    position:relative;
}

</style>