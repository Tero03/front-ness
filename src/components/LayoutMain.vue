<script setup>
import  NavBar from './NavBar.vue' 
import  SideBarMenu from './SideBar.vue' 


</script>

<template>
    <div>
        
    </div>
    <el-container style="height: 100vh;">
    <el-header>
            <NavBar />
    </el-header>
    <el-container>
            <el-aside width="400px">
                <SideBarMenu />
            </el-aside>

        <el-main>
            <slot name="slotLayout"> </slot>
            <slot name="slotLayout2"> </slot>
        </el-main>
    </el-container>

    </el-container>
</template>


<style scoped>

.el-header{
    padding: 0;
}

.el-container{
    display: flex;
}

</style>