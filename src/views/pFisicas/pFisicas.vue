<template>
  <LayoutMain>
    <template #slotLayout>
      <Header
        :titulo="'pruebas fisicas'"
        :tituloBoton="'ejercicios'"
        :abrir="abrirFormulario"
      >
      </Header>

      <Formulario
        :titulo="'Ejercicios fisicos'"
        v-model:is-open="showForm"
        :is-edit="formEditing"
        @save="saveData"
        @update="actualizarDatos"
      >
        <template #slotForm>
          <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <formFisico
                v-model:is-open="showForm"
                :is-edit="formEditing"
                ref="formRef"
                :dataValue="dataFileById"
              />
            </el-col>
          </el-row>
        </template>
      </Formulario>

      <el-table :data="resultadosTabla" stripe style="width: 100%">
        <el-table-column prop="sprint_40m" label="sprint40m" width="120" />
        <el-table-column prop="sprint_30m" label="sprint30m" width="120" />
        <el-table-column prop="peso_muerto" label="peso muerto" />
        <el-table-column prop="sentadillas" label="sentadillas" width="120" />
        <el-table-column prop="agilidad_t" label="agilidad en T" />
        <el-table-column prop="agilidad_l" label="agilidad en L" />
        <el-table-column prop="flex_tronco" label="flexTronco" width="120" />
        <el-table-column
          prop="isquiotibiales"
          label="flexPiernas"
          width="120"
        />
        <el-table-column prop="salto_vertical" label="salto vertical" />
        <el-table-column
          prop="salto_horizontal"
          label="salto horizontal"
          width="120"
        />
        <el-table-column fixed="right" label="Acciones" min-width="120">
          <template #default="registro">
            <el-button
              link
              type="primary"
              size="large"
              :icon="Edit"
              @click="editForm(registro.row.id)"
              >Actualizar</el-button
            >
            <el-button
              link type="danger"
              :icon="Delete"
              @click="deletePerson(registro.row.id)"
            >
              Eliminar</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
  </LayoutMain>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import LayoutMain from "../../components/LayoutMain.vue";
import Header from "../../components/Header.vue";
import Formulario from "../../components/Formulario.vue";
import formFisico from "./components/formFisico.vue";
import { Delete, Edit } from "@element-plus/icons-vue";
import axios from "axios";

const showForm = ref(false);
const formEditing = ref(false);
const formRef = ref();
const dataFileById = ref();
const resultadosPersona = ref([]);
const resultadosTabla = ref([]);

const abrirFormulario = () => {
  formEditing.value = false;
  showForm.value = true;
};

const ocultarFormulario = () => {
  showForm.value = false;
  showHeader.value = true;
};

const editForm = async (id) => {
  dataFileById.value = await dataById(id);
  showForm.value = true;
  formEditing.value = true;
};

//ENDPOINTS

const saveData = async () => {
  const validation = await formRef.value?.validateForm();
  if (validation) {
    await createFile();
  }
};

const actualizarDatos = async () => {
  const validation = await formRef.value?.validateForm();
  if (validation) {
    await updatePerson();
  }
};

//create
const createFile = async () => {
  const url = "http://127.0.0.1:8000/api/pfisica/guardar";

  const dataForm = {
    sprint_40m: formRef.value?.form.sprint40,
    sprint_30m: formRef.value?.form.sprint30,
    peso_muerto: formRef.value?.form.pesoMuerto,
    sentadillas: formRef.value?.form.sentadillas,
    agilidad_t: formRef.value?.form.agilidadT,
    agilidad_l: formRef.value?.form.agilidadL,
    flex_tronco: formRef.value?.form.flexTronco,
    isquiotibiales: formRef.value?.form.flexPiernas,
    salto_vertical: formRef.value?.form.saltoVertical,
    salto_horizontal: formRef.value?.form.saltoHorizontal,
    id_persona: 1,
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

const updatePerson = async () => {
  const url = "http://127.0.0.1:8000/api/pfisica/actualizar";

  const dataForm = {
    id: dataFileById.value[0].id,
    sprint_40m: formRef.value.form.sprint40,
    sprint_30m: formRef.value.form.sprint30,
    peso_muerto: formRef.value.form.pesoMuerto,
    sentadillas: formRef.value.form.sentadillas,
    agilidad_t: formRef.value.form.agilidadT,
    agilidad_l: formRef.value.form.agilidadL,
    flex_tronco: formRef.value.form.flexTronco,
    isquiotibiales: formRef.value.form.flexPiernas,
    salto_vertical: formRef.value.form.saltoVertical,
    salto_horizontal: formRef.value.form.saltoHorizontal,
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

const dataFile = async () => {
  const url = "http://127.0.0.1:8000/api/pfisica/datos";

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

//GET
const dataById = async (id) => {
  const url = "http://127.0.0.1:8000/api/pfisica/datosById";

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

const getData = async () => {
  const url = "http://127.0.0.1:8000/api/pfisica/datos";

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

//delete
const deletePerson = async (id) => {
  const url = "http://127.0.0.1:8000/api/pfisica/eliminar";

  ElMessageBox.confirm(
    "¿Esta seguro de eliminar estos resultados?",
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

onMounted(() => {
  getData();
  dataFile();
});
</script>
