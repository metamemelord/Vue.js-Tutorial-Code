import * as types from '../types';

const state = {
    counter: 0
}

const getters = {
    [types.DOUBLE_COUNTER]: state => {
        return 2 * state.counter;
    },
    [types.CLICK_COUNTER]: state => {
        return state.counter + ' clicks!';
    }
}

const mutations = {
    increment: (state, payload) => {
        console.log("LOL");
        state.counter += payload;
    },
    decrement: (state, payload) => {
        state.counter -= payload;
    }
}

const actions = {
    incrementSimilar: context => {     // Similar but extracts only commit from mutation
        context.commit('increment');
    },
    increment: ({ commit }, payload) => {
        commit('increment', payload);
    },
    decrement: ({ commit }, payload) => {
        commit('decrement', payload);
    },
    asyncIncrement: ({ commit }, payload) => {
        setTimeout(() => {
            commit('increment', payload.value);
        }, payload.delay);
    },
    asyncDecrement: ({ commit }) => {
        setTimeout(() => {
            commit('decrement');
        }, 1000);
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}