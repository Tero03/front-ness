<script>

import {ref} from 'vue'

const nombre=ref('')

export default {
    name:'Ejemplo'
}
</script>

<template>
    <h1>Modulo de ejemplo</h1>
    {{ nombre }}
    <el-input v-model="nombre" placeholder="Please input"/>

    <el-button type="warning" round>Warning</el-button>
</template>

<style>
</style>
