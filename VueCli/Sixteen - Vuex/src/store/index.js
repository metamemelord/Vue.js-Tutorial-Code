import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return 2 * state.counter;
        },
        stringCounter: state => {
            return state.counter + ' clicks!';
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        }
    },
    actions: {
        incrementSimilar: context => {     // Similar but extracts only commit from mutation
            context.commit('increment');
        },
        increment: ({ commit }, payload) => {
            commit('increment', payload);
        },
        decrement: ({ commit }, payload) => {
            commit('decrement', payload);
        },
        asyncIncrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('increment', payload.value);
            }, payload.delay);
        },
        asyncDecrement: ({commit}) => {
            setTimeout(() => {
                commit('decrement');
            }, 1000);
        }
    }
});