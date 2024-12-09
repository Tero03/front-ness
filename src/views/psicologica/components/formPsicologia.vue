<template>
  <el-card class="formBox">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">

        <div class="docFormat">
        <el-form
          label-position="left"
          label-width="auto"
          style="max-width: 600px"
        >
          <el-space fill>
            <el-alert type="info" show-icon :closable="false">
              <p>¿Cuál es su objetivo para buscar mejorar en el futbol?</p>
            </el-alert>
            <el-form-item label="Seleccione una opción"  class="selecFormat">
              <el-select placeholder="¿Cual es su elección?" clearable>
                <el-option label="Primera opción" value="shanghai" />
                <el-option label="Segunda opción" value="beijing" />
              </el-select>
            </el-form-item>

            <el-alert type="info" show-icon :closable="false">
              <p>¿Cómo siente sus capacidades actuales en el futbol?</p>
            </el-alert>
            <el-form-item label="Seleccione una opción"  class="selecFormat">
              <el-select placeholder="¿Cual es su elección?" clearable>
                <el-option label="Primera opción" value="shanghai" />
                <el-option label="Segunda opción" value="beijing" />
              </el-select>
            </el-form-item>

            <el-alert type="info" show-icon :closable="false">
              <p>¿Prefiere destacar de manera individual o considera mas importante el trabajo en equipo?</p>
            </el-alert>
            <el-form-item label="Seleccione una opción"  class="selecFormat">
              <el-select placeholder="¿Cual es su elección?" clearable>
                <el-option label="Primera opción" value="shanghai" />
                <el-option label="Segunda opción" value="beijing" />
              </el-select>
            </el-form-item>

            <el-alert type="info" show-icon :closable="false">
              <p>¿Es capaz de mantener el mental durante un partido complicado?</p>
            </el-alert>
            <el-form-item label="Seleccione una opción"  class="selecFormat">
              <el-select placeholder="¿Cual es su elección?" clearable>
                <el-option label="Primera opción" value="shanghai" />
                <el-option label="Segunda opción" value="beijing" />
              </el-select>
            </el-form-item>

            <el-alert type="info" show-icon :closable="false">
              <p>¿Reconoce sus errores propios y los acepta con el fin de corregirlos y mejorar?</p>
            </el-alert>
            <el-form-item label="Seleccione una opción"  class="selecFormat">
              <el-select placeholder="¿Cual es su elección?" clearable>
                <el-option label="Primera opción" value="shanghai" />
                <el-option label="Segunda opción" value="beijing" />
              </el-select>
            </el-form-item>

            <el-alert type="info" show-icon :closable="false">
              <p>¿Es tolerante con su equipo y acepta que ellos también pueden equivocarse?</p>
            </el-alert>
            <el-form-item label="Seleccione una opción"  class="selecFormat">
              <el-select placeholder="¿Cual es su elección?" clearable>
                <el-option label="Primera opción" value="shanghai" />
                <el-option label="Segunda opción" value="beijing" />
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
import { reactive } from "vue";

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

.selecFormat{
    padding-bottom:30px;
    border-bottom: 2px solid rgb(238, 233, 233);
}
</style>
