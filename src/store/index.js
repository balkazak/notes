import Vue from 'vue'
import Vuex from 'vuex'
import { orderPageModule } from './orders-store/index.js';
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        orderPageModule
    }
});