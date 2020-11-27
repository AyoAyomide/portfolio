import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Head from './components/general/header.vue'
createApp(App).use(store).use(router).component('Head',Head).mount('#app')
