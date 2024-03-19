export const mutations = {
    setOrder(state, newVal) {
        state.newOrder = newVal;
        state.orders.push(newVal)
        localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setFromStorage(state, newVal) {
        state.orders = newVal;
    },
    deleteItem(state, index) {
        state.orders.splice(index, 1);
    }
};