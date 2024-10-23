<template>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="1"
          background-color="#212121"
          text-color="#E2E2E2"
          class="el-menu-vertical-demo"
          collapse-transition
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Administrador</span>
            </template>
            
            <el-menu-item index="1-2">Personas</el-menu-item>
            <el-menu-item index="1-3">Cargos</el-menu-item>
            <el-menu-item index="1-4">Paises</el-menu-item>

            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon><location/></el-icon>
                <span>Configuracion</span>
              </template>

              <el-menu-item index="2-2">Personas</el-menu-item>
              <el-menu-item index="2-3">Cargos</el-menu-item>
              <el-menu-item index="2-4">Paises</el-menu-item>
            </el-sub-menu>

        </el-menu>
      </el-col>
      <el-col :span="12">
      </el-col>
    </el-row>
</template>
  
<script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'

</script>

<style scoped>

html, body{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  .el-menu-vertical-demo{
    position:fixed;
    top:59px;
    left:0px;
    width: 200px;
    height: calc(100vh - 59px);
    z-index:10;
    box-sizing:border-box;
  }
</style>