import { createStore } from 'vuex';
import service from '../utils/request';
export default createStore({
    state: {
        resTimeList: [],
        specLog: {
            cpuUsage: 0,
            memUsage: 0,
        },
    },
    mutations: {
        CHANGE_SPEC(state, payload) {
            state.specLog = payload;
        },
        CHANGE_RESPONSE_CHART(state, payload) {
            state.resTimeList = payload;
        },
    },
    actions: {
        INIT_LOG({ commit }, socket) {
            socket.on('spec', (data) => commit('CHANGE_SPEC', data));
            socket.on('log', (data) => commit('CHANGE_RESPONSE_CHART', data));
        },
        async TEST() {
            const ret = await service.get('/test_request');
            console.log('ret', ret);
            if (!ret) return;
            console.log('에러 없음');
        },
    },
    getters: {
        resTimeList: (state) => state.resTimeList,
        specLog: (state) => state.specLog,
    },
    modules: {},
});
