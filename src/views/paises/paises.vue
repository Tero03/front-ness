<template>
    <LayoutMain>
      <template #slotLayout> 
  
        <Header 
        :titulo="'paises'" 
        :tituloBoton="'Añadir pais'"
        :abrir="abrirFormulario">
        
        </Header>
  
        <Formulario :titulo="'titulo del formulario'" v-model:is-open="showForm" :is-edit="formEditing" @save="saveData">
          
          <template #slotForm>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
  
            <formPaises 
            v-model:is-open="showForm" 
            :is-edit="formEditing"
            ref="formRef"
            
            />
  
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
  
    import {reactive, ref} from 'vue';
    import {Delete,Edit} from "@element-plus/icons-vue";
    import {ElMessage} from 'element-plus'
    import LayoutMain from '../../components/LayoutMain.vue';
    import Header from '../../components/Header.vue';
    import Formulario from '../../components/Formulario.vue';
    import formPaises from './components/formPaises.vue';
    import axios from 'axios';
  
    const showForm=ref(false)
    const formEditing=ref(false)
    const formRef=ref()
    
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

  //ENDPOINTS

  const saveData= async()=>{

    const validation = await formRef.value?.validateForm()

    if(validation){
      await createPerson()
    }
  }

  const createPerson= async()=>{

    const url='http://127.0.0.1:8000/api/persona/guardar'

    //Los datos de formPaises vienen y se guardan en esta variable
    const dataForm={
      nombre: formRef.value?.form.name,
      apellido: formRef.value?.form.lastName,
      edad: formRef.value?.form.age,
      peso: formRef.value?.form.weight,
      altura: formRef.value?.form.height
    }

    try{
      axios.post(url, dataForm)
      .then(function(response){
      formRef.value?.formClear()

      ElMessage({
        message: 'Se agrego a la persona correctamente',
        type: 'success',
      })
  
      })
      .catch(function(error){
  
      })
    }
    catch{
      console.error("error al crear perfil", error)
    }
    
    

  }
  
  const updatePerson= async()=>{
    console.log("datos de persona actualizados")
  }

  const deletePerson= async()=>{
    console.log("perfil eliminado")
  }
  
  const dataPerson= async()=>{
    console.log("Datos del perfil")
  }

  /* const dataArea= async()=>{
    
    const url='http://127.0.0.1:8000/api/persona/guardar'

    try{
      axios.get(url)
      .then(function(response){

  
      })
      .catch(function(error){
  
      })
    }
    catch{
      console.error("error al crear perfil", error)
    }
    
  } */

</script>
    
  
