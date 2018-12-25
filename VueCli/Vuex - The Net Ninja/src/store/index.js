import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: "Banana", price: 20 },
            { name: "Star", price: 40 },
            { name: "Green Apple", price: 60 },
            { name: "Papaya", price: 80 }
        ]
    },
    getters: {
        saleProducts: state => {
            return state.products.map(product => {
                return {
                    name: product.name,
                    price: product.price / 2
                }
            });
        }
    },
    mutations: {
        reducePrice: state => {
            return state.products.map(product => product.price -= 1);
        }
    }
});