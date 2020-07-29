import VueRouter from 'vue-router';
import HomeComponent from "./components/HomeComponent.vue"

let routes = [
    {
        path: '/',
        component: HomeComponent
    }
];


export default new VueRouter({
    routes
});