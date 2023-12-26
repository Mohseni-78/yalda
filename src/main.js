import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import Carousel3d from "vue-carousel-3d";
Vue.use(Carousel3d);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
