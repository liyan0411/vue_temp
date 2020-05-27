import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Tabbar, TabbarItem, List, Cell, Skeleton } from "vant";
import "vant/lib/index.less";
import api from "./api";

Vue.prototype.$api = api;
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(List);
Vue.use(Cell);
Vue.use(Skeleton);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
