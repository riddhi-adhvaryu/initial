import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
import router from './routes';

window.Vue = Vue;
Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  router
});
