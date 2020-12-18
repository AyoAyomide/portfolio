<template>
  <router-view/>
</template>
<script>
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
export default {
  
}
</script>
<style lang="scss">

</style>
