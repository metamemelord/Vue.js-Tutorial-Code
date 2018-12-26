import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Vuex from "vuex";
import { routes } from "./routes";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);

Vue.filter("currency", value => {
  return "₹" + value.toLocaleString();
});
const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
