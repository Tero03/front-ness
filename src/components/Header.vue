<template>

    <div class="container">

        <div class="header_container">
            <h2 class="container_title">Modulo de {{titulo}}</h2>
            <el-row justify="center" align="middle">
            <el-button type="warning" @click="abrir" class="padded-button">{{tituloBoton}}</el-button>
            </el-row>
        </div>

    </div>

</template>

<script setup>
defineProps({
    titulo:{type:String, requiered:true},
    tituloBoton: {type:String, requiered:true},
    abrir:{
        type:Function,
        requiered:true
    }
})
</script>

<style scoped>

.container{
    margin-bottom:10px;
}


.header_container{
    display: flex;
    justify-content:space-between;
    padding:0px;
    border-bottom: 2px solid rgb(238, 233, 233);
}

.padded-button{
    padding:20px;
    background-color:#7f5af0;
    border:none;
    color:white;
}
</style>