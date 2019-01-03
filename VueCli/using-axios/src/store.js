import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";
import axiosLegacy from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
    loginFailed: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.idToken;
      state.userId = userData.userId;
      state.email = userData.email;
    },
    storeUser(state, userData) {
      state.user = userData;
    },
    clearData(state) {
      state.idToken = null;
      state.userId = null;
      state.email = null;
      state.user = null;
    }
  },
  actions: {
    setLogoutTimer({ dispatch }, expTime) {
      setTimeout(() => {
        dispatch("logout");
      }, expTime * 1000);
    },
    signup({ commit, dispatch }, authData) {
      axios
        .post("/signupNewUser?key=AIzaSyCNDj1wl0LzMXQymSIb_hGon_tVDyLuz-0", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          commit("authUser", {
            idToken: res.data.idToken,
            userId: res.data.localId,
            email: res.data.email
          });
          const now = new Date();
          const expDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expiresIn", expDate);
          localStorage.setItem("email", res.data.email);
          dispatch("storeUser", authData);
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch(error => {
          console.log(error);
        });
    },
    login({ commit, state, dispatch }, authData) {
      axios
        .post("/verifyPassword?key=AIzaSyCNDj1wl0LzMXQymSIb_hGon_tVDyLuz-0", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then(res => {
          commit("authUser", {
            idToken: res.data.idToken,
            userId: res.data.localId,
            email: res.data.email
          });
          router.replace("/");
          state.loginFailed = null;
          const now = new Date();
          const expDate = new Date(now.getTime() + res.data.expiresIn * 1000);
          localStorage.setItem("token", res.data.idToken);
          localStorage.setItem("userId", res.data.localId);
          localStorage.setItem("expiresIn", expDate);
          localStorage.setItem("email", res.data.email);
          dispatch("setLogoutTimer", res.data.expiresIn);
        })
        .catch(error => {
          state.loginFailed = true;
          console.log(error);
        });
    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem("token");
      const now = new Date();
      if (!token) {
        router.replace("/");
        return;
      } else if (localStorage.getItem("expiresIn") <= now) {
        router.replace("/signin");
        return;
      } else {
        const userId = localStorage.getItem("userId");
        const email = localStorage.getItem("email");
        console.log("oyyee");
        commit("authUser", {
          idToken: token,
          userId,
          email
        });
        router.replace("/dashboard");
      }
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return;
      }
      axiosLegacy
        .post("/users.json" + "?auth=" + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }
      axiosLegacy
        .get("/users.json" + "?auth=" + state.idToken)
        .then(res => {
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          var user;
          for (var idx in users) {
            if (users[idx].email === state.email) {
              user = users[idx];
              break;
            }
          }
          commit("storeUser", user);
        })
        .catch(error => {
          console.log(error);
        });
    },
    logout({ commit }) {
      commit("clearData");
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("userId");
      localStorage.removeItem("expiresIn");
      router.replace("/signin");
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    },
    loginFailed(state) {
      return state.loginFailed;
    }
  }
});
