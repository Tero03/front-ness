<template>

    <div class="container">

        <div class="header_container">
            <h2 class="titulo">Modulo de {{titulo}}</h2>

            <el-row justify="center" align="middle">
            <el-button type="warning">{{tituloBoton}}</el-button>
            </el-row>
        </div>

    </div>

</template>

<script setup>
defineProps({
    titulo: String,
    tituloBoton: String
})
</script>

<style scoped>
.header_container{
    display: flex;
    justify-content:space-between;
    padding:0px;
}
</style>