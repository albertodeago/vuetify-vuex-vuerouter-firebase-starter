// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'

import firebase from 'firebase/app'
import * as firebaseAuth from 'firebase/auth'

import fbConfig from './config/firebaseConfig'

Vue.use(Vuetify)

Vue.config.productionTip = false

// Initialize Firebase
firebase.initializeApp(fbConfig)

Vue.prototype.$firebase = firebase

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  created() {
    firebase.auth().onAuthStateChanged( async (user) => {
      this.$store.dispatch('setLoading', true);
      if(user) {
        await this.$store.dispatch('getUser', user)
        this.$router.push('/')
      } else {
        // used logged out
      }
      this.$store.dispatch('setLoading', false);
    })
  }
})