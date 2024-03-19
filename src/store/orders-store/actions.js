import axios from 'axios'
import router from '../../router/index'

export const actions = {
    addOrder(context, payload) {
        console.log(payload)
        context.commit('orderPageModule/setOrder', payload)
    },
};