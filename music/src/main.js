import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'


import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import modalvuex from './stores/modalvuex'; // Import the Vuex store

const app = createApp(App);

app.use(router);
app.use(VeeValidatePlugin);
app.use(modalvuex);

app.mount('#app')
