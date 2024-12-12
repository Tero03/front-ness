<template>
    <LayoutMain>
      <template #slotLayout> 
  
        <Header 
        :titulo="'pruebas de tecnica'" 
        :tituloBoton="'ejercicios'"
        :abrir="abrirFormulario">
        
        </Header>
  
        <Formulario 
        :titulo="'Ejercicios de tecnica'" 
        v-model:is-open="showForm" 
        :is-edit="formEditing"
        @save="saveData"
        @update="actualizarDatos">
          
          <template #slotForm>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
  
            <formTecnicas 
            v-model:is-open="showForm" 
            :is-edit="formEditing"
            ref="formRef"
            :dataValue="dataFileById"/>
  
              </el-col>
            </el-row>
          </template>
        </Formulario>
  
          <el-table :data="resultadosTabla" stripe style="width: 100%">
            <el-table-column prop="centros_remates_delanteros_extremos" label="Centro y remates" width="180"/>
            <el-table-column prop="marcaje_individual_zonal" label="Marcaje individual" width="180" />
            <el-table-column prop="dribbling_conos" label="Dribbling conos" width="180" />
            <el-table-column prop="dribbling_espacio_reducido" label="Dribbling reducido" width="180"/>
            <el-table-column prop="dribbling_velocidad_maxima" label="Dribbling velocidad" width="180"/>
            <el-table-column prop="dribbling_cambio_direccionYritmo" label="Dribbling direccion" width="180"/>
            <el-table-column prop="tiro_arco_distancia" label="Tiros al arco" width="180"/>
            <el-table-column prop="tiro_arco_angulo" label="Tiros en angulo" width="180"/>
            <el-table-column prop="tiro_arco_precision_potencia" label="Tiros de precisión" width="180"/>
            <el-table-column prop="dribbling_espacio_reducido" label="Tiros en movimiento" width="180"/>
            <el-table-column fixed="right" label="Acciones" min-width="120">
              <template #default="registro">
                <el-button 
                link type="primary" 
                size="large" 
                :icon="Edit" 
                @click="editForm(registro.row.id)">Actualizar</el-button
                >
                <el-button 
                link type="danger" 
                :icon="Delete"
                @click="deletePerson(registro.row.id)">Eliminar</el-button
                >
              </template>
            </el-table-column>
          </el-table>
  
      </template>
  
    </LayoutMain>
  </template>
      
    
    <script setup>
  
    import {reactive, ref, onMounted, watch } from 'vue'
    import { ElMessage, ElMessageBox } from "element-plus";
    import LayoutMain from '../../components/LayoutMain.vue'
    import Header from '../../components/Header.vue'
    import Formulario from '../../components/Formulario.vue'
    import formTecnicas from './components/formTecnicas.vue'
    import {Delete,Edit} from "@element-plus/icons-vue"
    import axios from "axios";
  
    const showForm=ref(false)
    const formEditing=ref(false)
    const formRef = ref();
    const dataFileById = ref();
    const resultadosMental = ref([]);
    const resultadosTabla = ref([]);
    
    //this funcion shows the form
    const abrirFormulario=()=>{
      formEditing.value=false
      showForm.value=true
    }
  
    //this function hide the form
    const ocultarFormulario=()=>{
      showForm.value=false
      showHeader.value=true
    }
  
    //This function obtains row Id to modified it
    const editForm = async (id) => {
      dataFileById.value = await dataById(id);
      showForm.value = true;
      formEditing.value = true;
    };
    
  
//ENDPOINTS

//CREATE
const createFile = async () => {
  const url = "http://127.0.0.1:8000/api/ptecnica/guardar";

  const dataForm = {

    id_persona: 1,
    centros_remates_delanteros_extremos: formRef.value.form.centroRemates,
    marcaje_individual_zonal: formRef.value.form.marcajeIndividual,
    dribbling_conos: formRef.value.form.dribblingConos,
    dribbling_espacio_reducido: formRef.value.form.dribblingReducido,
    dribbling_velocidad_maxima: formRef.value.form.dribblingVelocidad,
    dribbling_cambio_direccionYritmo: formRef.value.form.dribblingDireccion,
    tiro_arco_distancia: formRef.value.form.tirosArco,
    tiro_arco_angulo: formRef.value.form.tirosAngulo,
    tiro_arco_precision_potencia: formRef.value.form.tirosPrecision,
    tiro_arco_movimiento: formRef.value.form.tirosMovimiento,
  };

  try {
    axios
      .post(url, dataForm)
      .then(function (response) {
        formRef.value?.formClear();

        ElMessage({
          message: "Se agregaron los resultados correctamente",
          type: "success",
        });
      })
      .catch(function (error) {});
  } catch {
    console.error("error al crear perfil", error);
  }
};
//GET

//this function obtains all the data from data base to print it to the table
const dataFile = async () => {
  const url = "http://127.0.0.1:8000/api/ptecnica/datos";

  try {
    axios
      .get(url)
      .then(function (response) {
        resultadosTabla.value = response.data.result;
        console.log(response);
      })

      .catch(function (error) {});
  } catch {
    console.error("error: ", error);
  }
};

//this function obtains the data from a specific id
const dataById = async (id) => {
  const url = "http://127.0.0.1:8000/api/ptecnica/datosById";

  try {
    const response = axios.get(url, {
      params: {
        id: id,
      },
    });
    return (await response).data.result;
  } catch (error) {
    console.error("Error al crear perfil ", error);
  }
};

//this funcion is a get, obtain all the data from psicologia tablet
const getData = async () => {
  const url = "http://127.0.0.1:8000/api/ptecnica/datos";

  try {
    axios
      .get(url)
      .then(function (response) {
        resultadosPersona.value = response.data;
        //console.log(response)
      })

      .catch(function (error) {});
  } catch {
    console.error("error al obtener resultados: ", error);
  }
};

//UPDATE
const updatePerson = async () => {
  const url = "http://127.0.0.1:8000/api/ptecnica/actualizar";

  const dataForm = {
    id: dataFileById.value[0].id,
    centros_remates_delanteros_extremos: formRef.value.form.centroRemates,
    marcaje_individual_zonal: formRef.value.form.marcajeIndividual,
    dribbling_conos: formRef.value.form.dribblingConos,
    dribbling_espacio_reducido: formRef.value.form.dribblingReducido,
    dribbling_velocidad_maxima: formRef.value.form.dribblingVelocidad,
    dribbling_cambio_direccionYritmo: formRef.value.form.dribblingDireccion,
    tiro_arco_distancia: formRef.value.form.tirosArco,
    tiro_arco_angulo: formRef.value.form.tirosAngulo,
    tiro_arco_precision_potencia: formRef.value.form.tirosPrecision,
    tiro_arco_movimiento: formRef.value.form.tirosMovimiento,
  };
  try {
    axios
      .put(url, dataForm)
      .then(function (response) {
        console.log(response);
        formRef.value?.formClear();
        ElMessage({
          message: "Los datos se actualizaron exitosamente",
          type: "success",
        });
        dataFile();
        showForm.value = false;
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.error("error", error);
  }
};
//DELETE
const deletePerson = async (id) => {
  const url = "http://127.0.0.1:8000/api/ptecnica/eliminar";

  ElMessageBox.confirm(
    "¿Esta seguro de eliminar el registro?",
    "Eliminar registro",
    {
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
      type: "warning",
    }
  )
    .then(() => {
      try {
        axios
          .delete(url, { data: { id } })
          .then(function (response) {
            getData();
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch {
        console.error("error: ", error);
      }

      ElMessage({
        type: "success",
        message: "Se eliminó correctamente.",
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "Eliminación cancelada.",
      });
    });
};

//Save data
const saveData = async () => {
  const validation = await formRef.value?.validateForm();
  if (validation) {
    await createFile();
  }
};

//Update data
const actualizarDatos = async () => {
  const validation = await formRef.value?.validateForm();
  if (validation) {
    await updatePerson();
  }
};

//

onMounted(() => {
  getData();
  dataFile();
});
    </script>
    
  