<template>
  <el-card class="formBox">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="formCSS">
          <el-form
            ref="formRef"
            style="max-width: 600px"
            :model="form"
            :rules="rules"
            label-width="auto"
            :size="formSize"
            status-icon
          >
            <el-form-item label="Nombre" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>

            <el-form-item label="Apellido" prop="lastName">
              <el-input v-model="form.lastName" />
            </el-form-item>

            <el-form-item label="Edad" prop="age">
              <el-input v-model="form.age" />
            </el-form-item>

            <el-form-item label="Peso" prop="weight">
              <el-input v-model="form.weight" />
            </el-form-item>

            <el-form-item label="Altura" prop="height">
              <el-input v-model="form.height" />
            </el-form-item>
            <!-- <el-button type="primary" @click="validateForm(formRef)">Create</el-button> -->
          </el-form>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { reactive, ref } from "vue";

const formSize = ref("default");
const formRef = ref();
const form = reactive({
  name: "",
  lastName: "",
  age: "",
  weight: "",
  height: "",
});

const rules = reactive({
  name: [
    {
      required: true,
      message: "Introduzca su nombre, por favor.",
      trigger: "blur",
    },
    {
      min: 3,
      max: 30,
      message: "El nombre debe ser de 3 a 30 letras",
      trigger: "blur",
    },
  ],
  lastName: [
    {
      required: true,
      message: "Introduzca su apellido, por favor.",
      trigger: "blur",
    },
    {
      min: 3,
      max: 30,
      message: "El apellido debe ser de 3 a 30 letras",
      trigger: "blur",
    },
  ],
  age: [
    {
      required: true,
      message: "Introduzca su edad, por favor.",
      trigger: "blur",
    },
    { min: 1, max: 3, message: "Ingrese una edad valida", trigger: "blur" },
  ],
  weight: [
    {
      required: true,
      message: "Introduzca su peso, por favor",
      trigger: "blur",
    },
    { min: 2, max: 3, message: "  Ingrese un peso valido", trigger: "blur" },
  ],
  height: [
    {
      required: true,
      message: "Introduzca su altura, ej: 197.",
      trigger: "blur",
    },
    { min: 3, max: 3, message: "Ingrese una altura valida", trigger: "blur" },
  ],
});

const formClear = () => {
  formRef.value.resetFields();
};

const validateForm = () => {
  
  return new Promise ((resolve)=>{
    formRef.value?.validate((valid)=>{
      if(valid){
        resolve(true)
      }else{
        resolve(false)
      }
    })
  })
};

defineExpose({validateForm, form, formClear });
</script>


<style scoped>
.formBox {
  margin-left: 120px;
  margin-right: 120px;
  max-width: 100%;
}

/* posicion de la card*/
.formCSS {
  display: flex;
  justify-content: center;
}
</style>
