import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import Vuelidate from "vuelidate";
import router from "./router";
import store from "./store";

axios.defaults.baseURL = "https://vuejs-metamemelord.firebaseio.com";
const requestInterceptor = axios.interceptors.request.use(config => {
  console.log("Request: ", config);
  return config;
});
axios.interceptors.response.use(res => {
  return res;
});

axios.interceptors.request.eject(requestInterceptor);
Vue.use(Vuelidate);
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
