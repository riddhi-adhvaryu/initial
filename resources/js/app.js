require('./bootstrap');
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueRouter from 'vue-router';
import router from './routes';
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

window.Vue = Vue;
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const app = new Vue({
  el: '#app',
  router
});
