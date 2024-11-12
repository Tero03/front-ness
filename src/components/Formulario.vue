<template>

    <div class="header_container">
            <h2 class="titulo">Modulo de {{titulo}}</h2>

            <el-row justify="center" align="middle">

                <el-button type="warning">Guardar</el-button>
                <el-button type="danger">Cancelar</el-button>

            </el-row>

            <slot name="slotForm"></slot>

        </div>

</template>

<script setup>

    defineProps({
        titulo: String
    })

</script>

<style scoped>

</style>