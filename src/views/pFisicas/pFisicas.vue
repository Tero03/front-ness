<template>
  <LayoutMain>
    <template #slotLayout> 

      <Header 
      :titulo="'pruebas fisicas'" 
      :tituloBoton="'ejercicios'"
      :abrir="abrirFormulario">
      
      </Header>

      <Formulario :titulo="'Ejercicios fisicos'" v-model:is-open="showForm" :is-edit="formEditing">
        
        <template #slotForm>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

          <formFisico v-model:is-open="showForm" :is-edit="formEditing"/>

            </el-col>
          </el-row>
        </template>
      </Formulario>

        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="name" label="Nombre" width="180" />
          <el-table-column prop="address" label="Direccion" width="180" />
          <el-table-column prop="phone" label="Telefono" />
          <el-table-column fixed="right" label="Acciones" min-width="120">
            <template #default>
              <el-button link type="primary" size="large" :icon="Edit" @click="editForm">Actualizar</el-button>
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
  import formFisico from './components/formFisico.vue'
  import {Delete,Edit} from "@element-plus/icons-vue"

  const showForm=ref(false)
  const formEditing=ref(false)
  
  const abrirFormulario=()=>{
    formEditing.value=false
    showForm.value=true
  }

  const ocultarFormulario=()=>{
    showForm.value=false
    showHeader.value=true
  }

  const editForm= async()=>{
    showForm.value=true
    formEditing.value=true
  }
  

  const tableData = [
  {
    name: 'Oscar',
    address: 'No. 189, Grove St, Los Angeles',
    phone: '320 321 4560',
  }
]
  
  </script>
  
