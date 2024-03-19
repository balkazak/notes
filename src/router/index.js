import Vue from 'vue'
import VueRouter from 'vue-router'
import cards from '../views/card-page.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'cards',
        component: cards
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router