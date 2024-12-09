<template>
    <LayoutMain>
      <template #slotLayout> 
  
        <Header 
        :titulo="'registro de personas'" 
        :tituloBoton="'Registrar persona'"
        :abrir="abrirFormulario">
        
        </Header>
  
        <Formulario :titulo="'Registrar persona'" v-model:is-open="showForm" 
        :is-edit="formEditing" @save="saveData" @update="actualizarDatos">
          
          <template #slotForm>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
  
            <formPersona
            v-model:is-open="showForm" 
            :is-edit="formEditing"
            ref="formRef"
            :dataValue="dataPersonById"
            />
  
              </el-col>
            </el-row>
          </template>
        </Formulario>
  
          <el-table :data="personaTabla" stripe style="width: 100%">
            <el-table-column prop="nombre" label="Nombre" width="180" />
            <el-table-column prop="apellido" label="Apellido" width="180" />
            <el-table-column prop="edad" label="Edad" />
            <el-table-column prop="peso" label="Peso" />
            <el-table-column prop="altura" label="Altura" />
            <el-table-column fixed="right" label="Acciones" min-width="120">
              <template #default="registro">
                <el-button link type="primary" size="large" :icon="Edit" @click="editForm(registro.row.id)">Actualizar</el-button>
                <el-button link type="danger" :icon="Delete" @click="deletePerson(registro.row.id)"> Eliminar</el-button>
              </template>
            </el-table-column>
          </el-table>
  
      </template>
  
    </LayoutMain>
  </template>
      
    
    <script setup>
  
    import { onMounted, reactive, ref, watch } from 'vue'
    import {Delete,Edit} from "@element-plus/icons-vue";
    import {ElMessage, ElMessageBox} from 'element-plus'
    import LayoutMain from '../../components/LayoutMain.vue';
    import Header from '../../components/Header.vue';
    import Formulario from '../../components/Formulario.vue';
    import formPersona from './components/formPersona.vue';
    import axios from 'axios';
  
    const showForm=ref(false)
    const formEditing=ref(false)
    const formRef=ref()
    const dataPersonById=ref()
    const datosPersona=ref([])
    const personaTabla=ref([])
    
    const abrirFormulario=()=>{
      formEditing.value=false
      showForm.value=true
    }
  
    const ocultarFormulario=()=>{
      showForm.value=false
      showHeader.value=true
    }
  
    const editForm= async(id)=>{
      dataPersonById.value= await dataById(id);
      showForm.value=true
      formEditing.value=true
    }

  //ENDPOINTS

  const saveData= async()=>{

    const validation = await formRef.value?.validateForm()
    if (validation) {
      await createPerson()
    }
  }

  const actualizarDatos= async()=>{
    const validation = await formRef.value?.validateForm()
    if (validation) {
      await updatePerson()
    }
  }

  //create
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

  //update
  const updatePerson= async()=>{
    
    const url= 'http://127.0.0.1:8000/api/persona/actualizar'

    const dataForm= {
      id:dataPersonById.value[0].id,
      nombre: formRef.value.form.name,
      apellido: formRef.value.form.lastName,
      edad: formRef.value.form.age,
      peso: formRef.value.form.weight,
      altura: formRef.value.form.height
    }
    try {
      axios.put(url, dataForm)
      .then(function(response) {
        console.log(response);
        formRef.value?.formClear()
        ElMessage({
          message: 'El perfil se actualizó exitosamente',
          type: 'success',
        })
        dataPerson()
        showForm.value= false

      })
      .catch(function(error) {
        console.log(error)
      })

    } catch (error) {
      console.error('error al crear perfil', error)
    }

  }

  const dataById= async(id)=>{

    const url='http://127.0.0.1:8000/api/persona/datosById'

    try {
      const response= axios.get(url, {
        params:{
          id: id
        }
      })
      return (await response).data.result

    } catch (error) {
      console.error('Error al crear perfil ', error)
    }
  }

  //delete
  const deletePerson= async(id)=>{

    const url='http://127.0.0.1:8000/api/persona/eliminar'

    ElMessageBox.confirm(
    '¿Esta seguro de eliminar este perfil?',
    'Eliminar registro',
    {
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar',
      type: 'warning',
    }
  )
    .then(() => {

      try{
      axios.delete(url,  {data:{id}})
      .then(function(response){
        getData()
      })
      .catch(function(error){
        console.log(error)
      })
    }
    catch{
      console.error("error al crear perfil", error)
    }

      ElMessage({
        type: 'success',
        message: 'Se eliminó correctamente.',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Eliminación cancelada.',
      })
    })
  }
  
  
  const dataPerson= async()=>{

    const url='http://127.0.0.1:8000/api/persona/datos'

    try{
      axios.get(url)
      .then(function(response){
        personaTabla.value=response.data.result
        console.log(response)
      })

      .catch(function(error){
  
      })
    }
    catch{
      console.error("error al crear perfil", error)
    }
  }

  const getData= async()=>{

    const url='http://127.0.0.1:8000/api/persona/datos'

    try{
      axios.get(url)
      .then(function(response){
        datosPersona.value=response.data
        //console.log(response)
      })

      .catch(function(error){
  
      })
    }
    catch{
      console.error("error al crear perfil", error)
    }
  }

  onMounted(()=>{
    getData()
    dataPerson()
  })
</script>
    
  
