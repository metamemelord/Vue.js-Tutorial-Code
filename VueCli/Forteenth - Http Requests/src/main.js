import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://meta-memelord.firebaseio.com/';

Vue.http.interceptors.push((request, next) => {
  next();
})

new Vue({
  el: '#app',
  render: h => h(App)
});
