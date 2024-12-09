<template>
    <el-container v-show="isVisible" class="form-container">
        <el-row :gutter="5" class="form-container-row">
            <el-col :xs="18" :sm="18" :md="18" :lg="21" :xl="21" class="form-container-title-col">
                <el-button text class="form-container-title-button" size="large"> 
                    {{titulo}}
                </el-button>
            </el-col>

            <el-col :xs="6" :sm="6" :md="6" :lg="2" :xl="2" class="form-container-button-group">
                <el-button size="large" class="form-container-button-cancel" @click="goBack">Cancelar</el-button>
                <el-button type="primary" size="large" class="form-container-button-submit" @click="submit">{{btnTitle}}</el-button>
            </el-col>
        </el-row>

        <el-main>
            <slot name="slotForm"></slot>
        </el-main>
    </el-container>

</template>


<script setup>
import {ref, computed} from 'vue';

const props= defineProps({
        titulo: String,
        isEdit: Boolean,
        isOpen:Boolean
    })

const btnTitle = computed(()=>(props.isEdit ? 'Actualizar' : 'Guardar'))

const isVisible= computed(()=> props.isOpen)

const $emit= defineEmits(['update:is-open', 'save', 'update'])

const goBack= ()=> {
    $emit('update:is-open', false); 
}

const submit= ()=>{
    if(props.isEdit){
        $emit('update')
    }else{
        $emit('save')
    }
}
</script>

<!-- necesario revisar el css -->
<style scoped>

.form-container {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 1px;
  right: 5px;
  z-index: 9;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;

  box-sizing:content-box;
  
}

.form-container-row {
  display: flex;
  align-items: center;
  padding: 10px;
}

/* estilos del titulo delformulario  */
.form-container-title-button {
  font-size: 1.5rem;
  font-weight: bold;
  witdh:500px;
}


/* alinear los botones en la parte soperior derecha */
.form-container-button-group{
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.form-container-button-submit{
  background-color: #2fbe98;
  border: none;
  color: white;
}

</style>