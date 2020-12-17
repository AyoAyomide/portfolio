import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// firebase config
import firebase from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYN-kfudcp6Za-e2L8j6Y89eXrgmIDiY8",
    authDomain: "ayoayomide-124.firebaseapp.com",
    projectId: "ayoayomide-124",
    storageBucket: "ayoayomide-124.appspot.com",
    messagingSenderId: "906926373797",
    appId: "1:906926373797:web:b6f9a0eeb2fc7bfc80464c",
    measurementId: "G-893L241FV5"
};
firebase.initializeApp(firebaseConfig);
import "firebase/analytics";
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
app.component('Head', Head).component('Navbar', Navbar);
app.mount('#app');
