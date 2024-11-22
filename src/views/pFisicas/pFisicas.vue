<template>
    <LayoutMain>
      <template #slotLayout> 
  
        <Header 
        :titulo="'pruebas fisicas'" 
        :tituloBoton="'Crear cargo'"
        :abrir="abrirFormulario">
        
        </Header>
  
        <Formulario 
        :titulo="'titulo del formulario'" 
        v-model:show="showForm">
          <template #slotForm>
  
            <formEjemplo>
  
            </formEjemplo>
  
          </template>
        </Formulario>
  
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="Nombre" width="180" />
            <el-table-column prop="address" label="Direccion" width="180" />
            <el-table-column prop="phone" label="Telefono" />
            <el-table-column fixed="right" label="Acciones" min-width="120">
              <template #default>
                <el-button link type="primary" size="large" :icon="Edit">Actualizar</el-button>
                <el-button link type="danger" :icon="Delete"> Eliminar</el-button>
              </template>
            </el-table-column>
          </el-table>
  
      </template>
  
    </LayoutMain>
  </template>
      
    
    <script setup>
  
    import {reactive, ref} from 'vue'
    import LayoutMain from '../../components/LayoutMain.vue'
    import Header from '../../components/Header.vue'
    import Formulario from '../../components/Formulario.vue'
    import {Delete,Edit} from "@element-plus/icons-vue"
  
    const showForm=ref(false)
    const showHeader=ref(true)
  
    const abrirFormulario=()=>{
      showForm.value=true
    }
  
    const ocultarFormulario=()=>{
      showForm.value=false
      showHeader.value=true
    }
    
  
    const tableData = [
    {
      name: 'Oscar',
      address: 'No. 189, Grove St, Los Angeles',
      phone: '320 321 4560',
    }
  ]
    
    </script>
    
  