import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router' 
import ejemplo from '../views/ejemplo.vue'

const routes=[

    {
        path:"/cargos",
        name:"cargos",
        component:ejemplo
    }

]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;  