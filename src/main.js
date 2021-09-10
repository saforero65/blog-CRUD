import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
import { auth } from "./firebase";

auth.onAuthStateChanged((user) => {
  if (user) {
    // console.log(user);
    store.dispatch("detectarUsuario", { email: user.email, uid: user.uid });
  } else {
    // console.log(user);
    store.dispatch("detectarUsuario", user);
  }

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
