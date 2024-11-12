<template>
  <el-menu
    :default-active="activeIndex"
    background-color="#171717"
    text-color="#E2E2E2"
    class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >

    <el-sub-menu index="0">
      <template #title>Usuario</template>
      <el-menu-item index="1-1">Perfil</el-menu-item>
      <el-menu-item index="1-2">Cerrar sesion</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3" :popper-offset="8">
      <template #title>Override Popper Offset</template>
      <el-menu-item index="3-1">item one</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
      <el-menu-item index="3-3">item three</el-menu-item>
      <el-sub-menu index="3-4" :popper-offset="20">
        <template #title>override child</template>
        <el-menu-item index="3-4-1">item one</el-menu-item>
        <el-menu-item index="3-4-2">item two</el-menu-item>
        <el-menu-item index="3-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="4" disabled>Info</el-menu-item>
    <el-menu-item index="5">Orders</el-menu-item>
  </el-menu>
</template>

<script setup></script>

<style scoped>

  html, body{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  .el-menu-demo{
    position:fixed;
    top:0px;
    left:0px;
    box-sizing:border-box;
    width:100%;
    z-index:10;
  }
</style>
