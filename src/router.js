import { createWebHistory, createRouter } from "vue-router";

import Home from './view/Home.vue'
import Confirm from './view/Confirm.vue'
import ConfirmEmail from './components/Confirm.vue';
import ConfirmPassword from './components/ConfirmResetPassword.vue'

const routes = [
    { path: '/', component: Home, name: 'Home'},
    { path: '/confirm', component: Confirm, children:[
        {path:'email', component: ConfirmEmail, name:'ConfirmEmail'},
        {path:'password', component: ConfirmPassword, name: 'ConfirmPassword'}
    ]}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
