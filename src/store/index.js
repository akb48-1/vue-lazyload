import moduleA from './modules/moduleA';
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        moduleA
    }
});