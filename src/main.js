import { createApp } from "vue";
import App from "./App.vue";
import router from './router.js'

import GAuth from 'vue3-google-oauth2'
const gauthOption = {
    clientId: '768260902602-p2um51pvvmbur6gnehndb8hcr4e89rc8.apps.googleusercontent.com',
    scope: 'email',
    prompt: 'select_account',
}
// Vue.use(VueRouter)
// import Vuelidate from 'vuelidate'
createApp(App).use(router).use(GAuth, gauthOption).mount("#app");
