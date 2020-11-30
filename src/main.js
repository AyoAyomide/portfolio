import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Head from './components/general/header.vue'

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui/dist/balm-ui.css';
import '@/style/root/default.scss';

createApp(App).use(store).use(router).use(BalmUI).use(BalmUIPlus).component('Head',Head).mount('#app')
