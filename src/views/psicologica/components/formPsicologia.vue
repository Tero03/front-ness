<template>
  <el-card class="formBox">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="docFormat">
          <el-form
            label-position="left"
            label-width="auto"
            style="max-width: 600px"
            ref="formRef"
            :model="form"
            :rules="rules"
            :size="formSize"
            status-icon
          >
            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>¿Cuál es su objetivo para buscar mejorar en el futbol?</p>
              </el-alert>
              <el-form-item 
              prop="respuesta1"
              label="Seleccione una opción:" 
              class="selecFormat">
                <el-select 
                v-model="form.respuesta1"
                placeholder="¿Cual es su elección?" clearable>
                  <el-option
                    label="Ser un jugador más competitivo y destacar."
                    value="ser un jugador mas competitivo y destacar"
                  />
                  <el-option
                    label="Mejorar mi rendimiento físico y técnico."
                    value="mejorar mi rendimiento físico y tecnico"
                  />
                  <el-option
                    label="Disfrutar más del deporte con mis amigos y compañeros."
                    value="disfrutar mas del deporte con mis amigos y compañeros"
                  />
                </el-select>
              </el-form-item>

              <el-alert type="info" show-icon :closable="false">
                <p>¿Cómo siente sus capacidades actuales en el futbol?</p>
              </el-alert>
              <el-form-item 
              prop="respuesta2" 
              label="Seleccione una opción:" 
              class="selecFormat">
                <el-select 
                v-model="form.respuesta2"
                placeholder="¿Cual es su elección?" clearable>
                  <el-option
                    label="Estoy en un nivel básico y quiero aprender más."
                    value="estoy en un nivel basico y quiero aprender mas"
                  />
                  <el-option
                    label="Creo que estoy en un nivel intermedio y puedo mejorar."
                    value="creo que estoy en un nivel intermedio y puedo mejorar"
                  />
                  <el-option
                    label="Me considero avanzado, pero siempre hay espacio para crecer."
                    value="me considero avanzado pero siempre hay espacio para crecer"
                  />
                </el-select>
              </el-form-item>

              <el-alert type="info" show-icon :closable="false">
                <p>
                  ¿Prefiere destacar de manera individual o considera mas
                  importante el trabajo en equipo?
                </p>
              </el-alert>
              <el-form-item 
              prop="respuesta3"
              label="Seleccione una opción:" 
              class="selecFormat">
                <el-select 
                v-model="form.respuesta3"
                placeholder="¿Cual es su elección?" clearable>
                  <el-option
                    label="Prefiero destacar de manera individual para motivar a mi equipo."
                    value="prefiero destacar de manera individual para motivar a mi equipo"
                  />
                  <el-option
                    label="Considero más importante el trabajo en equipo para alcanzar objetivos."
                    value="considero mas importante el trabajo en equipo para alcanzar objetivos"
                  />
                  <el-option
                    label="Creo que ambas cosas son importantes y deben complementarse."
                    value="creo que ambas cosas son importantes y deben complementarse"
                  />
                </el-select>
              </el-form-item>

              <el-alert type="info" show-icon :closable="false">
                <p>
                  ¿Es capaz de mantener el mental durante un partido complicado?
                </p>
              </el-alert>
              <el-form-item 
              prop="respuesta4"
              label="Seleccione una opción:" 
              class="selecFormat">
                <el-select 
                v-model="form.respuesta4"
                placeholder="¿Cual es su elección?" clearable>
                  <el-option
                    label="Sí, puedo mantenerme enfocado bajo presión."
                    value="si puedo mantenerme enfocado bajo presion"
                  />
                  <el-option
                    label="A veces me cuesta, pero intento no perder el control."
                    value="a veces me cuesta pero intento no perder el control"
                  />
                  <el-option
                    label="No siempre, creo que necesito mejorar en ese aspecto."
                    value="no siempre creo que necesito mejorar en ese aspecto"
                  />
                </el-select>
              </el-form-item>

              <el-alert type="info" show-icon :closable="false">
                <p>
                  ¿Reconoce sus errores propios y los acepta con el fin de
                  corregirlos y mejorar?
                </p>
              </el-alert>
              <el-form-item 
              prop="respuesta5"
              label="Seleccione una opción:" 
              class="selecFormat">
                <el-select 
                v-model="form.respuesta5"
                placeholder="¿Cual es su elección?" clearable>
                  <el-option
                    label="Sí, acepto mis errores y trato de aprender de ellos."
                    value="si acepto mis errores y trato de aprender de ellos"
                  />
                  <el-option
                    label="A veces me cuesta reconocerlos, pero entiendo su importancia."
                    value="a veces me cuesta reconocerlos pero entiendo su importancia"
                  />
                  <el-option
                    label="Me cuesta mucho aceptar mis errores, pero estoy dispuesto a trabajar en ello."
                    value="me cuesta mucho aceptar mis errores pero estoy dispuesto a trabajar en ello"
                  />
                </el-select>
              </el-form-item>

              <el-alert type="info" show-icon :closable="false">
                <p>
                  ¿Es tolerante con su equipo y acepta que ellos también pueden
                  equivocarse?
                </p>
              </el-alert>
              <el-form-item 
              prop="respuesta6"
              label="Seleccione una opción:" 
              class="selecFormat">
                <el-select 
                v-model="form.respuesta6"
                placeholder="¿Cual es su elección?" clearable>
                  <el-option
                    label="Sí, entiendo que todos cometemos errores y los apoyo."
                    value="si entiendo que todos cometemos errores y los apoyo"
                  />
                  <el-option
                    label="A veces me frustro, pero intento ser comprensivo."
                    value="a veces me frustro pero intento ser comprensivo "
                  />
                  <el-option
                    label="No siempre, creo que debo mejorar mi tolerancia hacia los errores ajenos."
                    value="no siempre creo que debo mejorar mi tolerancia hacia los errores ajenos"
                  />
                </el-select>
              </el-form-item>
            </el-space>

          </el-form>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { reactive, ref, watch  } from "vue";

const propiedad = defineProps({
  dataValue: Object,
});

const formSize = ref("default");
const formRef = ref();
const form = reactive({
  respuesta1: null,
  respuesta2: null,
  respuesta3: null,
  respuesta4: null,
  respuesta5: null,
  respuesta6: null
});

//Obtains the data from the data base
const datosFormulario = () => {
  form.respuesta1 = propiedad.dataValue[0].resultado1;
  form.respuesta2 = propiedad.dataValue[0].resultado2;
  form.respuesta3 = propiedad.dataValue[0].resultado3;
  form.respuesta4 = propiedad.dataValue[0].resultado4;
  form.respuesta5 = propiedad.dataValue[0].resultado5;
  form.respuesta6 = propiedad.dataValue[0].resultado6;
  
};

//Cleans form fields
const formClear = () => {
  formRef.value.resetFields();
};

//validates if the form fields are valid
const validateForm = () => {
  return new Promise((resolve) => {
    formRef.value?.validate((valid) => {
      if (valid) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

defineExpose({ validateForm, form, formClear });

watch(
  () => propiedad.dataValue,
  (newData) => {
    console.log("datos recibidos AÑA ", newData);
    datosFormulario();
  }
);
</script>

<style scoped>
.formBox {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  box-sizing: border-box;
}

.docFormat {
  text-align: center;
}

.selecFormat {
  padding-bottom: 30px;
  border-bottom: 2px solid rgb(238, 233, 233);
}
</style>
