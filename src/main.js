import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// balm ui and css
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui/dist/balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui/dist/balm-ui.css';
import '@/style/root/default.scss';
import '@/style/root/dark.scss';
// global component
import Head from './components/general/header.vue';
import Navbar from './components/general/navbar.vue';
// vue app setup
const app = createApp(App);
app.use(store).use(router).use(BalmUI).use(BalmUIPlus);
app.component('Head', Head).component('Navbar',Navbar);
app.mount('#app');
