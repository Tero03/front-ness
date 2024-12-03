<template>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          router
          :default-active="$route.path"
          background-color="#212121"
          text-color="#E2E2E2"
          class="el-menu-vertical-demo"
          collapse-transition
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Testing</span>
            </template>
            
            <el-menu-item index="cargos">Cargos</el-menu-item>
            <el-menu-item index="pais">Paises</el-menu-item>

            </el-sub-menu>

            <el-sub-menu index="2">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Pruebas</span>
            </template>
            
            <el-menu-item index="ResultadoPruebas">Resultados generales</el-menu-item>
            <el-menu-item index="pFisicas">Pruebas fisicas</el-menu-item>
            <el-menu-item index="pTecnicas">Pruebas tecnicas</el-menu-item>
            <el-menu-item index="pGrupo">Pruebas grupales</el-menu-item>
            <el-menu-item index="examPsicologico">Examen psicologico</el-menu-item>

            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <el-icon><location/></el-icon>
                <span>Mis datos</span>
              </template>
              <el-menu-item index="equipo">Mi equipo</el-menu-item>
              <el-menu-item index="resultadoPartido">Mis juegos</el-menu-item>
              <el-menu-item index="jugadorPartido">Partidos pendientes</el-menu-item>
              <el-menu-item index="equipoPartido">Partidos de mi equipo</el-menu-item>

            </el-sub-menu>

        </el-menu>
      </el-col>
      <el-col :span="12">
      </el-col>
    </el-row>
</template>
  
<script setup>
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