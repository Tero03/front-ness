import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router' 
import ejemplo from '../views/ejemplo.vue'
import inicio from '../views/inicio.vue'
import fisicas from '../views/pFisicas.vue'
import tecnicas from '../views/pTecnicas.vue'
import grupo from '../views/pGrupo.vue'
import psicologica from '../views/Psicologico.vue'
import nexoPruebas from '../views/rPruebas.vue'
import jugadors from '../views/jugador.vue'
import equipos from '../views/equipo.vue'
import partidoJugador from '../views/partido_jugador.vue'
import equipoPartido from '../views/equipo_partido.vue'
import armaPartido from '../views/armaPartido.vue'
import resultadoPartido from '../views/resultadoPartido.vue'

const routes=[

    {
        path:"/",
        name:"home",
        component:inicio 
    },

    {
        path:"/cargos",
        name:"cargos",
        component:ejemplo
    },

    {
        path:"/ResultadoPruebas",
        name:"resultPruebas",
        component:nexoPruebas
    },

    {
        path:"/pFisicas",
        name:"pruebFisicas",
        component:fisicas
    },

    {
        path:"/pTecnicas",
        name:"pruebTecnicas",
        component:tecnicas
    },

    {
        path:"/pGrupo",
        name:"pruebGrupo",
        component:grupo
    },

    {
        path:"/pTecnicas",
        name:"pruebTecnicas",
        component:tecnicas
    },

    {
        path:"/examPsicologico",
        name:"examenPsicologico",
        component:psicologica
    },

    {
        path:"/jugador",
        name:"registroJugador",
        component:jugadors
    },

    {
        path:"/equipo",
        name:"datosEquipo",
        component:equipos
    },

    {
        path:"/jugadorPartido",
        name:"partidosJugador",
        component:partidoJugador
    },

    {
        path:"/equipoPartido",
        name:"partidosEquipo",
        component:equipoPartido
    },

    {
        path:"/armaPartido",
        name:"armaPartidos",
        component:armaPartido
    },

    {
        path:"/resultadoPartido",
        name:"resultadosPartido",
        component:resultadoPartido
    }

]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;  