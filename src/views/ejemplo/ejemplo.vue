<template>
  <LayoutMain>
    <template #slotLayout> 

      <Header :titulo="'Ejemplo'" :tituloBoton="'Crear cargo'">
      
      </Header>

      <Formulario :titulo="'titulo del formulario'">
        <template #slotForm>

          <formEjemplo>

          </formEjemplo>

        </template>
      </Formulario>

      <div>
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
      </div>

    </template>

  </LayoutMain>
</template>
    
  
  <script setup>

  import { reactive } from 'vue'
  import LayoutMain from '../../components/LayoutMain.vue'
  import Header from '../../components/Header.vue'
  import Formulario from '../../components/Formulario.vue'
  import formEjemplo from './components/formEjemplo.vue'
  import {Delete,Edit} from "@element-plus/icons-vue"

  const tableData = [
  {
    name: 'Oscar',
    address: 'No. 189, Grove St, Los Angeles',
    phone: '320 321 4560',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
  
  </script>
  
