import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router' 
import pais from '../views/paises/paises.vue'
import ejemplo from '../views/ejemplo/ejemplo.vue'
import inicio from '../views/inicio.vue'
import pFisicas from '../views/pFisicas/pFisicas.vue'
import pTecnicas from '../views/pTecnicas/pTecnicas.vue'
import pGrupo from '../views/pGrupo/pGrupo.vue'
import psicologica from '../views/psicologica/Psicologico.vue'
import nexoPruebas from '../views/resultadoPruebas/rPruebas.vue'
import jugadors from '../views/jugador/jugador.vue'
import equipos from '../views/equipo/equipo.vue'
import partidoJugador from '../views/partido_jugador/partido_jugador.vue'
import equipoPartido from '../views/equipo_partido/equipo_partido.vue'
import armaPartido from '../views/armaPartido/armaPartido.vue'
import resultadoPartido from '../views/resultadoPartido/resultadoPartido.vue'
import persona from '../views/persona/persona.vue'
import LayoutMain from '../components/LayoutMain.vue'



const routes=[

    {
        path:"/",
        name:"home",
        component:LayoutMain 
    },

    {
        path:"/cargos",
        name:"cargos",
        component:ejemplo
    },

    {
        path:"/pais",
        name:"Pais",
        component:pais
    },

    {
        path:"/ResultadoPruebas",
        name:"resultPruebas",
        component:nexoPruebas
    },

    {
        path:"/pFisicas",
        name:"pruebFisicas",
        component:pFisicas
    },

    {
        path:"/pTecnicas",
        name:"pruebTecnicas",
        component:pTecnicas
    },

    {
        path:"/pGrupo",
        name:"pruebGrupo",
        component:pGrupo
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
    },

    {
        path:"/registro",
        name:"registrarPersona",
        component:persona
    }

]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;  