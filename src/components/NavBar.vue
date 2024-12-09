<template>
  <el-menu
    router
    :default-active="$route.path"
    background-color="#171717"
    text-color="#E2E2E2"
    class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >

    <el-sub-menu index="0">
      <template #title>Usuario</template>
      <el-menu-item index="jugador">Perfil</el-menu-item>
      <el-menu-item index="armaPartido">Armar partido</el-menu-item>
      <el-menu-item index="equipo">Mi equipo</el-menu-item>
      <el-menu-item index="/">Cerrar sesion</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/registro">Registrar persona</el-menu-item>
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
    margin-bottom:0px;
    left:0px;
    box-sizing:border-box;
    width:100%;
    z-index:10;
  }

</style>
