import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import Vue from 'vue'
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap-vue'

import './assets/css/main.css'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
// import { useToast } from 'vue-toastification'

import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';

createApp(App).use(store).use(router).use(Toast).use(BootstrapIconsPlugin).mount('#app')
