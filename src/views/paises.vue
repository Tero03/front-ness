<template>
    <LayoutMain>
        <template #slotLayout2>
            <Header :titulo="'Paises'" :tituloBoton="'Añadir pais'"> </Header>
        </template>
    </LayoutMain>
</template>

<script setup>

import { reactive } from 'vue'
import LayoutMain from '../components/LayoutMain.vue'
import Header from '../components/Header.vue'


</script>
